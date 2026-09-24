import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scoreJob, parseBudget, parsePosted } from '../score.mjs';
import { normaliseJson, fromCardText } from '../scrape.mjs';

const now = new Date('2026-09-24T12:00:00Z');

test('strong retouch/CGI job scores high', () => {
  const s = scoreJob({
    title: 'CGI product renders and retouching for automotive campaign',
    company: 'Studio North',
    budget: '$2,500',
    description: 'We need 6 high-end CGI renders of a car interior plus photo retouching and compositing for an advertising campaign. Deliverables: 6 images at 8K resolution, deadline in 3 weeks. '.repeat(3),
    postedAt: '2026-09-24T09:00:00Z',
    remote: true,
  }, now);
  assert.ok(s.score >= 75, JSON.stringify(s));
  assert.ok(['3D/CGI', 'Retouch'].includes(s.lane));
  assert.equal(s.decision, 'Review');
});

test('UI job with tiny budget lands below floor', () => {
  const s = scoreJob({ title: 'UI/UX designer for landing page in Figma', budget: '$100', description: 'Need a web design.', postedAt: '2026-09-10T00:00:00Z' }, now);
  assert.ok(s.score < 50, JSON.stringify(s));
  assert.ok(s.flags.includes('Underpriced'));
});

test('unpaid spec work is capped and skipped', () => {
  const s = scoreJob({ title: 'Packaging design', budget: '$3000', description: 'Unpaid test first, packaging label design for a premium brand.' }, now);
  assert.equal(s.decision, 'Skipped: red flag');
  assert.ok(s.score <= 25);
});

test('budget parsing handles currencies and rates', () => {
  assert.deepEqual(parseBudget('$40/hr'), { usd: 40, hourly: true, monthly: false, yearly: false });
  assert.equal(parseBudget('€1,000 - €2,000').usd, 2160);
  assert.equal(parseBudget('3k USD').usd, 3000);
  assert.equal(parseBudget('Negotiable'), null);
});

test('posted parsing', () => {
  assert.equal(parsePosted('3 hours ago', now).toISOString(), '2026-09-24T09:00:00.000Z');
  assert.equal(parsePosted('1727000000').getUTCFullYear(), 2024);
  assert.equal(parsePosted('2026-09-20').toISOString().slice(0, 10), '2026-09-20');
});

test('json normaliser picks up job-shaped objects only', () => {
  assert.equal(normaliseJson({ id: 1, name: 'Some project', covers: {} }), null);
  const j = normaliseJson({ id: 539889, title: 'Key visual retoucher', company: { name: 'Acme' }, budget: '$800', isRemote: true, description: '<p>Hi</p>' });
  assert.equal(j.id, '539889');
  assert.equal(j.company, 'Acme');
  assert.equal(j.description, 'Hi');
  assert.equal(j.remote, true);
});

test('card text fallback', () => {
  const c = fromCardText('3D Product Renders\nAcme Inc\n$1,200\nRemote\n2 days ago');
  assert.equal(c.title, '3D Product Renders');
  assert.equal(c.budget, '$1,200');
  assert.equal(c.posted, '2 days ago');
  assert.equal(c.remote, true);
});

test('ends-in parsing', async () => {
  const { parseEndsIn } = await import('../scrape.mjs');
  assert.equal(parseEndsIn('Remote | Freelance | US$250-500 | Ends in 14 days'), 14);
  assert.equal(parseEndsIn('Ends in 3 days'), 3);
  assert.equal(parseEndsIn('Ends in 2 weeks'), 14);
  assert.equal(parseEndsIn('Ends today'), 0);
  assert.equal(parseEndsIn('no date here'), null);
  assert.equal(fromCardText('Title\nClient\nRemote\nFreelance\nUS$250-500\nEnds in 13 days').endsInDays, 13);
});
