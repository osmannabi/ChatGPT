#!/bin/bash
# Cloud-session setup: tools that would otherwise vanish when the container is reset.
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Playwright CLI (pairs with .claude/skills/playwright-cli). Skip if already installed.
if ! command -v playwright-cli >/dev/null 2>&1; then
  npm install -g @playwright/cli@latest --no-fund --no-audit
fi

# The CLI defaults to the Chrome channel, which the cloud image lacks.
# Point it at the pre-installed Chromium instead of downloading browsers.
if [ -n "${CLAUDE_ENV_FILE:-}" ] && [ -x /opt/pw-browsers/chromium ]; then
  echo 'export PLAYWRIGHT_MCP_BROWSER=chromium' >> "$CLAUDE_ENV_FILE"
  echo 'export PLAYWRIGHT_MCP_EXECUTABLE_PATH=/opt/pw-browsers/chromium' >> "$CLAUDE_ENV_FILE"
fi

# behance-job-feed dependencies, so `npm test` works there.
cd "$CLAUDE_PROJECT_DIR/behance-job-feed"
PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm install --no-fund --no-audit
