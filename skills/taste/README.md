# taste skills (vendored)

Copied unchanged from [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill), MIT license (see `LICENSE`).

- Upstream commit: `717446e07a78d4e6d7918b1fde1a263378eebac9` (2026-10-09)
- Copied: the `skills/` folder only. The upstream `assets/`, `examples/` and `research/` folders are left out (about 13 MB of images and notes, not needed by the skills).

## How they load

Each skill folder is linked from `.claude/skills/` under its install name (the `name:` field in its SKILL.md frontmatter), the same way `my-tone` is linked:

| Link in `.claude/skills/` | Folder here | Use for |
| --- | --- | --- |
| `design-taste-frontend` | `taste-skill` | Default: landing pages, portfolios, redesigns (v2) |
| `gpt-taste` | `gpt-tasteskill` | Stricter variant: more layout variance, GSAP motion |
| `image-to-code` | `image-to-code-skill` | Generate reference images first, then build the page to match |
| `redesign-existing-projects` | `redesign-skill` | Audit and upgrade an existing site |
| `high-end-visual-design` | `soft-skill` | Calm, premium look: whitespace, soft depth, spring motion |
| `minimalist-ui` | `minimalist-skill` | Editorial, Notion/Linear style |
| `industrial-brutalist-ui` | `brutalist-skill` | Swiss type, hard contrast, raw layout |
| `stitch-design-taste` | `stitch-skill` | Google Stitch rules and `DESIGN.md` export |
| `full-output-enforcement` | `output-skill` | Stops truncated output and placeholder code |
| `imagegen-frontend-web` | `imagegen-frontend-web` | Website comp images only (no code) |
| `imagegen-frontend-mobile` | `imagegen-frontend-mobile` | Mobile screen images only (no code) |
| `brandkit` | `brandkit` | Brand-kit boards: logo directions, palette, type, mockups |

`taste-skill-v1` is kept here but not linked. Upstream keeps it only for backward compatibility, and linking it would put two near-identical frontend skills in the list. To use it, add a link: `ln -s ../../skills/taste/taste-skill-v1 .claude/skills/design-taste-frontend-v1`.

## Updating

```bash
git clone --depth 1 https://github.com/Leonxlnx/taste-skill.git /tmp/taste-skill
cp -R /tmp/taste-skill/skills/. skills/taste/
cp /tmp/taste-skill/LICENSE skills/taste/LICENSE
```

Then update the commit hash above, check for new or renamed skill folders, and add or fix their links in `.claude/skills/`.
