---
name: hig
description: "Apple Human Interface Guidelines as a working spec for app and mobile screen design. Apply automatically whenever designing, mocking up, reviewing or generating any app screen, mobile UI, iPhone/iPad/Watch/Mac/visionOS/tvOS interface, onboarding flow, settings page, tab bar, form, widget or app icon, whether in Figma, HTML, SwiftUI, an AI image prompt or a written brief, even when Apple or iOS is not named. Also trigger on /hig, \"is this HIG compliant\", \"check against Apple guidelines\", \"iOS design rules\", \"tap target size\", \"Dynamic Type scale\", \"contrast ratio\", \"safe area\", \"Liquid Glass\" or any question about Apple platform UI specs. Supplies every HIG number (tap targets, Dynamic Type scale with leading, contrast ratios, margins, spacing, system colors in RGB, icon and widget sizes, component limits) plus a pre-delivery compliance checklist."
---

# /hig: Apple Human Interface Guidelines, applied

Source: developer.apple.com/design/human-interface-guidelines, fetched 2026-10-01 (pages carry
Apple's September 2026 updates; Liquid Glass era). Every number on the HIG pages is preserved in
`references/`. The cheat sheet below covers what a normal iPhone/iPad screen needs; open a
reference file only when the job touches it.

## When this runs

Any time an app or mobile screen is being designed, mocked, generated or critiqued. Do not wait
for the user to say "HIG". Mobile web and Android-first screens: still apply the accessibility
numbers (targets, contrast, type minimums), but don't force iOS-only chrome onto them; say so.

## Workflow

1. **Pin the context.** Platform(s), device class (compact vs regular width), light/dark, the
   screen's single job. If unknown and it changes the layout, ask once; otherwise assume iPhone,
   compact width, both appearances, and state the assumption.
2. **Build on system structure first.** Tab bar for top-level sections, navigation stack for
   hierarchy, sheets for focused subtasks, toolbars for actions on the current view. Custom chrome
   only when the system component can't do the job.
3. **Apply the numbers** from the cheat sheet while laying out, not as an afterthought.
4. **Run the checklist** at the end and report it: pass / fail / not-applicable with the
   offending element and the fix. Never claim compliance you didn't check.
5. **Label provenance.** When a number comes from the HIG, it's a spec. When it comes from the
   "Not on the HIG pages" section, call it a platform default or convention.

## Cheat sheet (iOS / iPadOS unless noted)

### Touch targets and spacing
| Platform | Default control size | Minimum control size |
|---|---|---|
| iOS, iPadOS | 44x44 pt | 28x28 pt |
| macOS | 28x28 pt | 20x20 pt |
| tvOS | 66x66 pt | 56x56 pt |
| visionOS | 60x60 pt | 28x28 pt |
| watchOS | 44x44 pt | 28x28 pt |

- Buttons: hit region at least 44x44 pt (visionOS 60x60 pt). The visible glyph can be smaller; the tappable area can't.
- Padding between controls: about **12 pt** around elements with a bezel, about **24 pt** around the visible edges of bezel-less elements.
- visionOS: button centers at least **60 pt** apart; buttons 60 pt or larger get **4 pt** padding so hover effects don't overlap. visionOS button sizes: Mini 28, Small 32, Regular 44, Large 52, Extra large 64 pt.
- watchOS: no more than three glyph buttons or two text buttons in a row.
- macOS image buttons: about 10 px padding between image and button edge.

### Type
Default body 17 pt, minimum 11 pt (macOS 13/10, tvOS 29/23, visionOS 17/12, watchOS 16/12).
Support text enlargement of at least **200%** (watchOS 140%). Avoid light weights; thin custom
fonts need to go larger than these sizes.

iOS/iPadOS Dynamic Type at the default **Large** setting (size / leading, pt):

| Style | Weight | Size | Leading | Emphasized |
|---|---|---|---|---|
| Large Title | Regular | 34 | 41 | Bold |
| Title 1 | Regular | 28 | 34 | Bold |
| Title 2 | Regular | 22 | 28 | Bold |
| Title 3 | Regular | 20 | 25 | Semibold |
| Headline | Semibold | 17 | 22 | Semibold |
| Body | Regular | 17 | 22 | Semibold |
| Callout | Regular | 16 | 21 | Semibold |
| Subhead | Regular | 15 | 20 | Semibold |
| Footnote | Regular | 13 | 18 | Semibold |
| Caption 1 | Regular | 12 | 16 | Semibold |
| Caption 2 | Regular | 11 | 13 | Semibold |

All 12 iOS sizes (xSmall to AX5), the macOS, tvOS and watchOS scales and the tracking tables
(SF Pro, SF Pro Rounded, New York, SF Compact) are in `references/typography.md`. Use those tracking values
when mocking SF in Figma or Photoshop; SF adjusts tracking per point size.

### Contrast
| Text size | Weight | Minimum ratio (WCAG AA, used by Accessibility Inspector) |
|---|---|---|
| Up to 17 pt | All | 4.5:1 |
| 18 pt and up | All | 3:1 |
| Any | Bold | 3:1 |

Dark Mode page: never below 4.5:1; for custom foreground/background pairs aim for **7:1**,
especially small text. Check light and dark separately, and provide a higher-contrast scheme when
Increase Contrast is on. Never convey state with color alone (red/green, blue/orange pairs fail
for many people); pair with a shape, icon or label.

### Color
Prefer semantic system colors (label, secondaryLabel, tertiaryLabel, quaternaryLabel,
placeholderText, separator, opaqueSeparator, link, systemBackground family); they adapt to
appearance and Increase Contrast. The 12 system accent colors and 6 grays with exact RGB for
default light, default dark and both increased-contrast variants are in
`references/foundations.md` > Color > Specifications. Example: Blue is R0 G136 B255 light,
R0 G145 B255 dark. Use one accent color as the tint for interactive elements, don't reuse it for
non-interactive decoration, and soften pure-white backgrounds in dark contexts.

### Layout and safe areas
- Respect safe areas (Dynamic Island, status bar, home indicator, bars). Lay out by **size class**
  (compact/regular), never by device model or orientation; functionality stays the same across
  size classes, only the amount shown changes (e.g. tab bar becomes sidebar on regular width).
- Order content by importance: top and leading side first. Use leading/trailing, not left/right, so RTL works.
- Plan for Dynamic Type: horizontal rows must be able to stack vertically and grow at AX sizes; keep truncation minimal.
- tvOS safe area: **60 pt** top/bottom, **80 pt** sides. tvOS tab bar: **68 pt** tall, top edge **46 pt** from screen top.
- macOS: keep critical controls off the bottom edge of windows and out from behind the camera housing.

### Navigation and components (limits that matter most)
- **Tab bar:** navigation only, never actions. Always visible across sections; never hide or disable tabs; always label them; avoid overflow ("More") tabs. If users customize tabs, default to **five or fewer**. Badges only for critical info.
- **Toolbars:** group items into leading, center, trailing; aim for a **maximum of three** groups. Don't put a Cancel, Done and Back button together.
- **Segmented control:** no more than about **5** segments on iPhone (5 to 7 on wide layouts); don't mix text and images within one control.
- **Alerts:** title, optional message, **up to three** buttons; titles no longer than two lines, no "Error 329347"; button labels one or two words describing the result; destructive action is never the default/primary role.
- **Sheets:** detents are large (full) and medium (about half height); always provide a visible dismiss.
- **Menus:** submenu when a term repeats in more than two items; split a submenu over about five items. iOS menu layouts: small (row of 4), medium (row of 3), large (plain list, the default).
- **Tab views (in-content tabs):** no more than six tabs.
- **Primary action:** one prominent-style button per view for the most likely action; differentiate options by style, not size.
- Custom buttons need a pressed state; slow actions show an activity indicator in the button.
- Offer an on-screen alternative to every gesture (e.g. swipe-to-delete also gets a Delete button).

### Materials and Liquid Glass
Liquid Glass belongs to the controls and navigation layer floating above content, never in the
content layer itself. Use it sparingly; clear glass only over visually rich backgrounds. Apply
color to glass, and to symbols/text on glass, sparingly. Don't color button labels or tab labels
close to the content background beneath them.

### Motion
Respect Reduce Motion: tighten springs, track the gesture directly, avoid z-axis depth animation,
replace x/y/z transitions with fades, don't animate into or out of blur. Avoid auto-dismissing UI on a timer.

### Icons and imagery
- App icon canvas: **1024x1024 px** iOS/iPadOS/macOS (layered; default, dark, clear light/dark,
  tinted light/dark appearances); visionOS 1024x1024 px circular, 3D layered; watchOS
  **1088x1088 px** circular; tvOS **800x480 px** layered parallax. System applies the mask; supply square art.
- Prefer SF Symbols for interface icons; match symbol weight to adjacent text weight; standard
  symbol names for common actions (share = `square.and.arrow.up`, delete = `trash`, more = `ellipsis`,
  add = `plus`, etc.) are in `references/icons.md`.
- Widget pixel/point sizes per device are in `references/patterns.md` > Widgets.

## Not on the HIG pages (platform defaults and conventions)

The current HIG pages no longer publish iPhone screen dimensions or bar heights. Use these as
UIKit/SwiftUI defaults and label them that way; verify in Xcode or Apple's device specs if it matters.

- Layout margins: 16 pt compact width, 20 pt regular width. 8 pt spacing grid (convention, not Apple rule).
- Nav bar 44 pt (large-title nav bar about 96 pt); classic tab bar 49 pt plus home-indicator inset 34 pt; status bar about 54 to 62 pt on Dynamic Island devices. Liquid Glass bars float and can differ: design against the safe area, not hard-coded heights.
- Common iPhone canvases (pt): 375x667 (SE), 393x852 (15, 16), 402x874 (16 Pro, 17, 17 Pro), 420x912 (Air), 430x932 (15 Plus/Pro Max, 16 Plus), 440x956 (16 Pro Max, 17 Pro Max). Design at 402x874 as the default; check 375 wide for the narrowest case.
- Export scale: @2x and @3x for iPhone; mockup tracking tables assume 144 ppi (@2x) and 216 ppi (@3x).

## Compliance checklist (run before delivering any screen)

1. Every tappable element ≥ 44x44 pt hit area (platform equivalents above); ~12 pt / ~24 pt spacing between controls.
2. Text uses Dynamic Type styles or equivalent sizes; nothing below 11 pt; body 17 pt; layout survives AX5 (stacks, no clipping).
3. Contrast ≥ 4.5:1 for text up to 17 pt, ≥ 3:1 for 18 pt+ or bold, checked in light AND dark; custom colors aim for 7:1.
4. No information carried by color alone.
5. Content respects safe areas; leading/trailing alignment; nothing critical under the Dynamic Island or home indicator.
6. Navigation uses the right container (tab bar for sections, stack for depth, sheet for subtasks); tab bar labeled, ≤ 5 default tabs, no actions in it.
7. Component limits respected (alert ≤ 3 buttons, segmented ≤ 5 on iPhone, toolbar ≤ 3 groups, tab view ≤ 6).
8. One primary action per view; destructive actions never primary; confirmation for hard-to-undo actions.
9. Semantic/system colors or a justified custom palette with dark and increased-contrast variants.
10. Liquid Glass only in the floating control layer, used sparingly.
11. Every gesture has a visible alternative; Reduce Motion behavior defined for any animation.
12. Icons: SF Symbols where possible; app icon delivered at the platform canvas size with required appearances.

Report results as a short table: item, pass/fail/N/A, element, fix.

## Reference files

| File | Covers |
|---|---|
| `references/foundations.md` | Accessibility, layout, color (all RGB tables), dark mode, materials/Liquid Glass, motion, haptics, writing, inclusion, right-to-left, images |
| `references/typography.md` | Full Dynamic Type tables for every platform and size, tracking tables for SF Pro, SF Pro Rounded, New York |
| `references/navigation.md` | Tab bars, tab views, toolbars, sidebars, status bars, page controls, gestures |
| `references/components.md` | Buttons, toggles, segmented controls, text/search fields, labels, menus, context menus, disclosure controls, pickers, sliders, steppers, progress, lists, collections, sheets, alerts |
| `references/icons.md` | Icons and standard SF Symbol names, SF Symbols rules, app icon specs |
| `references/patterns.md` | Onboarding, loading, launching, notifications, widgets (all size tables) |

The reference files hold Apple's rule headlines plus every sentence and table containing a number.
For the full reasoning behind a rule, read the live page at
`developer.apple.com/design/human-interface-guidelines/<page-name>`.
