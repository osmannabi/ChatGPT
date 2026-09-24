// Scores a Behance job for 35milimetre. Mirrors the Upwork Job Feed idea
// (sub-scores that add up to 0-100) but swaps "Competition" for "Freshness",
// because Behance does not show applicant counts.
//   Fit 40 · Value 25 · Client Quality 20 · Freshness 15

const LANES = {
  'Retouch': [/retouch/, /photo ?manipulation/, /compositing|composite/, /photoshop/, /post[- ]?production/, /image editing/, /clipping|cut ?out|background removal/, /colou?r grading/],
  '3D/CGI': [/\bcgi\b/, /\b3d\b/, /render(ing)?/, /blender|cinema ?4d|c4d|keyshot|octane|redshift|3ds ?max/, /product visuali[sz]ation/, /archviz|visuali[sz]ation/],
  'AI': [/\bai\b.*(image|visual|art|photo|generat)/, /midjourney|stable diffusion|firefly|flux|nano banana|gpt[- ]?image|comfyui|generative/],
  'Packaging': [/packaging/, /label design|label/, /\bbox design\b|carton|dieline|pouch/, /mock[- ]?up/],
  'Branding': [/key ?visual|\bkv\b/, /advertis|campaign|billboard|\booh\b|print ad/, /brand(ing)? (visual|identity)|brand/, /illustrat/],
};

// Work the studio does well; each hit adds to Fit on top of the lane match.
const STRENGTHS = [/automotive|car\b|vehicle/, /advertis|agency|campaign/, /product (shot|photo|image)/, /high[- ]end|premium|luxury/, /e-?commerce|amazon/, /photographer/];

// Work outside the studio's lanes.
const OFF_LANE = [/ui\/?ux|\bux\b|\bui\b|figma|web ?design|landing page|wordpress|shopify dev/, /developer|front[- ]?end|react|coding/, /social media manager|community manager|copywrit/, /video edit|youtube edit|tiktok edit|reels edit/, /animator|2d animation|motion graphics/, /game (art|asset)|unity|unreal/, /fashion design|interior design|architect/];

const SPEC = [/unpaid/, /\bspec\b|on spec/, /for exposure|portfolio opportunity/, /equity only|revenue share/, /volunteer/];
const FREE_TEST = [/free (test|sample|trial)/, /unpaid (test|trial)/, /test task.{0,40}(unpaid|not paid|free)/];
const ON_SITE = [/on[- ]?site|in[- ]office|relocat|hybrid/];

const FX = { usd: 1, '$': 1, eur: 1.08, '€': 1.08, gbp: 1.27, '£': 1.27, try: 0.03, '₺': 0.03, cad: 0.73, aud: 0.66, inr: 0.012, '₹': 0.012 };

const any = (res, text) => res.some((r) => r.test(text));
const count = (res, text) => res.filter((r) => r.test(text)).length;

export function parseBudget(raw) {
  if (!raw) return null;
  const text = String(raw).toLowerCase().replace(/,/g, '');
  const cur = Object.keys(FX).find((k) => text.includes(k)) ?? 'usd';
  const nums = [...text.matchAll(/(\d+(?:\.\d+)?)\s*(k)?/g)].map((m) => Number(m[1]) * (m[2] ? 1000 : 1)).filter((n) => n > 0);
  if (!nums.length) return null;
  const hourly = /\/\s*h(ou)?r|per hour|hourly|\/hr/.test(text);
  const monthly = /\/\s*mo|per month|monthly|\/month/.test(text);
  const yearly = /\/\s*y(ea)?r|per year|annual|salary/.test(text);
  const amount = Math.max(...nums) * FX[cur];
  return { usd: Math.round(amount), hourly, monthly, yearly };
}

export function parsePosted(raw, now = new Date()) {
  if (!raw) return null;
  if (/^\d{13}$/.test(String(raw))) return new Date(Number(raw));
  if (/^\d{10}$/.test(String(raw))) return new Date(Number(raw) * 1000);
  const iso = new Date(raw);
  if (!Number.isNaN(iso.getTime()) && /\d{4}-\d{2}-\d{2}/.test(String(raw))) return iso;
  const m = String(raw).toLowerCase().match(/(\d+|an?|one)\s*(minute|min|hour|hr|day|week|month)s?\s*ago/);
  if (m) {
    const n = /^\d+$/.test(m[1]) ? Number(m[1]) : 1;
    const unit = { minute: 6e4, min: 6e4, hour: 36e5, hr: 36e5, day: 864e5, week: 6048e5, month: 2592e6 }[m[2]];
    return new Date(now.getTime() - n * unit);
  }
  if (/just now|today/.test(String(raw).toLowerCase())) return now;
  if (/yesterday/.test(String(raw).toLowerCase())) return new Date(now.getTime() - 864e5);
  return null;
}

