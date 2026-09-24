# Behance Job Feed

Checks the newest jobs on the Behance job list, scores each one for 35milimetre, and adds the promising ones to the **Behance Job Feed** database in Notion (Wiki › Freelance Applications, next to the Upwork Job Feed).

Behance has no jobs API or MCP connector, so this drives a real Chromium browser with your own logged-in Behance session. It only reads pages; it never applies or sends messages.

## Setup (once, on your Mac)

```bash
cd behance-job-feed
npm install
npx playwright install chromium
cp .env.example .env        # then paste your Notion token
npm run login               # a browser opens: sign in to Behance, then close it
```

Notion token: notion.so › Settings › Connections › Develop or manage integrations › New internal integration. Copy the secret into `.env`, then open the Behance Job Feed database › ••• › Connections and add the integration.

## Running

```bash
npm run dry     # scan and print scores, no Notion writes
npm run scan    # scan and push jobs scoring >= MIN_SCORE to Notion
```

Each run also saves the raw scored list to `out/run-*.json`. Job IDs already in Notion are skipped, so it is safe to run as often as you like. Only jobs showing "Ends in 14 days" (Behance's default for a job posted today) are kept; change `ENDS_IN_DAYS` in `.env` to widen that.

### Schedule (weekdays 09:30, 14:00, 17:00)

```bash
./schedule-mac.sh            # install
./schedule-mac.sh --remove   # uninstall
tail -f out/scan.log         # watch runs
```

It uses a macOS LaunchAgent, so it runs in your logged-in session; if the Mac is asleep at a run time, the run happens once when it wakes.

## Scoring (0-100)

Same idea as the Upwork feed, adjusted for what Behance shows (no applicant counts, so Freshness replaces Competition).

| Part | Max | What it looks at |
|---|---|---|
| Fit | 40 | Lane keywords (Retouch, 3D/CGI, AI, Packaging, Branding) plus strengths (automotive, ad agency, product, high-end); off-lane work (UI/UX, dev, video editing, animation) subtracts |
| Value | 25 | Budget converted to USD: fixed $2k+ = 25, hourly $50+ = 25; under $200 is flagged Underpriced |
| Client Quality | 20 | Named company, brief length, clear deliverables/deadline, company link |
| Freshness | 15 | Under 6h = 15, under 24h = 12, under 3 days = 8 |

Red flags: unpaid/spec work or a free test caps the score at 25 and marks it "Skipped: red flag"; on-site only costs 15 points. Only rows with Decision = Review and Score >= `MIN_SCORE` (default 45) go to Notion. Tune keywords in `score.mjs`.

## If Behance changes its page

The scraper reads the JSON the job list loads first, then falls back to job links on the page and each job's detail view. If a run returns 0 jobs, run `node run.mjs --dry-run --headed` to watch it, and check `out/` for what was captured.

`npm test` runs the scoring and parsing tests.
