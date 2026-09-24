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
    // Behance serves an empty job list to browsers that identify as headless.
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
    args: ['--disable-blink-features=AutomationControlled'],
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

// minEndsInDays: Behance closes jobs 14 days after posting, so "Ends in 14 days" means posted today.
// Jobs showing fewer days are dropped; jobs whose end date can't be read are kept.
export async function scrapeJobs({ maxJobs = 40, skipIds = new Set(), headless = true, minEndsInDays = 0 } = {}) {
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
  // The job list scrolls inside its own pane, so scroll that pane (and the page) to load more cards.
  for (let i = 0; i < 5; i++) {
    await page.evaluate(() => {
      for (const el of document.querySelectorAll('[class*="JobsListView"], [class*="jobsList"]')) el.scrollTop = el.scrollHeight;
      window.scrollBy(0, 2500);
    });
    await page.waitForTimeout(1500);
  }

  // Cards link to /joblist/freelance/<id>/<slug> (or /joblist/fulltime/..., ?freelanceJobId=<id>).
  const fromDom = await page.$$eval('a[href*="freelanceJobId="], a[href*="/joblist/"]', (links) =>
    links.map((a) => {
      const href = a.href;
      const id = new URL(href).searchParams.get('freelanceJobId') ?? href.match(/\/joblist\/(?:[a-z-]+\/)?(\d+)/)?.[1];
      const card = a.closest('[class*="JobListingCard-jobListingCard"], [class*="BeCard-container"], li, article') ?? a;
      return { id, url: href.replace(/#.*$/, ''), cardText: card.innerText.trim().slice(0, 1500) };
    }).filter((j) => j.id && !/^\s*$/.test(j.cardText))
  );

  const jobs = new Map();
  for (const d of fromDom) {
    // Prefer the card entry over nav/detail-pane links to the same job.
    if (jobs.has(d.id) && jobs.get(d.id).cardText.length >= d.cardText.length) continue;
    const net = fromNetwork.get(d.id) ?? {};
    jobs.set(d.id, { ...fromCardText(d.cardText), ...net, id: d.id, url: d.url, cardText: d.cardText });
  }
  for (const [id, net] of fromNetwork) if (!jobs.has(id)) jobs.set(id, { ...net, url: net.url ?? JOB_URL(id) });

  const tooOld = (j) => j.endsInDays != null && j.endsInDays < minEndsInDays;
  const fresh = [...jobs.values()].filter((j) => !skipIds.has(String(j.id)) && !tooOld(j)).slice(0, maxJobs);
  for (const job of fresh) {
    if (job.applied) continue;
    if (job.description && job.description.length > 300) continue;
    try {
      await page.goto(JOB_URL(job.id), { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(2500);
      const detail = await page.evaluate(() => {
        // The detail sits next to the job list; drop the list, nav and footer so other jobs' text doesn't leak in.
        const root = (document.querySelector('[role="dialog"]') ?? document.querySelector('main') ?? document.body).cloneNode(true);
        root.querySelectorAll('[class*="JobsListView"], [class*="jobsList"], [class*="JobListingCard"], nav, header, footer, [class*="topActions"]').forEach((el) => el.remove());
        return { text: root.innerText.trim().slice(0, 8000), title: root.querySelector('h1, h2')?.innerText.trim() };
      });
      Object.assign(job, mergeDetail(job, detail));
    } catch (err) {
      job.detailError = String(err.message ?? err);
    }
  }

  await ctx.close();
  return fresh.filter((j) => !tooOld(j)).map((j) => ({ ...j, id: String(j.id), postedAt: toIso(parsePosted(j.posted)) ?? j.postedAt ?? null }));
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
    type: lines.find((l) => /^(freelance|full[- ]?time|part[- ]?time|contract)$/i.test(l))?.replace(/^full[- ]?time$/i, 'Full-time').replace(/^freelance$/i, 'Freelance').replace(/^part[- ]?time$/i, 'Part-time').replace(/^contract$/i, 'Contract') ?? null,
    applied: /applied on/i.test(text),
    endsInDays: parseEndsIn(text),
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
    endsInDays: job.endsInDays ?? card.endsInDays,
    type: job.type ?? (/full[- ]?time/i.test(text) ? 'Full-time' : /part[- ]?time/i.test(text) ? 'Part-time' : /contract/i.test(text) ? 'Contract' : 'Freelance'),
    description: job.description?.length > 300 ? job.description : text,
  };
}

export function parseEndsIn(text = '') {
  const m = text.match(/ends? in (\d+|an?|one) (day|week|hour)s?/i);
  if (m) {
    const n = /^\d+$/.test(m[1]) ? Number(m[1]) : 1;
    return m[2].toLowerCase() === 'week' ? n * 7 : m[2].toLowerCase() === 'hour' ? 0 : n;
  }
  if (/ends? today/i.test(text)) return 0;
  if (/ends? tomorrow/i.test(text)) return 1;
  return null;
}

function stripHtml(s) {
  return String(s).replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

function toIso(d) {
  return d && !Number.isNaN(d.getTime()) ? d.toISOString() : null;
}