export function scoreJob(job, now = new Date()) {
  const text = `${job.title ?? ''} ${job.description ?? ''} ${(job.tags ?? []).join(' ')}`.toLowerCase();
  const flags = [];

  // Lane: the lane with the most keyword hits; ties go to the first listed.
  let lane = 'Other';
  let laneHits = 0;
  for (const [name, res] of Object.entries(LANES)) {
    const hits = count(res, text);
    if (hits > laneHits) [lane, laneHits] = [name, hits];
  }

  // Fit (max 40)
  const offHits = count(OFF_LANE, text);
  let fit = Math.min(28, laneHits * 10) + Math.min(12, count(STRENGTHS, text) * 4);
  if (lane === 'Other') fit = Math.min(fit, 10);
  fit -= offHits * 8;
  if (lane === 'Other' && offHits) flags.push('Missing skill');
  fit = clamp(fit, 0, 40);

  // Value (max 25)
  const budget = parseBudget(job.budget);
  let value;
  if (!budget) {
    value = 10;
    flags.push('No budget stated');
  } else if (budget.hourly) {
    value = budget.usd >= 50 ? 25 : budget.usd >= 35 ? 20 : budget.usd >= 25 ? 14 : budget.usd >= 15 ? 8 : 2;
  } else if (budget.monthly || budget.yearly) {
    const monthly = budget.yearly ? budget.usd / 12 : budget.usd;
    value = monthly >= 5000 ? 25 : monthly >= 3000 ? 18 : monthly >= 1500 ? 10 : 4;
  } else {
    value = budget.usd >= 2000 ? 25 : budget.usd >= 1000 ? 20 : budget.usd >= 500 ? 14 : budget.usd >= 200 ? 8 : 2;
  }
  if (value <= 4) flags.push('Underpriced');

  // Client Quality (max 20)
  const desc = job.description ?? '';
  let client = 0;
  if (job.company) client += 6;
  if (desc.length > 400) client += 6;
  else if (desc.length < 120) flags.push('Vague brief');
  if (/deliverable|deadline|timeline|format|resolution|\d+\s*(images|visuals|renders|photos)/.test(text)) client += 4;
  if (job.companyUrl || /\.(com|net|io|co)\b/.test(desc)) client += 4;
  client = clamp(client, 0, 20);

  // Freshness (max 15)
  const posted = job.postedAt ? new Date(job.postedAt) : null;
  let freshness = 5;
  if (posted && !Number.isNaN(posted.getTime())) {
    const hours = (now - posted) / 36e5;
    freshness = hours < 6 ? 15 : hours < 24 ? 12 : hours < 72 ? 8 : hours < 168 ? 4 : 1;
    if (hours < 24) flags.push('Fresh <24h');
  }

  // Red flags
  if (any(SPEC, text)) flags.push('Spec work');
  if (any(FREE_TEST, text)) flags.push('Free test');
  if (any(ON_SITE, text) && !job.remote) flags.push('On-site only');
  if (/full[- ]?time/.test(`${job.type ?? ''} ${text}`)) flags.push('Full-time role');

  let score = fit + value + client + freshness;
  const redFlag = flags.some((f) => ['Spec work', 'Free test'].includes(f));
  if (redFlag) score = Math.min(score, 25);
  if (flags.includes('On-site only')) score -= 15;
  score = clamp(Math.round(score), 0, 100);

  if (job.applied) flags.push('Already applied');
  const decision = job.applied ? 'Applied' : redFlag ? 'Skipped: red flag' : score >= 50 ? 'Review' : 'Below floor';
  const why = [
    `${lane} lane (${laneHits} hit${laneHits === 1 ? '' : 's'})`,
    budget ? `~$${budget.usd}${budget.hourly ? '/hr' : budget.monthly ? '/mo' : budget.yearly ? '/yr' : ''}` : 'no budget',
    offHits ? `${offHits} off-lane signal${offHits === 1 ? '' : 's'}` : null,
    flags.filter((f) => !['Fresh <24h', 'No budget stated'].includes(f)).join(', ') || null,
  ].filter(Boolean).join('; ');

  return { lane, fit, value, clientQuality: client, freshness, score, flags: [...new Set(flags)], decision, why, budgetUsd: budget?.usd ?? null };
}

function clamp(n, lo, hi) {
  return Math.max(lo, Math.min(hi, n));
}
