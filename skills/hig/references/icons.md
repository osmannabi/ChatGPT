<!-- Distilled from Apple Human Interface Guidelines (developer.apple.com/design/human-interface-guidelines), fetched 2026-10-01. Rule headlines plus every numeric spec; read the live page for full rationale. -->

## Icons
_An effective icon is a graphic asset that expresses a single concept in ways people instantly understand._

### Best practices
- **Create a recognizable, highly simplified design.**
- **Maintain visual consistency across all interface icons in your app.**
- **In general, match the weights of interface icons and adjacent text.**
- **If necessary, add padding to a custom interface icon to achieve optical alignment.**
- **Provide a selected-state version of an interface icon only if necessary.**
- **Use inclusive images.**
- **Include text in your design only when it’s essential for conveying meaning.**
- **If you create a custom interface icon, use a vector format like PDF or SVG.**
- **Provide alternative text labels for custom interface icons.**
- **Avoid using replicas of Apple hardware products.**

### Standard icons

#### Editing

| Action | Icon | Symbol name |
|---|---|---|
| Cut | An icon showing a pair of scissors. | `scissors` |
| Copy |  | `document.on.document` |
| Paste |  | `document.on.clipboard` |
| Done | An icon showing a checkmark. | `checkmark ` |
| Save |  |  |
| Cancel | An icon showing an X. | `xmark` |
| Close |  |  |
| Delete | An icon showing a trash can. | `trash` |
| Undo |  | `arrow.uturn.backward` |
| Redo |  | `arrow.uturn.forward` |
| Compose |  | `square.and.pencil` |
| Duplicate |  | `plus.square.on.square` |
| Rename | An icon showing a pencil. | `pencil` |
| Move to | An icon showing a folder. | `folder` |
| Folder |  |  |
| Attach | An icon showing a paperclip. | `paperclip` |
| Add | An icon showing a plus sign. | `plus` |
| More | An icon showing an ellipsis. | `ellipsis` |

#### Selection

| Action | Icon | Symbol name |
|---|---|---|
| Select |  | `checkmark.circle` |
| Deselect | An icon showing an X. | `xmark` |
| Close |  |  |
| Delete | An icon showing a trash can. | `trash` |

#### Text formatting

| Action | Icon | Symbol name |
|---|---|---|
| Superscript |  | `textformat.superscript` |
| Subscript |  | `textformat.subscript` |
| Bold |  | `bold` |
| Italic |  | `italic` |
| Underline |  | `underline` |
| ​​Align Left |  | `text.alignleft` |
| Center |  | `text.aligncenter` |
| Justified |  | `text.justify` |
| Align Right |  | `text.alignright` |

#### Search

| Action | Icon | Symbol name |
|---|---|---|
| Search | An icon showing a magnifying glass. | `magnifyingglass` |
| Find |  | `text.page.badge.magnifyingglass` |
| Find and Replace |  |  |
| Find Next |  |  |
| Find Previous |  |  |
| Use Selection for Find |  |  |
| Filter |  | `line.3.horizontal.decrease` |

#### Sharing and exporting

| Action | Icon | Symbol name |
|---|---|---|
| Share |  | `square.and.arrow.up` |
| Export |  |  |
| Print | An icon showing a printer. | `printer` |

#### Users and accounts

| Action | Icon | Symbol name |
|---|---|---|
| Account |  | `person.crop.circle` |
| User |  |  |
| Profile |  |  |

#### Ratings

| Action | Icon | Symbol name |
|---|---|---|
| Dislike |  | `hand.thumbsdown` |
| Like |  | `hand.thumbsup` |

#### Layer ordering

| Action | Icon | Symbol name |
|---|---|---|
| Bring to Front |  | `square.3.layers.3d.top.filled` |
| Send to Back |  | `square.3.layers.3d.bottom.filled` |
| Bring Forward |  | `square.2.layers.3d.top.filled` |
| Send Backward |  | `square.2.layers.3d.bottom.filled` |

#### Other

| Action | Icon | Symbol name |
|---|---|---|
| Alarm | An icon showing an alarm clock. | `alarm` |
| Archive | An icon showing a file box. | `archivebox` |
| Calendar | An icon showing a calendar. | `calendar` |

### Platform considerations

#### macOS

##### Document icons
- **Design simple images that clearly communicate the document type.** Your document icon can display as small as 16x16 px, so you want to create designs that remain recognizable at every size.
- **Designing a single, expressive image for the background fill can be a great way to help people understand and recognize a document type.**
- **Consider reducing complexity in the small versions of your document icon.** In the 16x16 px size, you might remove the lines altogether.
- **Avoid placing important content in the top-right corner of your background fill.**
  - 512x512 px @1x, 1024x1024 px @2x
  - 256x256 px @1x, 512x512 px @2x
  - 128x128 px @1x, 256x256 px @2x
  - 32x32 px @1x, 64x64 px @2x
  - 16x16 px @1x, 32x32 px @2x
- **If a familiar object can convey a document’s type or its connection with your app, consider creating a center image that depicts it.** The center image measures half the size of the overall document icon canvas. For example, to create a center image for a 32x32 px document icon, use an image canvas that measures 16x16 px.
  - 256x256 px @1x, 512x512 px @2x
  - 128x128 px @1x, 256x256 px @2x
  - 32x32 px @1x, 64x64 px @2x
  - 16x16 px @1x, 32x32 px @2x
