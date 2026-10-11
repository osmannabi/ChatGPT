---
name: awesome-design
description: Library of 74 ready DESIGN.md design systems inspired by real products (Stripe, Linear, Apple, Notion, Vercel, Tesla, Ferrari, Nike, Spotify and more), each with palette, type scale, spacing, components, elevation and do's and don'ts. Use when the user wants a page, site, deck or UI to follow the look of a named product, says "use the X design.md", "Awesome Design", "getdesign", "design system like X", or wants a real design system picked before a front-end build starts.
---

# Awesome Design: borrow a real design system

Each file in `design-md/<site>/DESIGN.md` is a Google Stitch-format design system: YAML tokens at the top (colors, typography, rounded, spacing, components), then prose sections for Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, Do's and Don'ts, Responsive Behavior and an Iteration Guide.

Source: [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md), MIT (see `LICENSE`). These are inspired interpretations of public sites, not official design systems; brand names inside the files are sometimes spelled differently on purpose.

## Available systems

- **AI and developer tools:** claude, cohere, composio, cursor, elevenlabs, expo, hashicorp, lovable, minimax, mintlify, mistral.ai, mongodb, clickhouse, ollama, opencode.ai, posthog, raycast, replicate, resend, runwayml, sanity, sentry, supabase, together.ai, vercel, voltagent, warp, x.ai
- **Productivity and SaaS:** airtable, cal, clay, figma, framer, intercom, linear.app, miro, notion, slack, superhuman, webflow, zapier
- **Finance:** binance, coinbase, kraken, mastercard, revolut, stripe, wise
- **Automotive:** bmw, bmw-m, bugatti, ferrari, lamborghini, renault, tesla
- **Consumer brands:** airbnb, apple, meta, nike, pinterest, shopify, spacex, spotify, starbucks, uber, vodafone
- **Media:** theverge, wired
- **Hardware, gaming and retro:** dell-1996, hp, ibm, nintendo-2001, nvidia, playstation

If the user names a product that is not listed, say so and suggest the two or three closest systems from this list. Do not invent a DESIGN.md for an unlisted product.

## How to use one

1. **Pick before building.** Read the chosen `DESIGN.md` in full. Before writing any markup, show the user a short extract: type scale, spacing scale, radius, primary button and card styles.
2. **Borrow the building blocks, not the brand.** Use the system's spacing, type scale, layout rules and component patterns. Use the user's brand colors, logo and copy, not the source brand's. Never reproduce the source company's logo, name or trademarked assets in the output.
3. **Report overrides.** If the user's design conflicts with the system, follow the system and list what was overridden, unless the user says otherwise.
4. **Long builds:** restate the type scale and spacing scale at the start of each new section instead of relying on memory of the file.
5. **Pairing:** this skill picks the system. A taste skill (`design-taste-frontend`) enforces it while building, and `playwright-cli` proves the result works. Name each skill in the prompt; they do not fire on their own reliably.

## Mixing systems

When the user wants a blend, for example "Linear's spacing with Stripe's type", take each part from its own file and state which file each token came from. Keep one system as the base for anything not specified.

## Updating

```bash
git clone --depth 1 https://github.com/VoltAgent/awesome-design-md.git /tmp/awesome-design-md
for d in /tmp/awesome-design-md/design-md/*/; do s=$(basename "$d"); mkdir -p "skills/awesome-design/design-md/$s"; cp "$d/DESIGN.md" "skills/awesome-design/design-md/$s/"; done
```

Then add any new site names to the list above. Upstream commit at last copy: `13be5c0` (2026-10-05).
