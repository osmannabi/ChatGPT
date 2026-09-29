# Repository guide

## Video: HyperFrames (HTML → MP4)

Two skill sets are installed under `.claude/skills/`:

- **Official HyperFrames skills** (from `heygen-com/hyperframes`, commit in
  `.claude/skills/HYPERFRAMES-SOURCE-COMMIT`). Start with `/hyperframes`, the
  router: it picks `/product-launch-video`, `/motion-graphics`, `/general-video`,
  `/faceless-explainer`, `/music-to-video`, `/slideshow`, `/embedded-captions`,
  `/talking-head-recut`, etc. These use the latest CLI via `npx hyperframes`.
- **Student kit skills** (from `nateherkai/hyperframes-student-kit`, vendored in
  `hyperframes-student-kit/`). The root entries are symlinks: `/edit-video`,
  `/cut-silences`, `/cut-mistakes`, `/short-form-edit`, `/motion-showreel`,
  `/video-storytelling`, `/style-library`, `/hyperframes-video-beats`,
  `/make-a-video`, `/website-to-hyperframes`, `/short-form-video`, `/gsap`.
  Their scripts use paths relative to the kit, so run them from
  `hyperframes-student-kit/` and follow `hyperframes-student-kit/CLAUDE.md`.
  The kit pins its own HyperFrames version in its `package.json`.

New video projects go in `hyperframes-student-kit/video-projects/<slug>/`
(`npm run new-video -- <slug>` from the kit folder). That folder, renders,
footage and `.env` are gitignored; never commit client footage or API keys.

The kit's sample videos and 12 teaching projects (~415 MB) were not vendored;
see the upstream repo if they are needed for reference.

`.claude/hooks/session-start.sh` installs FFmpeg and the kit's npm deps in
cloud sessions. Requirements elsewhere: Node 22+, FFmpeg, Chrome/Chromium.