- **Define a margin that measures about 10% of the image canvas and keep most of the image within it.** Although parts of the image can extend into this margin for optical alignment, it’s best when the image occupies about 80% of the image canvas. For example, most of the center image in a 256x256 px canvas would fit in an area that measures 205x205 px.
- **Specify a succinct term if it helps people understand your document type.**


## SF Symbols
_SF Symbols provides thousands of consistent, highly configurable symbols that integrate seamlessly with the San Francisco system font, automatically aligning with text in all weights and sizes._

### Rendering modes
- SF Symbols provides four rendering modes — monochrome, hierarchical, palette, and multicolor — that give you multiple options when applying color to symbols.
- For example, the `cloud.sun.rain.fill` symbol consists of three layers: the primary layer contains the cloud paths, the secondary layer contains the paths that define the sun and its rays, and the tertiary layer contains the raindrop paths.
- **Monochrome**
- **Hierarchical**
- **Palette** — Applies two or more colors to a symbol, using one color per layer. Specifying only two colors for a symbol that defines three levels of hierarchy means the secondary and tertiary layers use the same color.
- **Multicolor**
- **Confirm that a symbol’s rendering mode works well in every context.**

### Gradients

### Variable color
- To visually communicate such a change, variable color applies color to different layers of a symbol as a value reaches different thresholds between zero and 100 percent.
- For example, you could use variable color with the `speaker.wave.3` symbol to communicate three different ranges of sound — plus the state where there’s no sound — by mapping the layers that represent the curved wave paths to different ranges of decibel values.
- **Use variable color to communicate change — don’t use it to communicate depth.**

### Weights and scales
- Each of the nine symbol weights — from ultralight to black — corresponds to a weight of the San Francisco system font, helping you achieve precise weight matching between symbols and adjacent text, while supporting flexibility for different sizes and contexts.
- Each symbol is also available in three scales: small, medium (the default), and large.

### Design variants

### Animations
- **Appear**
- **Disappear**
- **Bounce**
- **Scale**
- **Pulse**
- **Variable color**
- **Replace** This animation features three configurations:
- **Magic Replace** — Performs a smart transition between two symbols with related shapes.
- **Wiggle**
- **Breathe**
- **Rotate**
- **Draw On / Draw Off**
- **Apply symbol animations judiciously.**
- **Make sure that animations serve a clear purpose in communicating a symbol’s intent.**
- **Use symbol animations to communicate information more efficiently.**
- **Consider your app’s tone when adding animations.**

### Custom symbols
- **Use the template as a guide.**
- **Assign negative side margins to your custom symbol if necessary.**
- **Optimize layers to use animations with custom symbols.**
- **Test animations for custom symbols.**
- **Avoid making custom symbols that include common variants, such as enclosures or badges.**
- **Provide alternative text labels for custom symbols.**
- **Don’t design replicas of Apple products.**

### Platform considerations


## App icons
_A unique, memorable icon expresses your app’s or game’s purpose and personality and helps people recognize it at a glance._

### Layer design
- tvOS app icons use between two and five layers to create a sense of dynamism as people bring them into focus.
- A visionOS app icon includes a background layer and one or two layers on top, producing a three-dimensional object that subtly expands when people view it.
- **Prefer clearly defined edges in foreground layers.**
- **Vary opacity in foreground layers to increase the sense of depth and liveliness.**
- **Design a background that both stands out and emphasizes foreground content.**
- **Prefer vector graphics when bringing layers into Icon Composer.**

### Icon shape

**iOS, iPadOS, macOS**

**tvOS**

**visionOS, watchOS**
- **Produce appropriately shaped, unmasked layers.**
- **Keep primary content centered to avoid truncation when the system adjusts corners or applies masking.**

### Design
- **Provide a visually consistent icon design across all the platforms your app supports.**
- **Consider basing your icon design around filled, overlapping shapes.**
- **Include text only when it’s essential to your experience or brand.**
- **Prefer illustrations to photos and avoid replicating UI components.**
- **Don’t use replicas of Apple hardware products.**

### Visual effects
- **Let the system handle blurring and other visual effects.**
- **Create layer groupings to apply effects to multiple layers at once.**

### Appearances
- **Keep your icon’s features consistent across appearances.**
- **Design dark and tinted icons that feel at home beside system app icons and widgets.**
- **Use your light app icon as the basis for your dark icon.**
- **Consider offering alternate app icons.**

### Platform considerations

#### tvOS
- **Include a safe zone to ensure the system doesn’t crop your content.**

#### visionOS
- **Avoid adding a shape that’s intended to look like a hole or concave area to the background layer.**

#### watchOS
- **Avoid using black for your icon’s background.**

### Specifications

| Platform | Layout shape | Icon shape after system masking | Layout size | Style | Appearances |
|---|---|---|---|---|---|
| iOS, iPadOS, macOS | Square | Rounded rectangle (square) | 1024x1024 px | Layered | Default, dark, clear light, clear dark, tinted light, tinted dark |
| tvOS | Rectangle (landscape) | Rounded rectangle (rectangular) | 800x480 px | Layered (Parallax) | N/A |
| visionOS | Square | Circular | 1024x1024 px | Layered (3D) | N/A |
| watchOS | Square | Circular | 1088x1088 px | Layered | N/A |


