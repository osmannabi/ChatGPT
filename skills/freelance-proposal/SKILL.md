---
name: "freelance-proposal"
description: "Write Mehmet Turan's (35milimetre) first-message freelance proposals for Upwork, Fiverr, Behance, Contra, LinkedIn or email from a brief, job link or Notion row, and log them to the Proposal Tracker."
---

# Freelance Proposal Writer: Mehmet Turan / 35milimetre

Mehmet is a post-production artist and art director in Istanbul with 26 years in commercial imagery.
35milimetre is his studio: three people (Mehmet, a graphic designer, a 3D artist), plus trusted
specialists when a job needs them. The client talks to the person doing the work.

This skill has one job: turn a brief into a first message that earns one decision from the client,
and log it so the system learns what gets replies.

## Must-not-miss rules

- **Claims come only from the Claims List** on the Notion *Proposal System* page (Step 0). A brand, award, tool or current project that is not on it never appears in a letter, even if an older letter used it. **Never name Apple.**
- **Never invent anything:** job stats (proposal count, post age, client history), a track record, an experience match, a fact about the client's business. If it is not visible, say what is missing.
- **Name one concrete detail from the client's own brief, files or site.** Every letter that got a reply did; no generic letter did.
- **Answer what the client explicitly asked, first.** If the brief lists questions or asks for quotes, each gets a one-line answer. Those answers replace the problem and solution blocks; they are not added on top.
- **The upper word count is a ceiling, not a target.** Upwork: aim for 200.
- **One question, one call to action.** A call is never the default ask.
- **Default output is short:** go/no-go, letter, preview check, staged price, held-back questions. Video script, scope statement and follow-up are written **only when Mehmet asks**. **Never draft a follow-up for Upwork.**
- **Links:** never `35milimetre.com` on Upwork or Fiverr. Use `mehmet-turan.com` there. **Contra is like Behance: use `35milimetre.com`.** Only paths from the link map.
- **Contra: never apply unattended.** Only Mehmet submits, or Claude after he approves that exact letter in chat.
- **Voice:** American spelling (color, colorway, gray, anodized). No em dashes. Never open with "I". Sign off "Mehmet".
- **Lessons first.** A Logged, Testing or Confirmed lesson in Proposal Lessons wins over a rule here until the next fold-in.
- **Log every proposal, with the letter pasted word for word.** Never "see chat draft".

---

## How Mehmet starts a proposal

Any of these, from any computer, in any chat or in the Proposal Generation project:

1. **Pasted text:** a brief, a job post, a Fiverr Brief, a Behance inquiry, an email.
2. **An Upwork job URL or ID:** look it up with the Upwork connector (`get_job_posting`) for the real description, budget, client history, proposal count and post age. If the connector is unavailable, ask him to paste the post.
   **A Contra job URL:** take the slug after `/opportunity/` and call `get_job_by_slug` (an `on.contra.com` link: `resolve_contra_short_url` first). If the Contra connector is unavailable, ask him to paste the post.
3. **A Notion link:** a row in **Upwork Job Feed** (`collection://40a98023-58e3-4fbd-9553-03a8bdc7bf82`), **Contra Job Feed** (`collection://3a4de179-49c2-4caa-90ea-29eceadc530a`) or **Proposal Tracker** (`collection://7d95fdcc-4f74-42b6-90eb-58a6a9d63748`). Fetch it; the brief, score, flags and client signals are on the row. Write the result back onto that same job (Step 6), never a duplicate row.

**Unattended runs** (a scheduled researcher, nobody watching): never ask questions. Pick the most likely reading, state it in the go/no-go, and write the proposal.

---

## Step 0: Load context (one pass, before writing)

1. **Fetch the Proposal System page:** `https://app.notion.com/p/40aab27e5dae8177a866f25db92a9fd5`. It holds the **Claims List**. On a cold application, also fetch its child page **Winning Proposal Patterns** (`https://app.notion.com/p/40aab27e5dae812282a7e221decaadcf`) for openings, closings and pricing evidence.
2. **Read the lessons:** query Proposal Lessons (`collection://601b609b-0687-41a1-aa31-dd0764f285ae`) for `Status` in (Logged, Testing, Confirmed) whose `Platform` includes this platform or All. Apply them. Follow a Testing lesson exactly, so the test stays clean.
3. **Platform and cold/warm.** Take them from the input when they are clear (an Upwork URL is Upwork; "they invited me" is warm). A Contra job-board application is cold; a Contra inquiry or message from the client is warm. Ask only when they are genuinely unclear: Upwork · Fiverr · Behance · Contra · LinkedIn or email; cold (he found the job) or warm (they invited or messaged first).

