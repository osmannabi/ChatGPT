# Personal Care: Apollo sequence review and rewrite

Sequence: "Personal Care — Freelance Creative Outreach" (Apollo.io, currently inactive)
Reviewed: October 10, 2026. Approved after four review rounds by three reviewers: an outbound and deliverability expert, a personal care brand buyer, and a voice and fact checker.

## 1. What was wrong with the current version

| # | Issue | Why it matters |
|---|---|---|
| 1 | Step 1 prompt says "Unilever Eucerin and Loreal" | Eucerin is Beiersdorf, and the L'Oréal spelling is wrong. A beauty marketer spots both at once. |
| 2 | Opens with a general point about "the visual demands of personal care brands" | It isn't about them. The research signals are attached, but the prompt never tells the AI to use them. |
| 3 | "Surge capacity", "overhead of a full-time hire", "high-end", "confident" | Agency words. A brand team compares you with their photographer or agency, not with a hire. |
| 4 | Two calls to action in Step 1 (a call or a Loom) | One easy ask gets more replies. |
| 5 | Subject line made from the body prompt | No rules for length, style or spam words. |
| 6 | Step 2 repeats Step 1 | No new value and no proof. |
| 7 | LinkedIn step is "view profile" only | A connection request already shows a profile view, so this step costs a task and adds no channel. |
| 8 | 9 days total; breakup email on day 9 | Too short, with no proof or idea step. |
| 9 | No tone sample | Apollo's AI writes in a generic sales voice instead of yours. |
| 10 | Signature says "35mm Post Production Services" | The emails say "35milimetre": two names for one studio. |
| 11 | Older beauty sequence: 3.8% hard bounces, 12% opens, 0 replies | Bounces above 2% and tracking pixels hurt inbox placement. |
| 12 | Older beauty sequence still active for the same audience | The same person could get two different pitches. |

## 2. New flow

| # | Day | Step | Content |
|---|---|---|---|
| 1 | 0 | Manual email, new thread | AI email: a product or category hook, one need, a fixed intro, one easy question. No links. |
| 2 | 2 | LinkedIn connection request | Fixed note (below). |
| 3 | 4 | Manual email, reply in thread | AI follow-up: the personal care page link plus the closest example. |
| 4 | 9 | Manual email, reply in thread | AI follow-up: one idea, a fixed price, and a small first project. |
| 5 | 16 | Automatic email, reply in thread | Fixed breakup template with a referral ask. |

Research signal: company research only on Steps 1, 3 and 4. Executive persona research is removed: it risks personal references and costs credits.

## 3. LinkedIn connection note (Premium; 255 characters, limit 300)

> Hi {{first_name}}, I'm Mehmet. I run 35milimetre, a small post-production studio in Istanbul. We retouch and render personal care products for brands like L'Oréal, Eucerin and Unilever. Always good to know people on the brand side. I'd be glad to connect.

Task note: if their profile or company page shows one real product detail, replace the last two sentences with it. Example: "Saw the new mineral SPF stick. I'd be glad to connect." Use real details only, and never compliment the person.

## 4. Apollo AI settings

**Tone sample (Steps 1, 3 and 4), built only from your real sent mail:**
> I run 35milimetre, a small post-production studio in Istanbul; I've spent 26 years on image manipulation and compositing for advertising. If any of that is on your radar now or down the road, I'd be happy to share relevant samples. And if the timing isn't right, no worries at all.

**Rules block (goes at the top of every AI prompt):**
> Facts first: Do not invent facts about their brand. Mention a launch, retailer, date, news or packaging change only if the company research states it. Never mention mission, values, ingredient philosophy, or anything about the reader personally. Call only L'Oréal, Eucerin and Unilever clients. Never write placeholder brackets. Do not change, shorten or merge the quoted sentences.
> Voice: Use the tone sample for voice only; never reuse its names, offers or questions. Plain American English, like a person, not a marketer. Every sentence under 20 words. Mostly periods; at most one semicolon or colon in the email; no em dashes; no exclamation marks. "We" for studio work, "I" for Mehmet's own view. Never use: elevate, stunning, high-end, leverage, seamless, cutting-edge, game-changer, unlock, world-class, simply, easy, utilize, "creative partner", "surge capacity", "I hope this email finds you well", "quick question", "just following up", "circling back", "touching base".

### Step 1: subject line prompt
> Write a subject line of 2 to 5 words. Format: the brand, product or category named in the company research, then "visuals" or "renders". Sentence case. No question mark, no emoji, no numbers, no exclamation mark. Never use: quick, opportunity, partnership, collab, offer, free, boost. It should read like a note from a colleague.

