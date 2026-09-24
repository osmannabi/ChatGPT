// Diagnostic: opens the job list with the saved login and reports what the page
// contains, so the scraper can be matched to Behance's real structure.
// Saves out/debug/ (screenshot, HTML, JSON responses) and prints a short summary.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(HERE, 'out', 'debug');
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'json'), { recursive: true });

const ctx = await chromium.launchPersistentContext(path.join(HERE, '.profile'), { headless: false, viewport: { width: 1440, height: 1000 } });
const page = ctx.pages()[0] ?? (await ctx.newPage());
const responses = [];

page.on('response', async (res) => {
  const type = res.headers()['content-type'] ?? '';
  if (!type.includes('json')) return;
  try {
    const body = await res.text();
    const n = responses.length;
    fs.writeFileSync(path.join(OUT, 'json', `${String(n).padStart(3, '0')}.json`), body.slice(0, 500000));
    responses.push({ n, url: res.url().slice(0, 140), size: body.length, jobWords: (body.match(/budget|freelance|jobTitle|salary|employment/gi) ?? []).length });
  } catch {}
});

await page.goto('https://www.behance.net/joblist?tracking_source=nav20&sort=recent', { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(6000);
for (let i = 0; i < 3; i++) {
  await page.mouse.wheel(0, 2500);
  await page.waitForTimeout(1500);
}

await page.screenshot({ path: path.join(OUT, 'page.png'), fullPage: false });
fs.writeFileSync(path.join(OUT, 'page.html'), await page.content());

const dom = await page.evaluate(() => {
  const hrefs = [...document.querySelectorAll('a[href]')].map((a) => a.getAttribute('href'));
  const jobish = hrefs.filter((h) => /job/i.test(h));
  const dataAttrs = new Set();
  document.querySelectorAll('*').forEach((el) => {
    for (const a of el.attributes) if (/job|card/i.test(a.name) || (a.name === 'class' && /job/i.test(a.value))) dataAttrs.add(`${a.name}=${a.value.slice(0, 60)}`);
  });
  const nextData = document.querySelector('script#__NEXT_DATA__, script[type="application/json"]');
  return {
    url: location.href,
    title: document.title,
    loggedInHint: /sign in|log in/i.test(document.body.innerText.slice(0, 3000)) ? 'page mentions Sign in near top' : 'no sign-in prompt near top',
    links: hrefs.length,
    jobLinks: jobish.slice(0, 15),
    jobAttrs: [...dataAttrs].slice(0, 25),
    embeddedJson: nextData ? `${nextData.id || nextData.type} (${nextData.textContent.length} chars)` : 'none',
    textSample: document.body.innerText.replace(/\n+/g, ' | ').slice(0, 1200),
  };
});

console.log('\n==== BEHANCE DEBUG (paste everything below) ====');
console.log(JSON.stringify(dom, null, 1));
console.log('JSON responses (n, size, job words, url):');
for (const r of responses) console.log(` ${r.n} ${r.size} ${r.jobWords} ${r.url}`);
console.log('==== END ====\nFiles saved in out/debug/');
await ctx.close();
