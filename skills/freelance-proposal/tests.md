# Test prompts: freelance-proposal

Run each prompt with and without the skill and compare. Replace the bracketed parts with a real brief.

## 1. Cold Upwork application with something to look at

Prompt: "Write a proposal for this. [Paste an Upwork post for Amazon listing images that names the brand or links the listing, posted a few hours ago.]"

A good result has:
- A go/no-go whose first line is a verdict (APPLY, APPLY SHORT or SKIP) with the one fact behind it, and no invented proposal counts or client history.
- A LOOKED AT line naming what was opened (the listing or site) and what was seen there.
- A letter in the standard form at or under 180 words, or the short form at 70 to 110. The opener is an observation on their material, not a "this is really an X job" reframe.
- One first step priced at $400 or less with a delivery time. No full-set range, rate card or cost caveat in the letter.
- A proof sentence with one comparable piece of work, the Expert-Vetted mention folded into it, and one `mehmet-turan.com` link.
- An ATTACH block with one to three named pieces, or "Mehmet to pick".
- No em dashes, no first sentence about Mehmet, no sentence over 25 words, "not X but Y" at most once; one question.
- A tracker row with `Verdict`, `Variant` and `Attachments` filled, `Status = No Reply`, and the letter pasted word for word.

## 2. Cold Upwork post with nothing to look at

Prompt: "Proposal for this: 'Need 5 product photos retouched, white background. Budget $100.'"

A good result has:
- Verdict APPLY SHORT, LOOKED AT "nothing findable", and the short form (70 to 110 words).
- No diagnosis of the client's business and no reframe. Their deliverable in their words, a first step priced inside the $100 budget, one question.

## 3. Client states a budget below the real cost

Prompt: "[Paste a post with a fixed budget of $500 for work that would normally cost about $650.]"

A good result has:
- No number above $500 in the letter. A first step that fits inside the budget, and what the budget would really cover in HELD BACK.

## 4. Adjacent fit

Prompt: "[Paste a brief for a kind of work that is close to, but not on, Mehmet's portfolio.]"

A good result has:
- The honest-fit sentence naming the real adjacent work ("I believe I can help based on our experience with ..."), next to a link or attachment. Not the bare "experience on the subject" line.

## 5. Fiverr brief with nothing confirmed

Prompt: "How should I reply to this Fiverr brief? 'Need product images for my supplement range, some images, soon.'"

A good result has:
- Step 1b: names what is unconfirmed (scope, deadline, budget) and recommends QUALIFY, asking Mehmet to choose.
- In QUALIFY mode: one observation, one named first step with a fixed price and delivery time, one question about the missing constraint. No held-back list, no scope statement, no follow-up.
- Says a video, if made, is attached and not linked; does not use `35milimetre.com`.
- Logs `Fiverr Mode = Qualify`.

## 6. Behance job-list post

Prompt: "[Paste a post Mehmet found in the Behance job list.]"

A good result has:
- `Lead Status = Cold`. The opening earns the read; no "thanks for reaching out". 35milimetre named in one line, a `35milimetre.com` link from the map, Behance projects named in ATTACH, a priced first step.

## 7. Why are proposals not landing

Prompt: "Why am I not getting replies on my Upwork proposals?"

A good result has:
- Reads the funnel first: of sent rows how many were viewed, of viewed how many replied.
- Notes that unticked boxes mean nobody updated the row, and lists rows that cannot be compared.
- Names exactly one thing to change and turns it into a test. Invents no numbers.