Fallback, only if Apollo will not take a subject prompt: the fixed subject "{{company_name}} product renders".

### Step 1: email prompt (Day 0)
> Write a cold email from Mehmet Turan, who runs 35milimetre, to a Creative Director, Marketing Director or Brand Manager at a personal care or beauty brand. Use this order:
> 1. "Hi" and the contact's first name, then a comma, on its own line.
> 2. One sentence that starts with "I noticed" or "I saw" and names one product, range or category that appears in the company research. No compliment.
> 3. One sentence that links it to one of these needs: renders before samples or packaging exist; consistent visuals across many SKUs, shades or scents; one master image adapted for each sales channel (only if the research names their channels). In this sentence, do not mention photographers or photography.
> 4. These three sentences word for word: "I run 35milimetre, a small post-production studio in Istanbul. We do retouching, compositing and 3D renders for personal care brands, including L'Oréal, Eucerin and Unilever. We're happy to work alongside your photographer or agency."
> 5. One question as the only call to action: "Would it help if I sent 3 or 4 examples close to" + their category + "?" No call request, no calendar link, no video offer.
> 6. "Best," on its own line and nothing after it. The signature is added automatically.
>
> Length: 60 to 100 words. No links. Do not mention price.

### Step 3: follow-up prompt (Day 4, reply in thread)
> Write a short follow-up from Mehmet Turan at 35milimetre in the same thread. Use this order:
> 1. "Hi" and the contact's first name, then a comma.
> 2. This sentence word for word: "Here is our personal care work: https://www.35milimetre.com/work/personal-care-beauty"
> 3. One sentence that names the one example on that page closest to their category. Choose from this list only:
>    - Color cosmetics or haircare: the L'Oréal texture and swatch shots, and the Maybelline lipstick shot
>    - Suncare: the Eucerin sunscreen campaign and the PoolBar SPF campaign
>    - Deodorant or body care: the Dove and Degree product lineups, and the Juus deodorant launch
>    - Hand soap, home fragrance or refills: the Element Brooklyn pouches and diffusers
>    - Fragrance: the perfume bottle packshots
>    - Skincare: the Bioeffect and Alabasta skincare visuals
>    - Anything else: the L'Oréal texture and swatch shots
> 4. This question word for word: "Does any of this look close to what you'd need?"
> 5. "Best," and nothing after it.
>
> Length: 30 to 60 words. Do not repeat the first email. Do not apologize. Name only examples from this list.

### Step 4: idea prompt (Day 9, reply in thread)
> Write a short email from Mehmet Turan at 35milimetre that offers one concrete idea for their brand. Use this order:
> 1. "Hi" and the contact's first name, then a comma.
> 2. One idea in one or two sentences:
>    - If the company research names an upcoming launch or new packaging: photoreal 3D renders made from the packaging files, ready before the first print run.
>    - Else if the research names their sales channels (Amazon, Sephora, Ulta, Target, their own store): one master image adapted into the image set each channel needs.
>    - Otherwise: one consistent set of visuals across their whole range of products, shades or scents.
> 3. This sentence word for word: "We work at a fixed price per project."
> 4. This question word for word: "Should I send a price for one product as a small first project?"
> 5. "Best," and nothing after it.
>
> Length: 40 to 80 words. Do not repeat earlier emails. No links.

### Step 5: fixed template (Day 16, reply in thread, automatic)
> Hi {{first_name}},
>
> This is my last note about product visuals. Is someone on your ecommerce or content team the right person for this? And if the timing isn't right, no worries at all.
>
> Best,

## 5. Settings outside the copy (you do these in Apollo)

1. Review every AI email by hand for the first 20 to 30 contacts. Move Steps 3 and 4 to automatic only when the output is clean.
2. Clear Apollo tasks every weekday. Each wait starts when the previous step is done, so an open task pushes everything later.
3. Exclude contacts at L'Oréal, Unilever, Beiersdorf and their brands: Maybelline, CeraVe, Kiehl's, NYX, Dove, Degree, Vaseline, Nivea, Aquaphor, Coppertone.
4. Don't enroll anyone already in "Cosmetics, Beauty & Personal Care Outreach". Enroll at most 2 people per company, a week apart.
5. Enroll verified emails only. Add about 30 new contacts a day. Confirm SPF, DKIM and DMARC on the sending domain before you scale.
6. Turn off open and click tracking. Step 3 has a link; tracking pixels and rewritten links hurt inbox placement, and Apple Mail inflates opens anyway.
7. Signature: plain text, company line "35milimetre", and an opt-out line for CAN-SPAM.
