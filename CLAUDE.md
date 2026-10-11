# Notes for Claude

- Writing in Mehmet's voice: use the `my-tone` skill (`skills/my-tone/SKILL.md`, linked at `.claude/skills/my-tone`).
- Every time Mehmet corrects your wording, add the correction to the Corrections log in `skills/my-tone/SKILL.md`, update the matching rule, rebuild `skills/my-tone.zip`, and commit.
- Use American English in all output.
- Front-end builds, in this order: `awesome-design` to pick a design system, `design-taste-frontend` to build on it, `playwright-cli` to test the result before calling it done. Use `img2threejs` to turn an object photo into a Three.js model. These skills live in `skills/` and are linked from `.claude/skills/`; cloud sessions install the Playwright CLI through `.claude/hooks/session-start.sh`.
