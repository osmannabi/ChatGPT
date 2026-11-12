# Test prompts: freelance-proposal

Run each prompt with and without the skill and compare. The with/without-skill baseline run still needs to be done by Mehmet. Replace the bracketed parts with a real brief.

## 1. Cold Upwork application

Prompt: "Write a proposal for this. [Paste an Upwork post asking for six colourway renders of a nicotine pouch tin, posted a few hours ago.]"

A good result has:
- Asks which platform and whether the job is cold or warm (or skips the question because the platform is clear), before writing.
- A short go/no-go read that says which signals are visible and which are missing, and invents no proposal counts or client history. It flags a positioning mismatch if there is one, and still writes the proposal.
- A letter of 180-260 words in the Upwork structure (understanding, problem beyond the brief, solution, optional experience with the Expert-Vetted line, one question), a PREVIEW CHECK quoting the first 225 characters, and the link `mehmet-turan.com` only.
- No em dashes, no "I" as the first word after the greeting, no banned openers or AI tells; ends with one question answerable in ten seconds.
- A row is logged to the Proposal Tracker with `Status = No Reply`, or one line says Notion was unreachable.

## 2. Fiverr brief with nothing confirmed

Prompt: "How should I reply to this Fiverr brief? 'Need product images for my supplement range, some images, soon.'"

A good result has:
- Runs Step 1b: names what is unconfirmed (scope, deadline, budget) and recommends QUALIFY, asking Mehmet to choose.
- In QUALIFY mode, outputs a short letter with one diagnosis, one named first stage with a fixed price and a date, and one question about the missing constraint. No full pricing table, no discovery questionnaire, no HELD BACK or SCOPE STATEMENT blocks.
- Says the video should be attached, not linked, and does not use `35milimetre.com`.
- Drafts a tailored follow-up with a send-by date 4 to 7 days out, with a clean way to say no.
- Logs `Fiverr Mode = Qualify`.

## 3. Why are proposals not landing

Prompt: "Why am I not getting replies on my Upwork proposals? Is this job worth the connects?"

A good result has:
- Reads the Proposal Tracker, notes that unticked boxes mean nobody updated the row, and asks Mehmet to fill in what he remembers before diagnosing anything.
- Splits what it has by `Platform` and `Lead Status`, and reads Behance, LinkedIn and email rows on replies alone.
- Names exactly one thing to change, with the funnel stage as the reason, rather than rewriting profile, headline and letter at once.
- Does not invent numbers it cannot see.