If Notion is unreachable, use the fallback Claims List at the end of this file, carry on, and say so in one line.

---

## Step 1: Go/no-go read (advice, not a veto)

Two or three lines before the letter. Unless Mehmet says otherwise, write the proposal anyway.

- **Is the job alive?** Proposal count, post age, invites, interviewing, client spend, hire rate, rating, payment verified. Only what is visible or returned by the Upwork connector. Name missing signals instead of guessing.
- **Lane evidence (12 months of Upwork data):** AI imagery and video, and retouch or compositing with a real asset, are the only lanes that hired from cold proposals. Cold packaging on Upwork produced zero threads in a year (packaging works on Behance). 3D/CGI gets replies, then dies on a four-figure first number.
- **Specific or generic brief?** (cold only). A generic brief in a crowded category is a weak bet even if the work is easy. A short, plain brief is usually a real buyer.
- **Does his Upwork profile back the claim?** (cold Upwork only). If the brief points at work the profile does not show, flag it and still write.
- **Fit check:** any tool, file type, implementation or ownership requirement Mehmet does not cover. Raise it in the letter only if it could sink the job later, paired with what he can do.
- **Red flags:** free test requested, off-platform contact, placeholder budget, 50+ proposals. Say so plainly.

Warm leads (invites, inbound messages): run only "alive" and "fit". Never talk him out of a warm lead.

**Contra go/no-go.** Contra shows no proposal count, client spend or hire history, so say those are not visible; judge on the budget, the brief, the organization and its public members, and the post date. Many Contra briefs are machine-written ("deliverables were not provided"): name that as a weak brief rather than inventing scope. The Upwork lane evidence above is Upwork data and does not transfer; there is no Contra reply data yet. Check location limits and time zone in the brief before writing.

---

## Step 1b: Fiverr only: QUALIFY or QUOTE

Work out what the buyer has **confirmed**: scope (a deliverable count), deadline (a real date), budget (a number or band).

- Any of the three unconfirmed: recommend **QUALIFY** and say which is missing.
- All three confirmed: recommend **QUOTE**.
- The buyer directly asked for a price: **QUOTE a defined first stage**, whatever else is unknown.

