#!/bin/bash
# Installs (or removes, with --remove) a macOS LaunchAgent that runs the scan
# on weekdays at 09:30, 14:00 and 17:00 local time. Output goes to out/scan.log.
set -euo pipefail
LABEL="net.35milimetre.behance-job-feed"
PLIST="$HOME/Library/LaunchAgents/$LABEL.plist"
DIR="$(cd "$(dirname "$0")" && pwd)"
NODE="$(command -v node)"

launchctl bootout "gui/$(id -u)/$LABEL" 2>/dev/null || true
if [ "${1:-}" = "--remove" ]; then
  rm -f "$PLIST"
  echo "Schedule removed."
  exit 0
fi

mkdir -p "$DIR/out" "$HOME/Library/LaunchAgents"
TIMES=""
for day in 1 2 3 4 5; do
  for hm in "9 30" "14 0" "17 0"; do
    set -- $hm
    TIMES+="    <dict><key>Weekday</key><integer>$day</integer><key>Hour</key><integer>$1</integer><key>Minute</key><integer>$2</integer></dict>"$'\n'
  done
done

cat > "$PLIST" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>$LABEL</string>
  <key>ProgramArguments</key>
  <array><string>$NODE</string><string>$DIR/run.mjs</string></array>
  <key>WorkingDirectory</key><string>$DIR</string>
  <key>EnvironmentVariables</key>
  <dict><key>PATH</key><string>$(dirname "$NODE"):/usr/bin:/bin:/usr/sbin:/sbin</string></dict>
  <key>StartCalendarInterval</key>
  <array>
$TIMES  </array>
  <key>StandardOutPath</key><string>$DIR/out/scan.log</string>
  <key>StandardErrorPath</key><string>$DIR/out/scan.log</string>
</dict>
</plist>
PLIST

plutil -lint "$PLIST" >/dev/null
launchctl bootstrap "gui/$(id -u)" "$PLIST"
echo "Scheduled: weekdays 09:30, 14:00, 17:00. Log: $DIR/out/scan.log"
echo "Run now to test:  launchctl kickstart gui/$(id -u)/$LABEL"
