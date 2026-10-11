# Front-end toolkit: upload and use

15 skills from the "5 Free Tools That Fix Claude's Front-End" wiki page, packed for claude.ai. Each zip is one skill, ready to upload as is.

## What to upload

**Starter set:** upload these first.

| Zip | Use it for |
| --- | --- |
| `awesome-design.zip` | Pick a real design system before building: 74 of them, including Stripe, Linear, Apple, Notion, Tesla, Ferrari and BMW |
| `design-taste-frontend.zip` | The main taste skill: landing pages, portfolios and redesigns that don't look AI-made |
| `redesign-existing-projects.zip` | Audit an existing site and fix its layout, spacing and hierarchy |
| `img2threejs.zip` | Turn a photo of one object into an interactive Three.js model |
| `brandkit.zip` | Brand-kit boards: logo directions, palette, type, mockups |
| `imagegen-frontend-web.zip` | Website design comps, one image per section |

`brandkit` and `imagegen-frontend-web` produce images, so they need an image generator connected (Higgsfield, Fal or Magnific). Without one, they still write the image prompts for you.

**Optional:**

- **Style variants:** pick one at most, because they compete with `design-taste-frontend`. The choices are `high-end-visual-design` (soft, premium), `minimalist-ui` (Notion/Linear look), `industrial-brutalist-ui` (Swiss, raw) and `gpt-taste` (heavy scroll motion).
- **Other skills:** `image-to-code` (comps first, then code), `imagegen-frontend-mobile` (app screens), `stitch-design-taste` (Google Stitch DESIGN.md files) and `full-output-enforcement` (stops cut-off code).
- **`playwright-cli`:** works only where the Playwright CLI is installed, which means Claude Code on your Mac (`npm install -g @playwright/cli`) or cloud sessions on the ChatGPT repo. In claude.ai chat it has no browser to drive.

## Upload (once per zip)

1. In **Settings > Capabilities**, turn on code execution. Skills don't run without it.
2. Go to **Customize > Skills**, click **+**, then **Create skill > Upload a skill**.
3. Choose the zip. Don't unzip it first: the folder inside already has the name claude.ai expects.
4. Toggle the skill on.

Enabled skills also load in Claude Code when you sign in with the same account. Cloud sessions on the ChatGPT repo already have them installed, so you may see each skill listed twice there. That's harmless.

## Use

Claude doesn't reliably pick these skills up on its own. Name the skill at the start of the prompt.

For a front-end build, go in this order: **awesome-design**, then **design-taste-frontend**, then **playwright-cli**.

**1. Pick the system**

```
Use the awesome-design skill. Take the linear.app system. Show me its type
scale, spacing scale and button styles as a list before you build anything.
```

**2. Build on it**

```
Use the design-taste-frontend skill. Build a three-tier pricing page on that
system. Brand colors: [X] and [Y]. Give me three different layouts, not three
variations of one. Before any markup, name three design decisions you're
making and why they avoid the default AI look.
```

**3. Prove it works** (Claude Code only)

```
Use the playwright-cli skill. Test the page you just built: every CTA link,
the monthly/annual toggle, mobile at 375px, and keyboard navigation through
all three cards. Fix what fails. Don't tell me it works until the checks pass.
```

**4. Object to 3D**

```
Use the img2threejs skill. Rebuild the object in the attached photo as an
interactive Three.js model I can rotate in the browser.
```

Use a clean photo of a single object on a plain background.

## If something goes wrong

- **Upload rejected:** upload the zip exactly as it is. Re-zipping the folder under another name breaks the name match.
- **Skill ignored:** name it in the prompt, and check that it's toggled on.
- **Inconsistent output:** two style skills are on at once. Turn one off.
- **The design system fades in a long build:** paste the type and spacing scales again at the start of each new section.
- **3D result is a blob:** the photo is too busy. Use one object on a plain background.

## Rebuilding the zips

After a skill changes in the repo, run `python3 skills/build-zips.py` to rebuild all the zips, or add skill names to rebuild only those.
