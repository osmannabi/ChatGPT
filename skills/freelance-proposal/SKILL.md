---
name: "freelance-proposal"
description: "Write Mehmet Turan's (35milimetre) first-message freelance proposals for Upwork, Fiverr, Behance, Contra, LinkedIn or email from a brief, job link or Notion row, and log them to the Proposal Tracker."
---

# Freelance Proposal Writer: Mehmet Turan / 35milimetre

Skill version: 2026-11-12.

Mehmet is a post-production artist and art director in Istanbul with 26 years in commercial imagery.
35milimetre is his studio: three people (Mehmet, a graphic designer, a 3D artist), plus trusted
specialists when a job needs them. The client talks to the person doing the work.

This skill has one job: turn a brief into a first message that sells one small first step, and log
it so the system learns what gets replies.

## Must-not-miss rules

- **The letter sells one small first step, not the project.** Every cold hire in 12 months of Upwork data began as a $190 to $240 first job. A cold letter names one first step with a price at or under $400 and a delivery time, in every lane (Step 5). Never a number above the client's stated budget, never a rate card, never a cost caveat.
- **Look first, and say only what you saw.** Open the client's site, listing or files before writing (Step 2). A statement about their material must come from that looking. If there was nothing to look at, use the short form and do not tell them what their job "really" is.
- **Name one concrete detail from the client's own brief, files or site.** Every letter that got a reply did; no generic letter did.
- **Claims come only from the Claims List** on the Notion *Proposal System* page (Step 0). A brand, award, tool or current project that is not on it never appears in a letter, even if an older letter used it. **Never name Apple.**
- **Never invent anything:** job stats (proposal count, post age, client history), a track record, a comparable project, a result, an attachment title, a fact about the client's business. If it is not visible, say what is missing.
- **Answer what the client explicitly asked, first.** If the brief lists questions or asks for quotes, each gets a one-line answer. Those answers replace the middle of the letter; they are not added on top.
- **Two lengths, both ceilings.** Short form 70 to 110 words. Standard form up to 180 (Step 4).
- **One question, one call to action.** A call is never the default ask.
- **Default output is short:** go/no-go with a verdict, letter, preview check, attachments, staged price, held-back questions. Video script, scope statement and follow-up are written **only when Mehmet asks**. **Never draft a follow-up for Upwork.**
- **Links:** never `35milimetre.com` on Upwork or Fiverr. Use `mehmet-turan.com` there. **Contra is like Behance: use `35milimetre.com`.** Only paths from the link map.
- **Contra: never apply unattended.** Only Mehmet submits, or Claude after he approves that exact letter in chat.
- **Voice:** Mehmet's own. American spelling (color, colorway, gray, anodized). No em dashes. The first sentence is about them or the work, never about Mehmet. Sign off "Mehmet".
- **Lessons first.** A Logged, Testing or Confirmed lesson in Proposal Lessons wins over a rule here until the next fold-in.
- **Log every proposal, with the letter pasted word for word.** Never "see chat draft".
- **This file wins** over the reference files, and over the Winning Proposal Patterns page on length, opener choice and first-step price. The Notion Claims List wins on claims.

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

1. **Fetch the Proposal System page:** `https://app.notion.com/p/40aab27e5dae8177a866f25db92a9fd5`. It holds the **Claims List**. On a cold application, also fetch its child page **Winning Proposal Patterns** (`https://app.notion.com/p/40aab27e5dae812282a7e221decaadcf`) for real openings, closings and pricing evidence.
2. **Read the lessons:** query Proposal Lessons (`collection://601b609b-0687-41a1-aa31-dd0764f285ae`) for `Status` in (Logged, Testing, Confirmed) whose `Platform` includes this platform or All. Apply them. Follow a Testing lesson exactly, so the test stays clean.
3. **Platform and cold/warm.** Take them from the input when they are clear (an Upwork URL is Upwork; "they invited me" is warm). Cold means the client has not looked at Mehmet yet: an Upwork or Contra job-board application, a **Behance job-list post he found**, a cold email. Warm means they came to him: an invite, a Fiverr Brief match, a **Behance inquiry or message**, a Contra inquiry, a reply. Ask only when it is genuinely unclear.

