# Proposal Tracker logging in Notion (SKILL.md Step 7)

Moved out of SKILL.md. Read this when you reach Step 7. Logging runs every time, automatically, once the output is written.

**Do this every time, automatically, once the output is written. Don't ask first.** Mehmet
wants every invite this skill touches recorded, so the platform and outcome data builds up on its
own instead of depending on him remembering to do it.

The database is **Proposal Tracker**, in the Wiki:
`https://app.notion.com/p/b5e95a8ce7da4eac97989c3c480ff873`
data source `collection://7d95fdcc-4f74-42b6-90eb-58a6a9d63748`

## First contact on a project: create a row

Use `notion-create-pages` with `parent: {"data_source_id": "7d95fdcc-4f74-42b6-90eb-58a6a9d63748"}`.
Map the fields like this:

| Property | Value |
|---|---|
| `Project` (title) | Buyer/client name (or a short handle if none given) plus what the job is, e.g. *"James — craft gin CGI renders"*. This is the only field you have to invent well; make it something Mehmet recognises at a glance later. |
| `Platform` | Whatever was answered in Step 0: Upwork, Fiverr, Behance, or Direct (Web/Email/LinkedIn). |
| `Lead Status` | `Cold` if Mehmet found the job and applied, `Warm` if the client invited him or messaged first. This is Step 0's second question, and it also records whether the Step 1 selection checks applied. |
| `Status` | **Always `No Reply` on creation.** Never set Reject or Won yourself; the skill has no way to know the outcome. Mehmet updates this field by hand (or tells you to) once he hears back. |
| `Fiverr Mode` | `Qualify` or `Quote`, matching Step 1b's MODE line. `N/A` on every non-Fiverr platform. |
| `Proposal Viewed` · `Profile Viewed` · `Replied` | **Leave all three unchecked on creation.** They are the funnel, and unchecked means *not yet*, not *no*. Tick them later when Mehmet reports what happened, or when he asks you to update a row. |
| `Date Logged` | Today. |
| `Follow-up Due` | The send-by date on the FOLLOW-UP block. |
| `Price Quoted` | The pricing line(s) as plain text, e.g. *"$180 first stage / $580 full set"* or *"$1,800-$3,200 milestoned"*. |
| `Source Link` | The job post URL if the brief included one; omit the property otherwise. |
| `Behance Days Left` | **Behance only.** The "days left to close" number shown on the live Behance post at the moment you're logging it. Captured once, here, and never updated again — the countdown only decays, so a stale number would mislead rather than help. Never invent it: if the post doesn't show a countdown, leave the field empty. Omit the property entirely on every non-Behance platform. |
| `Won Value` | Leave unset. Mehmet fills this in only once a job is marked Won. |

Page content, in this order, each under its own `##` header: **Request / Brief** (the brief as given,
pasted in full or lightly trimmed if it was very long), **Cover Letter Sent**, **Video Script**,
**Follow-up Message**. Skip a section only if that output block didn't exist (Fiverr QUALIFY mode has
no scope statement to log, for instance; just log what was actually produced).

## Round two on a Fiverr job: update, don't duplicate

When Mehmet pastes a buyer's reply to a QUALIFY message (Step 1b's round-two case), this is the same
deal continuing, not a new one. Before creating anything, search for the existing row: query the data
source for a `Project` that matches the buyer or project (use `notion-query-data-sources` in SQL mode
against `collection://7d95fdcc-4f74-42b6-90eb-58a6a9d63748`, or `notion-search` scoped to that data
source). If found:

- **Update**, don't recreate: `notion-update-page` with `command: "update_properties"` to set
  `Fiverr Mode` to `Quote`, refresh `Price Quoted` with the new staged figures, and refresh
  `Follow-up Due` with the new date. Leave `Status` alone; it's still Mehmet's call.
- **Append**, don't overwrite, the page body: `notion-update-page` with `command: "insert_content"`
  at the end, adding a `## Round 2 — [today's date]` section with the buyer's reply and the new
  cover letter, video script, and follow-up.

If no matching row exists (round two arrived in a fresh session with no history), create one as
above and note in the GO/NO-GO that this looks like a continuing thread Mehmet may already have
logged elsewhere.

## If Notion isn't reachable

Don't block the proposal on this. Produce the full output regardless, note in one line that the
Notion log couldn't be written, and suggest Mehmet paste it in manually later.

## After logging

Add one line to the end of your reply confirming it: *"Logged to the Proposal Tracker: [row link]"*