Ask Mehmet which way (unless unattended; then follow the recommendation).
**QUALIFY** = one real diagnosis, one named first stage with a fixed price and a date, one question for the missing constraint; no held-back list. **QUOTE** = the default output.
**Round two** (he pastes the buyer's reply): build the QUOTE from it, carry the first diagnosis forward, update the same tracker row. Budget band given: quote inside it, staged. "Too expensive": give full, starter and paid-advice paths. Proof first: offer a small paid proof stage. Technical mismatch: say so and name the adjacent thing he can do.
Fiverr offers: single payment by default, milestones for multi-phase work, subscription when the brief hints at ongoing volume; $5 to $20,000, 1 to 90 days.

---

## Step 2: Look before writing

Find something true and specific about **their** material: open the client's site, Amazon listing, shop or Instagram if a name or URL appears anywhere; look at attached references and named competitors. Note what is actually wrong or hard: lighting, edges, perspective, the reflection that gives away the composite, the label that won't hold at thumbnail size, the missing texture shot, the box that is the wrapper scaled up.

**Test for the opening line:** could the client have received this sentence from someone who never looked at their material? If yes, look again. If nothing is findable (no brand, no images), name the craft factor that will decide the result. That still beats a credential.

---

## Step 3: One diagnosis, one opinion

- **The diagnosis:** the thing that will make or break this job, in plain words. *"The pouch reads flat next to Zyn because everything is lit from one soft source; that is a lighting rebuild, not a retouch."*
- **The opinion:** one stance on how to do it, with the reason. *"For six colorways I'd build it in 3D once; the variants come free and the highlights stay identical."*

Both honest. Where Mehmet's fit is adjacent rather than proven: *"I believe I can help based on my experience on the subject."*

---

## Step 4: Write the letter

### Patterns that got replies (from the Winning Proposal Patterns page)

- **Openers:** (A) reframe, "this job is really X, not Y" (*"a relighting job more than a retouching one"*); (B) diagnose their own material (*"the mist is the whole promise, and on your current images it is drawn rather than photographed"*); (C) read their business and say where the work will live; (D) credential first **only** when the brief asks for that exact experience; (E) warm continuation, name what was agreed. Default to A or B.
- **Middle:** the order of operations (*"geometry first, then light, then skin"*); the system that makes image 40 match image 1; where AI output fails, specifically; the last 10% (contact shadow, reflection); handover details that save their team time.
- **Proof:** one line, one link, matched to the brief. One or two brands from the Claims List, only when they match.
- **Close:** one either/or question, answerable in ten seconds, ideally the missing constraint: *"Roughly how many SKUs in the first batch, 10 or 100?"* · *"Is it the one image, or a set from the same shoot?"* · *"Do you have a target budget for the full set, or should I price the first one on its own?"*

### Length (ceiling; aim lower)

| Upwork | Fiverr | Behance | Contra | LinkedIn / email |
|---|---|---|---|---|
| aim 200, max 260 | 100-150 | 130-200 | 130-200 | 90-140 |

### The preview

The first ~225 characters (Upwork list view, Fiverr first two lines, the subject line in email) decide whether it is opened. They must hold their goal, the observation, and a hint of the how. Start "Hi [First name]," when a name is findable, else "Hi,". Never "Dear Sir/Madam" or "Hi there". The first word after the greeting is about them or the work, never "I".

### Structure by platform

**Upwork** (problem-first):
```
Hi [Name],
[UNDERSTANDING, 1-2 sentences: their goal and what is really going on. This is the preview.]
[THE PROBLEM, 2-3 sentences: why it is hard or not working yet, beyond the brief. Frame inference honestly: "From what's in the post, the real risk is..."]
[THE SOLUTION, 2-3 lines: the approach, the decision and why, the first stage.]
[EXPERIENCE, optional, 1 line: one relevant proof + link. Cold only: "I'm also in Upwork's Expert-Vetted group, the top 1% of talent on the platform."]
[One question.]
Mehmet
```
If the client listed questions, the answers replace PROBLEM and SOLUTION. **Hourly rate: $55/hr** (raised from $49 on 2026-11-09; use this in every bid field and hourly estimate). Rate above their band: say so plainly (*"My rate is $55/hr, above your band, and I'd rather say so than quote low."*). Fixed milestones over hourly.

**Fiverr, Behance, email** (short):
```
Hi [Name],
[1-2 sentences: their goal + the specific observation.]
[2-3 short lines, one idea each: the diagnosis, the opinion, one proof.]
[1 line: how you'd run it, the first stage.]
[One question.]
Mehmet
```
Fiverr: the offer panel carries price and delivery, so the message gives a reason to trust the person; a video, if requested, is attached, never linked. Behance: warmest inbound; name 35milimetre, go straight to their project, three-person studio said honestly. Email/LinkedIn: the subject line is the preview, six to nine words naming their thing.

**Contra** uses the short structure, with these differences: name 35milimetre and the three-person studio honestly, as on Behance, but this reader did not pick him first, so the opening still has to earn it like a cold letter. His Contra profile has no reviews yet, so the letter carries the proof; never lean on Contra reputation, and never use the Upwork Expert-Vetted line or Upwork stats. The budget is usually stated: stage the first price inside it, and if the budget does not cover the scope, say so with the question that settles it. Keep the conversation and payment on Contra; a portfolio link is fine, an email or phone number is not. Leave the calendar link in Contra's own field, never in the letter, and never make a call the ask.

### Link map (Webflow, verified 2026-10-14)

One link, inside the body. Upwork and Fiverr: mehmet-turan.com column only. Behance, Contra, LinkedIn, email, direct: 35milimetre.com column; where it says "none", use the mehmet-turan.com page and name 35milimetre in the sign-off.

| Service | 35milimetre.com | mehmet-turan.com |
|---|---|---|
| Image compositing, people in scene | /work/image-compositing | /image-compositing |
| CGI into photo | /work/3d-compositing | /3d-compositing |
| 3D modeling and rendering | /work/3d | /3d-modeling-rendering-compositing |
| AI images, AI product images | /work/ai-images | /100-ai · /ai (product) |
| AI fashion | /work/ai-fashion | /ai-fashion |
| AI video, motion | /work/motion | /ai-video · /motion-design |
| Non-alcoholic beverage | /work/beverage | /non-alcoholic-drinks |
| Spirits, beer, wine | /work/spirits | /alcoholic-drinks |
| Beauty, personal care | /work/personal-care-beauty | /cosmetics |
| Supplements | /work/supplements | /supplements |
| Packaging, label, bottle | /work/packaging | /packaging · /bottle-designs |
| Food | /food | /food-retouch |
| Headshot, portrait retouch | /headshot | /headshots |
| Fashion retouch | /fashion | /fashion |
| AI headshot | none | /ai-headshot |
| Branding | none | /branding |
| Product, e-commerce, Amazon | none | /product · /amazon |
| CPG | none | /cpg |
| Automotive | none | /vehicles |
| Banners, ads, posters | none | /banner |
| Vector illustration | none | /vector-illustration |
| Architecture | none | /architecture |
| Landscape, wildlife retouch | none | /landscape-adventure |
| Beverage label case study | /blog/a-hard-seltzer-design-project | /sory-of-a-beverage-design-from-start-to-finish |
| Fallback | /works | homepage |

Retired Squarespace paths (never link): /composites, /cgi-3d, /still-life, /cpg, /ecommerce, /cosmetics, /beverage, /wines-liquors, /video, /advertisements, /automotive, /galleryai, /ai-composite, /ai-photography, /news. Case studies live under /blog/ (e.g. /blog/creed-case-study-a-nicotine-pouch-packaging-system, /blog/zf-advertisement-renders, /blog/sony-atmos-soundbar-visuals). `/poster-design` is a 404; use /banner.

---

## Step 5: Price in stages

> First stage: **one [hero image / bottle build / test clip], $X, delivered by [date].** Once that's approved, the same setup runs across the remaining [quantity]; indicative $Y-$Z for the full set.

- The first piece carries the setup; the rest are cheaper because of it. That is honest and it turns a big yes into a small one.
- **3D/CGI first stage stays at $300 to $400** (one hero render). Every 3D thread in a year died on a four-figure first number.
- **Free test requested:** offer a small paid test instead (e.g. one image, $120, two days).
- Fixed fees, not hourly. If the budget signals the cheapest option, say so honestly instead of shaving the number.
- Ask for one thing at a time: a reply, or the first stage. Never a call plus files.

---

## Output (default)

```
[Fiverr only] MODE: QUALIFY or QUOTE, and why

GO / NO-GO
[2-3 lines]

---
COVER LETTER ([platform] · [n] words)
[The letter, ready to paste]

---
PREVIEW CHECK
[First 225 characters quoted, with the count. Goal, observation, hint of the how: yes/no.
Behance/Contra/email: the opening line or subject line instead.]

---
PRICING
First stage: $X, delivered by [date].
Full set (indicative): $Y-$Z
[Upwork: the bid field figure, and milestone split if fixed]
[Contra: ATTACH up to 3 Work items by title, from `list_portfolio_projects` for `mehmet_turan`, matched to the brief]

---
HELD BACK (for Mehmet, not to send)
1-3 questions whose answers would change scope or price.

Logged to the Proposal Tracker: [row link]
```

Fiverr QUALIFY: MODE, GO/NO-GO, letter, first-stage price, log line. Nothing else.

**On request only:**
- **"video script"**: 45-75 seconds, 110-180 spoken words, recorded over their material where possible: hello and studio (5s), their brief or site on screen (10s), the diagnosis demonstrated (30s), one portfolio page and one proof line (15s), the same question (10s). Tick `Video` on the row.
- **"scope"**: 60-100 neutral words: what is delivered, in what format, what is not included, how many revision rounds. Paste into the offer description (Fiverr) or the proposal.
- **"follow-up"** (never for Upwork): new information only: a smaller option, a deadline on the quote, or a clean way to say no. Never "just checking in". Send-by date 4-7 days out.

---

## Voice check (loop until clean)

Scan the draft for each of these, fix every hit, then scan again:
- em dashes; "I" as the first word after the greeting; British spelling.
- banned openers: "I can help you with this", "I'd love to work on this", "Happy to help", "right in my wheelhouse / exactly my specialty", "Your project sounds interesting", "As an expert in", "I am passionate about", "I have vast experience in".
- AI tells: "This is exactly the type of project I specialise in", "In today's competitive landscape", "Let me know if you'd like to discuss further", "tailored solutions", "seamless", "elevate", "unlock", "leverage", "robust", "delve", "streamline", three-item lists used for rhythm, bold headers inside a short message, a credential paragraph before the client's problem.
- `35milimetre.com` on Upwork or Fiverr; `mehmet-turan.com` on Contra where the map has a 35milimetre.com path; any retired path; more than one link.
- any brand or claim not on the Claims List; Apple anywhere.
- more than one question or call to action; a call as the only next step.
- over the word ceiling; client's listed questions not answered.

Mehmet writes direct and warm, confident without swagger. He says what is possible and does not promise what he hasn't scoped. The words should sound like a person who did the looking.

---

## Step 6: Log it (every time, automatically)

**Proposal Tracker**, data source `collection://7d95fdcc-4f74-42b6-90eb-58a6a9d63748`.

**Find the row first, never duplicate.** If the input was a Tracker row, update it. If it was a Job Feed row, check its `Proposal` relation; update the linked Tracker row if one exists. Otherwise search the Tracker by `Source Link` (or the job id digits after `~02`) and by client name. Create a row only when none exists.

**Properties on create or update:**
| Property | Value |
|---|---|
| `Project` | Client name or handle + the job, e.g. "James: craft gin CGI renders" |
| `Platform` | Upwork, Fiverr, Behance, Contra, or Direct (Web/Email/LinkedIn) |
| `Lead Status` | Cold or Warm |
| `Status` | `No Reply` on creation. Never set Reject or Won. |
| `Fiverr Mode` | Qualify or Quote; N/A elsewhere |
| `Date Logged` | today |
| `Price Quoted` | first stage / full set as plain text |
| `Price Shown` | ticked if a price is in the letter |
| `Source Link` | job URL, if any |
| `Work Category` | Beverage, Supplements, Beauty/Cosmetics, Fashion AI, Packaging/Label, 3D/CGI Render, Retouch/Composite, Video/Animation, Arch-Viz, Automation/Skills, Other |
| `Opening Type` | what the first 225 characters lead with: Observation on their material, Problem diagnosis, Question, Credential, Other |
| `Letter Words` | word count of the letter |
| `Link Used` | the portfolio URL in the letter |
| `Video` | ticked only if a script was written |
| `Job Feed` | relation to the Job Feed row, when there is one |
| `Behance Days Left` | Behance only: the "days left to close" number if the post shows it; else empty. One-time snapshot. |

Leave `Sent`, `Proposal Viewed`, `Profile Viewed`, `Replied` unticked; Mehmet's report or the sync sets them.

**Page body**, each under `##`: **Request / Brief** (pasted in full), **Cover Letter Sent** (the final letter, word for word), **Pricing**, **Held Back**, plus any on-request block that was produced. Round two: append `## Round 2 [date]` with the buyer's reply and the new letter; update `Price Quoted` and `Fiverr Mode`.

**Job Feed row** (when there is one): set `Decision` to `Proposal drafted`. On Contra Job Feed also set its `Proposal` relation to the Tracker row (the Tracker `Job Feed` relation is Upwork only).

**When Mehmet says he sent it:**
- Tick `Sent`. If he edited the letter, replace **Cover Letter Sent** with what he actually sent, recount `Letter Words`, and run Step 7 on the difference.
- Upwork: put the **Upwork Proposal ID** on this same row (ask for it if he didn't give it) so the daily Upwork Application Sync ticks Viewed and Replied on the row that holds the letter. Set the Job Feed `Decision` to `Applied`.
- Contra: to submit for him, use `apply_to_job_prepare` with the `jobPostingId`, show the preview, and call `apply_to_job_confirm` only after his explicit yes to that letter. Work-tab items may not expose an id; if so, he attaches them in Contra. After sending, set the Contra Job Feed `Decision` to `Applied`.
- Never write to the Upwork Applications database; the sync owns it.

**When a reply comes in** (Mehmet reports it, or you find `Replied` ticked while `Status` is still `No Reply`): set `Status` to `Discussing The Project`.

If Notion is unreachable, don't block the proposal; say in one line that the log was not written.
End the reply with one line: "Logged to the Proposal Tracker: [row link]".

---

## Step 7: Learn from Mehmet's corrections

Trigger: he edits or rejects part of a draft, pastes the version he actually sent, or reports how a client responded.

1. Find the principle, not the instance, in one sentence. ("Remove 'fast turnaround'" is an instance; "don't promise speed before scope is known" is the principle.)
2. If a rule here or a lesson already covers it, it failed to apply: propose clearer wording of that rule instead of a second one.
3. Show him the one-line lesson; save only on his yes, to Proposal Lessons: `Lesson`, `Source = Mehmet correction`, `Platform`, `What Changed` (the concrete edit), `Status = Logged`, `Date` = today.
4. At five or more Logged or Confirmed lessons, offer a fold-in: merge them into the rules as principles, remove what they make redundant, propose the whole updated SKILL.md with the skill-proposal tool, and mark them `Folded in` once he saves it. A good fold-in leaves the skill the same length or shorter.

---

## Step 8: When he asks what's working, or why replies aren't coming

1. **Use the ledgers; don't re-sync.** Upwork outcomes: the **Upwork Applications** database (`collection://29db08db-f2c8-46a0-8056-e7f5d3ce0a49`), kept current by the daily sync; the Upwork Weekly Analyst already reports reply rates by lane and boost every Monday. Match to Tracker rows by `Upwork Proposal ID`, else the job id in `Source Link`. Fiverr, Behance, Contra and direct: Mehmet ticks `Replied` himself.
2. **First check the data is filled in.** Unticked means nobody updated the row, not that the client never looked. Rows without `Sent` ticked or without a verbatim letter can't be compared; list them and ask him to fill in what he remembers.
3. **Two groups, sent rows only.** Answered: `Sent` and (`Replied`, Discussing, Won, or Reject after a reply). Silent: `Sent`, no response, logged 14+ days ago. Exclude Spammer and unsent rows. Fewer than 15 answered or 30 silent: say so and stop.
4. Compare on work category, platform, cold vs warm, opening type, letter length, price shown, link, client signals, and the letters themselves. Report as "X of Y answered vs X of Y silent"; anything under 5 rows is a hint.
5. Name **one** change, and turn it into a test for the next 10 proposals: a Proposal Lessons row with `Source = Reply pattern`, the evidence in `What Changed`, `Status = Testing`. At the next review, write `Test Result` and set `Confirmed` or `Dropped`. When the evidence is new, add the snippet to the Winning Proposal Patterns page.

---

## Working with my-tone

For a **first message** to a client who has not replied yet, this skill's rules win: staged pricing instead of ranges, one closing question, no bold section labels, sign-off "Mehmet". Once the client has replied, my-tone's offer layouts, ranges and closes apply. Both read the same Claims List.

---

## Fallback Claims List (use only when Notion is unreachable; the Notion page wins)

Confirmed by Mehmet 2026-10-31.
- 26 years in commercial post-production, image manipulation and compositing.
- 35milimetre: three people in Istanbul (Mehmet, a graphic designer, a 3D artist), plus trusted specialists.
- Brands that can be named (one or two, matched to the brief; "delivered work for", never "agency of record"): Google, Renault, Peugeot, Diageo (Smirnoff), PepsiCo (Pepsi), Coca-Cola, Unilever (Dove, Degree), Starbucks, Eucerin, Panasonic, Lotus, US Postal Service, Pladis, MAC, ZF, McDonald's, KFC, Dickies, Dewalt, Nixie. For matching beauty and personal care work, also: L'Oréal, Maybelline, Barbasol, Element Brooklyn, PoolBar, Juus, Eloquor London, Bioeffect, Hanalys, Adieu, Alabasta Organik.
- Never name: Apple.
- Upwork Expert-Vetted (top 1% of talent), cold Upwork applications only. Creativepool "Top 25 Influential and Inspiring Retouchers & CGI Artists" since 2018.
- Current or recent projects: only when Mehmet states them in this conversation.
- Unproven fit: "I believe I can help based on my experience on the subject."

## Optional reference files

If these files exist next to this SKILL.md, they add depth; the rules above win where they disagree:
`references/deal-sequencing.md` (why big proposals go quiet; pilot ladder; objection paths) · `references/pricing.md` (benchmarks by work type) · `references/go-no-go-checks.md` (full signal tables) · `references/figma-weave.md` (only for AI workflow or pipeline briefs).