If Notion is unreachable, use the fallback Claims List at the end of this file, carry on, and say so in one line.

---

## Step 1: Go/no-go read, ending in a verdict (advice, not a veto)

Two or three lines before the letter. The first line is the verdict and the one fact that drives it:

- **APPLY:** the job is alive, and it is either a lane that hires or a specific brief with something real to look at.
- **APPLY SHORT:** alive but thin. A short plain brief, nothing findable in Step 2, an adjacent fit, or a shortlist that is already forming. Use the short form.
- **SKIP:** a hard red flag, or two or more red signals. Still write the letter (short form) unless Mehmet has said to drop SKIPs; the call is his.

What feeds the verdict:

- **Is the job alive?** Proposal count, post age, invites sent, **how many freelancers are already interviewing**, client spend, hire rate, rating, payment verified. Only what is visible or returned by the Upwork connector. Name missing signals instead of guessing.
- **Lane evidence (12 months of Upwork data):** AI imagery and video, and retouch or compositing with a real asset, are the only lanes that hired from cold proposals. Cold packaging on Upwork produced zero threads in a year. 3D/CGI gets replies, then dies on a four-figure first number.
- **Specific or generic brief?** (cold only). A generic brief in a crowded category is a weak bet even if the work is easy. A short, plain brief is usually a real buyer: APPLY SHORT.
- **Does his Upwork profile back the claim?** (cold Upwork only). If the brief points at work the profile does not show, flag it and still write.
- **Fit check:** any tool, file type, implementation or ownership requirement Mehmet does not cover. Raise it in the letter only if it could sink the job later, paired with what he can do.
- **Red flags:** free test demanded, off-platform contact, placeholder budget, 50+ proposals, posted 3+ days ago. Say so plainly.
- **Can the first step fit under $400?** If the smallest honest first step costs more, say so here.

Warm leads: run only "alive" and "fit". The verdict is APPLY or APPLY SHORT. Never talk him out of a warm lead.

**Contra and Behance job list.** They show no proposal count, client spend or hire history, so say those are not visible; judge on the budget, the brief, the organization and the post date (Behance: the "days left to close" number when shown). Many Contra briefs are machine-written ("deliverables were not provided"): name that as a weak brief instead of inventing scope. The Upwork lane evidence is Upwork data and does not transfer. Check location limits and time zone before writing.

---

## Step 1b: Fiverr only: QUALIFY or QUOTE

Work out what the buyer has **confirmed**: scope (a deliverable count), deadline (a real date), budget (a number or band).

- Any of the three unconfirmed: recommend **QUALIFY** and say which is missing.
- All three confirmed: recommend **QUOTE**.
- The buyer directly asked for a price: **QUOTE a defined first step**, whatever else is unknown.

