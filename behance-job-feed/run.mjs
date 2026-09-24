// Entry point: scrape recent Behance jobs, score them, push the promising ones to Notion.
//   node run.mjs --login     sign in once (visible browser)
//   node run.mjs             scan and push
//   node run.mjs --dry-run   scan and print, no Notion writes
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { login, scrapeJobs } from './scrape.mjs';
import { scoreJob } from './score.mjs';
import { notionClient } from './notion.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
loadEnv(path.join(HERE, '.env'));

const args = new Set(process.argv.slice(2));
const MIN_SCORE = Number(process.env.MIN_SCORE ?? 50);
const MAX_JOBS = Number(process.env.MAX_JOBS ?? 40);

if (args.has('--login')) {
  await login();
  process.exit(0);
}

const dryRun = args.has('--dry-run');
const notion = dryRun ? null : notionClient({ token: must('NOTION_TOKEN'), dataSourceId: must('NOTION_DATA_SOURCE_ID') });
const known = notion ? await notion.existingJobIds() : new Set();
const run = new Date().toISOString().slice(0, 16).replace('T', ' ');

const jobs = await scrapeJobs({ maxJobs: MAX_JOBS, skipIds: known, headless: !args.has('--headed') });
const scored = jobs.map((job) => ({ job, s: scoreJob(job) })).sort((a, b) => b.s.score - a.s.score);

fs.mkdirSync(path.join(HERE, 'out'), { recursive: true });
fs.writeFileSync(path.join(HERE, 'out', `run-${run.replace(/[: ]/g, '-')}.json`), JSON.stringify(scored, null, 2));

const keep = scored.filter(({ s }) => s.score >= MIN_SCORE && s.decision === 'Review');
console.log(`Run ${run}: ${jobs.length} new jobs, ${keep.length} at or above ${MIN_SCORE}.`);
for (const { job, s } of scored) {
  console.log(`${String(s.score).padStart(3)}  ${s.lane.padEnd(9)} ${(job.title ?? '').slice(0, 60).padEnd(60)} ${s.why}`);
}

if (notion) {
  for (const { job, s } of keep) await notion.addJob(job, s, run);
  console.log(`Pushed ${keep.length} to Notion.`);
}

function must(name) {
  if (!process.env[name]) throw new Error(`${name} is not set (see .env.example)`);
  return process.env[name];
}

function loadEnv(file) {
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}
