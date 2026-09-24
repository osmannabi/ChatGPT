// Minimal Notion REST client for the Behance Job Feed database.
const API = 'https://api.notion.com/v1';
const VERSION = '2025-09-03';

export function notionClient({ token, dataSourceId }) {
  const call = async (method, route, body) => {
    const res = await fetch(`${API}${route}`, {
      method,
      headers: { Authorization: `Bearer ${token}`, 'Notion-Version': VERSION, 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (res.status === 429) {
      await new Promise((r) => setTimeout(r, Number(res.headers.get('retry-after') ?? 1) * 1000));
      return call(method, route, body);
    }
    if (!res.ok) throw new Error(`Notion ${method} ${route} ${res.status}: ${await res.text()}`);
    return res.json();
  };

  return {
    // Job IDs already in the database, so reruns never duplicate a row.
    async existingJobIds() {
      const ids = new Set();
      let cursor;
      do {
        const page = await call('POST', `/data_sources/${dataSourceId}/query`, { page_size: 100, start_cursor: cursor });
        for (const row of page.results) {
          const text = row.properties?.['Job ID']?.rich_text?.map((t) => t.plain_text).join('');
          if (text) ids.add(text);
        }
        cursor = page.has_more ? page.next_cursor : undefined;
      } while (cursor);
      return ids;
    },

    async addJob(job, s, run) {
      const text = (v) => ({ rich_text: v ? [{ text: { content: String(v).slice(0, 1900) } }] : [] });
      const properties = {
        'Job': { title: [{ text: { content: (job.title ?? `Behance job ${job.id}`).slice(0, 200) } }] },
        'Job ID': text(job.id),
        'Job URL': { url: job.url ?? null },
        'Company': text(job.company),
        'Job Type': { select: ['Freelance', 'Full-time', 'Part-time', 'Contract'].includes(job.type) ? { name: job.type } : { name: 'Freelance' } },
        'Budget': text(job.budget),
        'Budget USD': { number: s.budgetUsd },
        'Timeline': text(job.timeline),
        'Location': text(job.location),
        'Remote': { checkbox: Boolean(job.remote) },
        'Posted At': { date: job.postedAt ? { start: job.postedAt } : null },
        'Found At': { date: { start: new Date().toISOString() } },
        'Lane': { select: { name: s.lane } },
        'Fit': { number: s.fit },
        'Value': { number: s.value },
        'Client Quality': { number: s.clientQuality },
        'Freshness': { number: s.freshness },
        'Score': { number: s.score },
        'Flags': { multi_select: s.flags.map((name) => ({ name })) },
        'Decision': { select: { name: s.decision } },
        'Why': text(s.why),
        'Run': text(run),
      };
      const brief = (job.description ?? '').slice(0, 6000);
      const children = brief
        ? brief.match(/[\s\S]{1,1900}/g).map((chunk) => ({ object: 'block', type: 'paragraph', paragraph: { rich_text: [{ text: { content: chunk } }] } }))
        : [];
      return call('POST', '/pages', { parent: { type: 'data_source_id', data_source_id: dataSourceId }, properties, children });
    },
  };
}