Ask Mehmet which way (unless unattended; then follow the recommendation).
**QUALIFY** = one real observation, one named first step with a fixed price and a delivery time, one question for the missing constraint; no held-back list. **QUOTE** = the default output.
**Round two** (he pastes the buyer's reply): build the QUOTE from it, carry the first observation forward, update the same tracker row. Budget band given: quote inside it, staged. "Too expensive": give full, starter and paid-advice paths. Proof first: offer a small paid proof stage. Technical mismatch: say so and name the adjacent thing he can do.
Fiverr offers: single payment by default, milestones for multi-phase work, subscription when the brief hints at ongoing volume; $5 to $20,000, 1 to 90 days.

---

## Step 2: Look before writing (really look)

Open the client's material with whatever web or browser tool is available: their site, Amazon listing, shop or Instagram if a name or URL appears anywhere; the attached files; the reference they linked; the competitors they named. Note what is actually wrong or hard: lighting, edges, perspective, the reflection that gives away the composite, the label that won't hold at thumbnail size, the box that is the wrapper scaled up.

Record it in the output as **LOOKED AT**: what was opened and the one thing seen there. If a tool could not reach the page, or the post has no brand, URL or files, write "nothing findable" and say why.

**Test for the opening line:** could the client have received this sentence from someone who never looked at their material? If yes, it is a statement about the craft, not about them. That is allowed only when it is framed as craft knowledge ("on jobs like this, the usual failure is..."), never dressed up as an observation.

**Nothing findable means the short form.** Do not manufacture a diagnosis of a business nobody looked at.

---

## Step 3: One observation, one opinion

- **The observation:** the thing that will make or break this job, in plain words, from what was seen. *"The pouch reads flat next to Zyn because everything is lit from one soft source; that is a lighting rebuild."*
- **The opinion:** one stance on how to do it, with the reason. *"For six colorways I'd build it in 3D once; the variants come free and the highlights stay identical."*

Give credit before the problem when it is due (*"The bar looks right already; the box is the problem."*). It reads as an honest second opinion, not a pitch.

**When Mehmet's fit is adjacent, not proven,** say so and name the adjacent work: *"I believe I can help based on our experience with 3D product work and compositing."* The sentence always names the real, related experience and sits next to a link or an attachment that shows it. Never use it alone, and never with "on the subject" as the whole claim.

---

## Step 4: Write the letter

### Pick the opener by what Step 2 found, not by habit

| What you have | Opener |
|---|---|
| You saw their material (site, listing, files, reference) | The observation. "I looked at your listing: ..." is a fine start. |
| You know their business, not the asset | Where the work will live (*"Larsen runs Meta and TikTok for DTC brands, so my guess is this poster lives in a feed as often as on a wall."*) |
| The brief itself describes a failure or a craft problem | A reframe built on their detail (*"Matching driveway pavers around a car is all vanishing point."*) |
| They asked for exact experience | The credential, first |
| Warm, already talking | Name what was agreed and the next step |
| Nothing specific to go on | Plain: their deliverable in their own words, then the first step. No reframe. |

The reframe "X is a Y job more than a Z job" became the default and every letter sounded the same. Use a "not X but Y" construction **at most once per letter**, and in the opening only in the third row above.

### Two forms

**Short form, 70 to 110 words.** Use it when the verdict is APPLY SHORT or SKIP, the brief is short and plain, Step 2 found nothing, or the current test assigns it.
```
Hi [Name],
[1-2 sentences: what you saw, or their goal in their words, and the one thing that decides the result. This is the preview.]
[1-2 sentences: how you'd do it.]
[The first step: what, price, when.]
[Proof: one comparable piece of work + the link, or what is attached.]
[One question.]
Mehmet
```

**Standard form.** Ceiling 180 words on Upwork, Behance and Contra; 150 on Fiverr; 140 on LinkedIn and email.
```
Hi [Name],
[WHAT YOU SAW, 1-2 sentences: their goal and the observation. This is the preview.]
[WHY IT IS HARD, 1-2 sentences, from what you saw. Flag inference: "From what's in the post, the risk is..."]
[HOW, 2-3 short sentences: the order of operations, the one decision and why.]
[THE FIRST STEP, 1 sentence: deliverable, price, delivery time.]
[PROOF, 1 sentence: one comparable piece of work, what is attached, one link.]
[One question.]
Mehmet
```
If the client listed questions, answer each in one line (about 15 words); the answers replace WHY and HOW. Only then may the ceiling stretch to 240.

### What goes in each part

- **Middle:** the order of operations (*"geometry first, then light, then skin"*); the system that makes image 40 match image 1; where AI output fails, specifically; the last 10% (contact shadow, reflection); handover details that save their team time. One or two of these, not all.
- **Proof:** one comparable piece of work, named: a Claims List brand with the kind of work done for it, or a case study from the link map. No invented counts, results or dates, and no list of logos. It may point at an attachment (*"the attached medical fridge shows the level of product detail"*).
- **Expert-Vetted (cold Upwork only):** folded into the proof sentence, never its own sentence and never in the first 225 characters: *"26 years in commercial post, Expert-Vetted here (Upwork's top 1%); compositing is the core of it: mehmet-turan.com/image-compositing"*. Drop it on warm invites.
- **Close:** one either/or question, answerable in ten seconds: the missing constraint (*"Roughly how many SKUs in the first batch, 10 or 100?"*), or, when scope is already clear, the go-ahead on the first step (*"Should I start with the cheeseburger?"*).

### The preview

The first ~225 characters (Upwork list view, Fiverr first two lines, the subject line in email) decide whether the letter is opened. They hold their goal and the observation. Start "Hi [First name]," when a name is findable, else "Hi,". Never "Dear Sir/Madam" or "Hi there". The first sentence is about them or the work. "I looked at your listing" and "I watched the reference" qualify, because they report the looking; "I am", "I have", "I can" and "I'd love" do not.

### Show the work

For a visual service, a picture does more than a paragraph. Every output has an **ATTACH** block: one to three specific pieces, by title, matched to how the job will be produced.
- Contra: Work items from `list_portfolio_projects` for `mehmet_turan`. Real product work for product jobs, full brand case studies for branding jobs.
- Upwork: portfolio items when the connector returns them (`get_profile`); else images from the matching portfolio page.
- Behance: the matching Behance projects. Email: no attachments on a first cold email; link instead.
- If you cannot name a real piece, write "Mehmet to pick 1 or 2 images closest to [X]". Never invent a title.

### By platform

- **Upwork.** Hourly rate **$55/hr** (raised from $49 on 2026-11-09; use it in every bid field and hourly estimate). Fixed milestones over hourly: on an hourly post, bid $55/hr and offer the first step as a fixed milestone. Rate above their band: say so plainly (*"My rate is $55/hr, above your band, and I'd rather say so than quote low."*).
- **Fiverr.** The offer panel carries price and delivery, so the message gives a reason to trust the person; a video, if requested, is attached, never linked.
- **Behance job list (cold).** He found the post; the reader did not pick him. The opening has to earn it like any cold letter. Name 35milimetre and the three-person studio in one honest line, attach or link the matching Behance projects, and keep to the short or standard form.
- **Behance inquiry (warm).** They found his work and wrote first. Go straight to their project; do not re-sell the portfolio.
- **Contra.** Cold, like the Behance job list. His Contra profile has no reviews yet, so the letter and the attachments carry the proof; never lean on Contra reputation, and never use the Expert-Vetted line or Upwork stats. Keep the conversation and payment on Contra; a portfolio link is fine, an email or phone number is not. Leave the calendar link in Contra's own field.
- **Email / LinkedIn.** The subject line is the preview: six to nine words naming their thing.

### Link map (Webflow, verified 2026-10-14)

One link, inside the body. Upwork and Fiverr: mehmet-turan.com column only. Behance, Contra, LinkedIn, email, direct: 35milimetre.com column; where it says "none", use the mehmet-turan.com page and name 35milimetre in the sign-off. Match the link to **how Mehmet will produce the job** (AI video), not to the client's wording ("motion graphics"), and to the deliverable, not the industry.

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

## Step 5: Price the first step

> I'd start with **one [hero image / test clip / concept], $X, delivered in [n] days.**

- **Cold, any lane, any platform: X is $400 or less.** Shrink the first step until it fits: one hero render, one image, one 5-second clip, one flat concept. If the smallest honest step costs more, say so in the go/no-go and let Mehmet decide; never slip a four-figure number into a cold letter. Five threads went quiet after a $1,800+ range, and every 3D thread in a year died on a four-figure first number.
- **The full-set number stays out of a cold letter** unless the client asked for a total or stated a budget. It goes in the PRICING block for Mehmet.
- **Stated budget:** the first step fits inside it and counts toward it. Never quote above a stated budget in a first message; scope down to fit, and put what the budget would really cover in HELD BACK.
- **No rate cards and no cost caveats** in a first message: no per-minute or per-image tables, no "AI generation billed separately", no "shoot costs extra". Those go in HELD BACK.
- **The client asked for a paid test:** price it in the letter, every time.
- **Free test requested:** offer a small paid test instead (e.g. one image, $120, two days).
- **Warm leads** may use the pilot-ladder bands in `references/deal-sequencing.md`; still a first step before any total.
- Fixed fees, not hourly. If the budget signals the cheapest option, say so honestly instead of shaving the number.
- Ask for one thing at a time: a reply, or the first step. Never a call plus files.

---

## Output (default)

```
[Fiverr only] MODE: QUALIFY or QUOTE, and why

GO / NO-GO: [APPLY | APPLY SHORT | SKIP]: [the one fact that drives it]
[1-2 more lines]
LOOKED AT: [what was opened and what was seen there, or "nothing findable" and why]

---
COVER LETTER ([platform] · [Short | Standard] · [n] words)
[The letter, ready to paste]

---
PREVIEW CHECK
[First 225 characters quoted, with the count. Their goal and the observation: yes/no.
Behance/Contra/email: the opening line or subject line instead.]

---
ATTACH
[1-3 pieces by title, or "Mehmet to pick 1 or 2 images closest to [X]"]

---
PRICING
First step: $X, delivered in [n] days.
Full set (indicative, for Mehmet): $Y-$Z
[Upwork: the bid field figure, and milestone split if fixed]

---
HELD BACK (for Mehmet, not to send)
1-3 questions or cost notes whose answers would change scope or price.

Logged to the Proposal Tracker: [row link]
```

Fiverr QUALIFY: MODE, GO/NO-GO, letter, ATTACH, first-step price, log line. Nothing else.

**On request only:**
- **"video script"**: 45-75 seconds, 110-180 spoken words, recorded over their material where possible: hello and studio (5s), their brief or site on screen (10s), the observation demonstrated (30s), one portfolio page and one proof line (15s), the same question (10s). Tick `Video` on the row.
- **"scope"**: 60-100 neutral words: what is delivered, in what format, what is not included, how many revision rounds. Paste into the offer description (Fiverr) or the proposal.
- **"follow-up"** (never for Upwork): new information only: a smaller option, a deadline on the quote, or a clean way to say no. Never "just checking in". Send-by date 4-7 days out.

---

## Voice check (loop until clean)

Write the way Mehmet writes (the my-tone skill is built from his sent mail; load it when it is available): the first line is the point, no sentence over 25 words, contractions, plain verbs, "we" for studio work and "I" for his own. He is direct and warm, confident without swagger. He says what is possible and does not promise what he hasn't scoped. A letter that sounds like an essay about the craft is wrong even when every sentence is true.

Scan the draft for each of these, fix every hit, then scan again:
- em dashes; a first sentence about Mehmet; British spelling; a sentence over 25 words.
- a statement about the client's material that Step 2 did not actually see.
- structural AI tells: "not X but Y" or "X more than Y" used more than once; one-line aphorisms (*"Skin is the tell."*); "the real job is", "the whole job", "that is what makes"; three-item lists used for rhythm; bold headers inside a short message; a credential paragraph before the client's problem.
- banned openers: "I can help you with this", "I'd love to work on this", "Happy to help", "right in my wheelhouse / exactly my specialty", "Your project sounds interesting", "As an expert in", "I am passionate about", "I have vast experience in".
- AI words: "This is exactly the type of project I specialize in", "In today's competitive landscape", "Let me know if you'd like to discuss further", "tailored solutions", "seamless", "elevate", "unlock", "leverage", "robust", "delve", "streamline".
- cold letter with no priced first step; a cold first number above $400; any number above the stated budget; a rate card or cost caveat.
- the honest-fit sentence used alone, or without naming the adjacent work; Expert-Vetted as its own sentence.
- `35milimetre.com` on Upwork or Fiverr; `mehmet-turan.com` on Contra or Behance where the map has a 35milimetre.com path; any retired path; more than one link.
- any brand or claim not on the Claims List; Apple anywhere.
- more than one question or call to action; a call as the only next step.
- over the word ceiling; client's listed questions not answered; no ATTACH block.

---

## Step 6: Log it (every time, automatically)

**Proposal Tracker**, data source `collection://7d95fdcc-4f74-42b6-90eb-58a6a9d63748`.

**Find the row first, never duplicate.** If the input was a Tracker row, update it. If it was a Job Feed row, check its `Proposal` relation; update the linked Tracker row if one exists. Otherwise search the Tracker by `Source Link` (or the job id digits after `~02`) and by client name. Create a row only when none exists.

**Properties on create or update:**
| Property | Value |
|---|---|
| `Project` | Client name or handle + the job, e.g. "James: craft gin CGI renders" |
| `Platform` | Upwork, Fiverr, Behance, Contra, or Direct (Web/Email/LinkedIn) |
| `Lead Status` | Cold or Warm (a Behance job-list post is Cold) |
| `Status` | `No Reply` on creation. Never set Reject or Won. |
| `Verdict` | Apply, Apply Short or Skip, as written in the go/no-go |
| `Variant` | Short or Standard: the form the letter used |
| `Fiverr Mode` | Qualify or Quote; N/A elsewhere |
| `Date Logged` | today |
| `Price Quoted` | first step / full set as plain text |
| `Price Shown` | ticked if a price is in the letter |
| `Source Link` | job URL, if any |
| `Work Category` | Beverage, Supplements, Beauty/Cosmetics, Fashion AI, Packaging/Label, 3D/CGI Render, Retouch/Composite, Video/Animation, Arch-Viz, Automation/Skills, Other |
| `Opening Type` | what the first 225 characters lead with: Observation on their material, Problem diagnosis, Question, Credential, Other |
| `Letter Words` | word count of the letter |
| `Link Used` | the portfolio URL in the letter |
| `Attachments` | the titles from the ATTACH block |
| `Video` | ticked only if a script was written |
| `Job Feed` | relation to the Job Feed row, when there is one |
| `Behance Days Left` | Behance only: the "days left to close" number if the post shows it; else empty. One-time snapshot. |

Leave `Sent`, `Proposal Viewed`, `Profile Viewed`, `Replied` unticked; Mehmet's report or the sync sets them.

**Page body**, each under `##`: **Request / Brief** (pasted in full), **Looked At**, **Cover Letter Sent** (the final letter, word for word), **Pricing**, **Held Back**, plus any on-request block that was produced. Round two: append `## Round 2 [date]` with the buyer's reply and the new letter; update `Price Quoted` and `Fiverr Mode`.

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
4. At five or more Logged or Confirmed lessons, offer a fold-in: merge them into the rules as principles, remove what they make redundant, propose the whole updated SKILL.md with the skill-proposal tool, and mark them `Folded in` once he saves it. A good fold-in leaves the skill the same length or shorter. **Name every reference file the change makes stale;** a fold-in that updates only this file is how the references drifted before.

---

## Step 8: When he asks what's working, or why replies aren't coming

1. **Use the ledgers; don't re-sync.** Upwork outcomes: the **Upwork Applications** database (`collection://29db08db-f2c8-46a0-8056-e7f5d3ce0a49`), kept current by the daily sync; the Upwork Weekly Analyst already reports reply rates by lane and boost every Monday. Match to Tracker rows by `Upwork Proposal ID`, else the job id in `Source Link`. Fiverr, Behance, Contra and direct: Mehmet ticks `Replied` himself.
2. **First check the data is filled in.** Unticked means nobody updated the row, not that the client never looked. Rows without `Sent` ticked or without a verbatim letter can't be compared; list them and ask him to fill in what he remembers.
3. **Read the funnel before the letters.** Of sent rows, how many were viewed; of viewed, how many replied. Never viewed is job selection, timing and the first 225 characters. Viewed without a reply is the letter, the first number and the profile. Replied without a hire is sequencing (`references/deal-sequencing.md`).
4. **Two groups, sent rows only.** Answered: `Sent` and (`Replied`, Discussing, Won, or Reject after a reply). Silent: `Sent`, no response, logged 14+ days ago. Exclude Spammer and unsent rows. Fewer than 15 answered or 30 silent: say so and stop.
5. Compare on verdict, variant, work category, platform, cold vs warm, opening type, letter length, price shown, attachments, link, client signals, and the letters themselves. Report as "X of Y answered vs X of Y silent"; anything under 5 rows is a hint.
6. Name **one** change, and turn it into a test for the next 10 to 20 proposals: a Proposal Lessons row with `Source = Reply pattern`, the evidence in `What Changed`, `Status = Testing`. At the next review, write `Test Result` and set `Confirmed` or `Dropped`. When the evidence is new, add the snippet to the Winning Proposal Patterns page.

**Current test (started 2026-11-12): Short vs Standard form.** On cold Upwork proposals with verdict APPLY, the date decides the form: an odd day of the month (Istanbul time) is Short, an even day is Standard. APPLY SHORT and SKIP letters are always Short and do not count. After 20 counted proposals, compare viewed and replied by `Variant`, write the result on the lesson row "Test: Short vs Standard form on cold Upwork", and say plainly if 20 was too few to tell.

---

## Working with my-tone

Both skills describe the same voice; my-tone holds the sentence shapes and this skill holds the first-message structure. For a **first message** to a client who has not replied yet, this skill's rules win: a priced first step instead of ranges, one closing question, no bold section labels, sign-off "Mehmet". Once the client has replied, my-tone's offer layouts, ranges and closes apply. Both read the same Claims List.

---

## Fallback Claims List (use only when Notion is unreachable; the Notion page wins)

Confirmed by Mehmet 2026-10-31; brands added 2026-11-09 and 2026-11-10.
- 26 years in commercial post-production, image manipulation and compositing.
- 35milimetre: three people in Istanbul (Mehmet, a graphic designer, a 3D artist), plus trusted specialists.
- Brands that can be named (one or two, matched to the brief; "delivered work for", never "agency of record"): Google, Renault, Peugeot, Diageo (Smirnoff), PepsiCo (Pepsi), Coca-Cola, Unilever (Dove, Degree), Starbucks, Eucerin, Panasonic, Lotus, US Postal Service, Pladis, MAC, ZF, McDonald's, KFC, Dickies, Dewalt, Nixie, Purina, Grayscale (finance and fintech briefs). For matching beauty and personal care work, also: L'Oréal, Maybelline, Barbasol, Element Brooklyn, PoolBar, Juus, Eloquor London, Bioeffect, Hanalys, Adieu, Alabasta Organik.
- Never name: Apple.
- Upwork Expert-Vetted (top 1% of talent), cold Upwork applications only. Creativepool "Top 25 Influential and Inspiring Retouchers & CGI Artists" since 2018.
- Current or recent projects: only when Mehmet states them in this conversation.
- Unproven fit: "I believe I can help based on my experience with [the closest real work, named]."

## Reference files

These add depth. None of them restates a length, a link, a claim or a follow-up rule; if one seems to disagree with this file, this file wins.

- `references/go-no-go-checks.md`: full signal tables for Step 1. Read on a cold application.
- `references/platforms.md`: who the reader is on each platform, and platform mechanics.
- `references/fiverr-qualify-quote.md`: Step 1b in full. Read on every Fiverr job.
- `references/deal-sequencing.md`: why big proposals go quiet, the pilot ladder, objection paths. Read when a brief is big or vague, on a price objection, and on round two.
- `references/pricing.md`: benchmarks by work type, for the PRICING block.
- `references/funnel-diagnosis.md`: reading the funnel, for Step 8.
- `references/video-script.md`: only when Mehmet asks for a video script.
- `references/reference_profile_positioning.md`: what his Upwork profile visibly sells, for the profile check.
- `references/figma-weave.md`: only for AI workflow or pipeline briefs.
