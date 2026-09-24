// Reads the recent Behance job list through a real, logged-in Chromium profile.
// Behance has no public jobs API, so we read what the page itself loads:
//   1. JSON responses the job list fetches (most complete, if their shape is recognisable)
//   2. job links + card text in the DOM (fallback)
//   3. each new job's detail view for the full brief
import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parsePosted } from './score.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PROFILE_DIR = path.join(HERE, '.profile');
const LIST_URL = 'https://www.behance.net/joblist?sort=recent';
const JOB_URL = (id) => `https://www.behance.net/joblist?sort=recent&freelanceJobId=${id}`;

export async function openBrowser({ headless }) {
  return chromium.launchPersistentContext(PROFILE_DIR, {
    headless,
    viewport: { width: 1440, height: 1000 },
    locale: 'en-US',
  });
}

// Opens a visible browser so you can sign in to Behance once; the session is kept in .profile/.
export async function login() {
  const ctx = await openBrowser({ headless: false });
  const page = ctx.pages()[0] ?? (await ctx.newPage());
  await page.goto(LIST_URL);
  console.log('Sign in to Behance in the opened window, then close the window.');
  await new Promise((resolve) => ctx.on('close', resolve));
}

export async function scrapeJobs({ maxJobs = 40, skipIds = new Set(), headless = true } = {}) {
  const ctx = await openBrowser({ headless });
  const page = ctx.pages()[0] ?? (await ctx.newPage());
  const fromNetwork = new Map();

  page.on('response', async (res) => {
    const type = res.headers()['content-type'] ?? '';
    if (!type.includes('json') || !/behance\.net/.test(res.url())) return;
    try {
      walk(await res.json(), (obj) => {
        const job = normaliseJson(obj);
        if (job) fromNetwork.set(job.id, { ...fromNetwork.get(job.id), ...job });
      });
    } catch {
      // body not readable (redirects, aborted requests); ignore
    }
  });

  await page.goto(LIST_URL, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(4000);
  if (/adobe(login|id)|auth\.services\.adobe/.test(page.url())) {
    await ctx.close();
    throw new Error('Not logged in to Behance. Run `npm run login` first.');
  }
  for (let i = 0; i < 4; i++) {
    await page.mouse.wheel(0, 2500);
    await page.waitForTimeout(1500);
  }

  const fromDom = await page.$$eval('a[href*="freelanceJobId="], a[href*="/joblist/"]', (links) =>
    links.map((a) => {
      const href = a.href;
      const id = new URL(href).searchParams.get('freelanceJobId') ?? href.match(/\/joblist\/(\d+)/)?.[1];
      const card = a.closest('li, article, [class*="Card"], [class*="card"]') ?? a;
      return { id, url: href, cardText: card.innerText.trim().slice(0, 1500) };
    }).filter((j) => j.id)
  );

  const jobs = new Map();
  for (const d of fromDom) {
    if (jobs.has(d.id)) continue;
    const net = fromNetwork.get(d.id) ?? {};
    jobs.set(d.id, { ...fromCardText(d.cardText), ...net, id: d.id, url: d.url, cardText: d.cardText });
  }
  for (const [id, net] of fromNetwork) if (!jobs.has(id)) jobs.set(id, { ...net, url: net.url ?? JOB_URL(id) });

  const fresh = [...jobs.values()].filter((j) => !skipIds.has(String(j.id))).slice(0, maxJobs);
  for (const job of fresh) {
    if (job.description && job.description.length > 300) continue;
    try {
      await page.goto(job.url.includes('freelanceJobId') || job.url.includes('/joblist/') ? job.url : JOB_URL(job.id), { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(2500);
      const detail = await page.evaluate(() => {
        const root = document.querySelector('[role="dialog"]') ?? document.querySelector('main') ?? document.body;
        return { text: root.innerText.trim().slice(0, 8000), title: root.querySelector('h1, h2')?.innerText.trim() };
      });
      Object.assign(job, mergeDetail(job, detail));
    } catch (err) {
      job.detailError = String(err.message ?? err);
    }
  }

  await ctx.close();
  return fresh.map((j) => ({ ...j, id: String(j.id), postedAt: toIso(parsePosted(j.posted)) ?? j.postedAt ?? null }));
}

function walk(node, visit, depth = 0) {
  if (!node || typeof node !== 'object' || depth > 12) return;
  if (Array.isArray(node)) return node.forEach((n) => walk(n, visit, depth + 1));
  visit(node);
  for (const v of Object.values(node)) walk(v, visit, depth + 1);
}

const pick = (obj, keys) => keys.map((k) => k.split('.').reduce((o, p) => o?.[p], obj)).find((v) => v !== undefined && v !== null && v !== '');

// Recognises job-shaped objects in Behance's JSON without depending on exact field names.
export function normaliseJson(obj) {
  const id = pick(obj, ['id', 'jobId', 'freelanceJobId']);
  const title = pick(obj, ['title', 'jobTitle', 'name']);
  const hasJobSignal = ['budget', 'budgetAmount', 'payRate', 'compensation', 'salary', 'employmentType', 'jobType', 'company', 'companyName', 'hiringCompany', 'isRemote', 'freelanceJob'].some((k) => k in obj);
  if (!id || typeof title !== 'string' || !hasJobSignal) return null;
  const budget = pick(obj, ['budget.display', 'budget.label', 'budget', 'budgetAmount', 'payRate', 'compensation', 'salary.display', 'salary']);
  return {
    id: String(id),
    title,
    company: pick(obj, ['company.name', 'companyName', 'hiringCompany.name', 'organization.name', 'owner.displayName', 'creator.displayName']) ?? null,
    companyUrl: pick(obj, ['company.url', 'companyUrl', 'hiringCompany.url']) ?? null,
    budget: typeof budget === 'object' ? JSON.stringify(budget) : budget ?? null,
    description: stripHtml(pick(obj, ['descriptionPlain', 'description', 'details', 'body']) ?? ''),
    posted: pick(obj, ['publishedOn', 'postedOn', 'createdOn', 'createdAt', 'publishedAt', 'postedAt']) ?? null,
    location: pick(obj, ['location.display', 'location.name', 'location', 'city']) ?? null,
    remote: Boolean(pick(obj, ['isRemote', 'remote', 'allowRemote'])),
    type: pick(obj, ['employmentType', 'jobType', 'type']) ?? null,
    tags: [pick(obj, ['creativeFields', 'fields', 'tags', 'skills'])].flat().filter(Boolean).map((t) => (typeof t === 'string' ? t : t.name ?? '')).filter(Boolean),
  };
}

export function fromCardText(text = '') {
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
  return {
    title: lines[0] ?? null,
    company: lines[1] ?? null,
    budget: text.match(/(?:[$€£₺]\s?[\d.,]+k?(?:\s?[-–]\s?[$€£₺]?\s?[\d.,]+k?)?(?:\s?\/\s?(?:hr|hour|mo|month|yr|year))?)|(?:[\d.,]+k?\s?(?:USD|EUR|GBP|TRY))/i)?.[0]?.replace(/[.,]$/, '') ?? null,
    posted: text.match(/(\d+|an?)\s*(minute|min|hour|hr|day|week|month)s?\s*ago|just now|today|yesterday/i)?.[0] ?? null,
    remote: /remote/i.test(text),
  };
}

function mergeDetail(job, { text, title }) {
  const card = fromCardText(text);
  const location = text.match(/(?:Location|Based in)\s*:?\s*([^\n]+)/i)?.[1] ?? null;
  const timeline = text.match(/(?:Timeline|Deadline|Duration|Start date)\s*:?\s*([^\n]+)/i)?.[1] ?? null;
  return {
    title: job.title ?? title ?? card.title,
    budget: job.budget ?? card.budget,
    posted: job.posted ?? card.posted,
    remote: job.remote || card.remote,
    location: job.location ?? location,
    timeline: job.timeline ?? timeline,
    type: job.type ?? (/full[- ]?time/i.test(text) ? 'Full-time' : /part[- ]?time/i.test(text) ? 'Part-time' : /contract/i.test(text) ? 'Contract' : 'Freelance'),
    description: job.description?.length > 300 ? job.description : text,
  };
}

function stripHtml(s) {
  return String(s).replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

function toIso(d) {
  return d && !Number.isNaN(d.getTime()) ? d.toISOString() : null;
}
