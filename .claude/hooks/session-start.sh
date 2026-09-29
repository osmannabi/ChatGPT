#!/bin/bash
# Prepares HyperFrames rendering in Claude Code on the web sessions:
# FFmpeg, the student kit's pinned npm deps, and a cached latest HyperFrames CLI.
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

if ! command -v ffmpeg >/dev/null 2>&1 || ! command -v ffprobe >/dev/null 2>&1; then
  if ! apt-get install -y ffmpeg >/dev/null 2>&1; then
    apt-get update >/dev/null 2>&1
    apt-get install -y ffmpeg >/dev/null 2>&1
  fi
fi

cd "$CLAUDE_PROJECT_DIR/hyperframes-student-kit"
# npm ci keeps the pinned lockfile untouched; skip when deps are already cached.
[ -d node_modules/hyperframes ] || npm ci --no-audit --no-fund >/dev/null
[ -f .env ] || cp .env.example .env

# Warm the npx cache so `npx hyperframes` for the root-level skills starts instantly.
npx -y hyperframes@latest --version >/dev/null 2>&1 || true
