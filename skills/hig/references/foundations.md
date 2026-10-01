<!-- Distilled from Apple Human Interface Guidelines (developer.apple.com/design/human-interface-guidelines), fetched 2026-10-01. Rule headlines plus every numeric spec; read the live page for full rationale. -->

## Accessibility
_Accessible user interfaces empower everyone to have a great experience with your app or game._

### Vision
- **Support larger text sizes.** Ideally, give people the option to enlarge text by at least 200 percent (or 140 percent in watchOS apps).
- **Use recommended defaults for custom type sizes.** Each platform has different default and minimum sizes for system-defined type styles to promote readability.

| Platform | Default size | Minimum size |
|---|---|---|
| iOS, iPadOS | 17 pt | 11 pt |
| macOS | 13 pt | 10 pt |
| tvOS | 29 pt | 23 pt |
| visionOS | 17 pt | 12 pt |
| watchOS | 16 pt | 12 pt |

- **Bear in mind that font weight can also impact how easy text is to read.**
- **Strive to meet color contrast minimum standards.** Two popular standards of measure for color contrast are the Web Content Accessibility Guidelines (WCAG) and the Accessible Perceptual Contrast Algorithm (APCA).

| Text size | Text weight | Minimum contrast ratio |
|---|---|---|
| Up to 17 pts | All | 4.5:1 |
| 18 pts | All | 3:1 |
| All | Bold | 3:1 |

- If your app doesn’t provide this minimum contrast by default, ensure it at least provides a higher contrast color scheme when the system setting Increase Contrast is turned on. If your app supports Dark Mode, make sure to check the minimum contrast in both light and dark appearances.
- **Prefer system-defined colors.**
- **Convey information with more than color alone.**
- **Describe your app’s interface and content for VoiceOver.**

### Hearing
- **Support text-based ways to enjoy audio and video.**
- **Use haptics in addition to audio cues.**
- **Augment audio cues with visual cues.**

### Mobility
- **Offer sufficiently sized controls.** Strive to meet the recommended minimum control size for each platform to ensure controls and menus are comfortable for all when tapping and clicking.

| Platform | Default control size | Minimum control size |
|---|---|---|
| iOS, iPadOS | 44x44 pt | 28x28 pt |
| macOS | 28x28 pt | 20x20 pt |
| tvOS | 66x66 pt | 56x56 pt |
| visionOS | 60x60 pt | 28x28 pt |
| watchOS | 44x44 pt | 28x28 pt |

- **Consider spacing between controls as important as size.** In general, it works well to add about 12 points of padding around elements that include a bezel. For elements without a bezel, about 24 points of padding works well around the element’s visible edges.
- **Support simple gestures for common interactions.**
- **Offer alternatives to gestures.**
- **Let people use Voice Control to give guidance and enter information verbally.**
- **Integrate with Siri and Shortcuts to let people perform tasks using voice alone.**
- **Support mobility-related assistive technologies.**

### Speech
- **Let people use the keyboard alone to navigate and interact with your app.**
- **Support Switch Control.**

### Cognitive
- **Keep actions simple and intuitive.**
- **Minimize use of time-boxed interface elements.**
- **Consider offering difficulty accommodations in games.**
- **Let people control audio and video playback.**
- **Allow people to opt out of flashing lights in video playback.**
- **Be cautious with fast-moving and blinking animations.**
- **Optimize your app’s UI for Assistive Access.**

### Platform considerations

#### visionOS

**Pointer Control (hand)**

**Pointer Control (head)**

**Zoom**
- **Prioritize comfort.**


## Layout
_A consistent layout that adapts across display sizes, orientations, and multitasking configurations helps people understand and enjoy your app or game on all their devices._

### Visual hierarchy
- **Order content by relative importance.**
- **Align elements to make them easier to scan, and use indentation to convey hierarchy.**
- **Group related items to clearly express related information or functions.**
- **Use progressive disclosure to make layouts cleaner and easier to interact with.**
- **Differentiate controls from content.**

### Adaptability
- **Design a layout that adapts gracefully and consistently.**
- **Be prepared for text-size changes.**
- **Preview your app on multiple devices, using different size classes, localizations, and text sizes.**
- **When necessary, scale background artwork in response to display changes.**

#### Size classes
- Each dimension — horizontal and vertical — is represented by one of two size classes: _compact_ or _regular_.
- **Determine layout based on size classes, not device type or orientation.**
- **Consider all possible combinations of size classes.**
- **Keep functionality the same as size classes change, and keep layout changes recognizable and familiar to the platform.**

### Guides and safe areas

### Platform considerations

#### macOS
- **Avoid placing controls or critical information at the bottom of a window.**
- **Avoid displaying content behind the camera housing at the top edge of the window.**

#### tvOS
- **Adhere to the screen’s safe area.** Inset primary content 60 points from the top and bottom of the screen, and 80 points from the sides.
- **Include appropriate padding between focusable elements.**

##### Grids

**Two-column**

**Three-column**

**Four-column**

**Five-column**

**Six-column**

**Seven-column**

**Eight-column**

**Nine-column**
- **Include additional vertical spacing for titled rows.**
- **Use consistent spacing.**
- **Make partially hidden content look symmetrical.**

#### visionOS
- **In general, support resizing.**
- You can also choose to set a minimum and maximum size for windows, volumes, and attached UI elements like ornaments. Use these settings to keep elements from overlapping at small sizes, and to keep large layouts from becoming too unwieldy; but don’t use minimum and maximum sizes as a way to prevent resizing. For example, in Safari, people can resize browser windows, but the custom navigation bar ornament has a fixed maximum size so that controls remain easy to access.
- **Use 3D content sparingly in windows.**
- **Display supplemental content in an adjacent window, not in an ornament.**
- **Include enough space around controls for them to be easy to interact with.** For example, place buttons so their centers are at least 60 points apart.

#### watchOS
- **Avoid placing more than two or three controls side by side in your interface.** As a general rule, display no more than three buttons that contain glyphs — or two buttons that contain text — in a row. Although it’s usually better to let text buttons span the full width of the screen, two side-by-side buttons with short text labels can also work well, as long as the screen doesn’t scroll.
- **Support autorotation in views people might want to show others.**


## Color
_Judicious use of color can enhance communication, evoke your brand, provide visual continuity, communicate status and feedback, and help people understand information._

### Best practices
- **Avoid using the same color to mean different things.**
- **Make sure all your app’s colors work well in light, dark, and increased contrast contexts.**
- **Test your app’s color scheme under a variety of lighting conditions.**
- **Test your app on different devices.**
- **Consider how artwork and translucency affect nearby colors.**
- **If your app lets people choose colors, prefer system-provided color controls where available.**

### Inclusive color
- **Avoid relying solely on color to differentiate between objects, indicate interactivity, or communicate essential information.**
- **Avoid using colors that make it hard to perceive content in your app.**
- **Consider how the colors you use might be perceived in other countries and cultures.**

### System colors
- **Avoid hard-coding system color values in your app.**
- **Avoid redefining the semantic meanings of dynamic system colors.**

### Liquid Glass color
- **Apply color sparingly to the Liquid Glass material, and to symbols or text on the material.**
- **Avoid using similar colors in control labels if your app has a colorful background.**
- **Be aware of the placement of color in the content layer.**

### Color management
- **Apply color profiles to your images.**
- **Use wide color to enhance the visual experience on compatible displays.**
- **Provide color space–specific image and color variations if necessary.** Occasionally, it may be hard to distinguish two very similar P3 colors when viewing them on an sRGB display.

### Platform considerations

#### iOS, iPadOS
- iOS defines two sets of dynamic background colors — _system_ and _grouped_ — each of which contains primary, secondary, and tertiary variants that help you convey a hierarchy of information.

| Color | Use for… | UIKit API |
|---|---|---|
| Label | A text label that contains primary content. | label |
| Secondary label | A text label that contains secondary content. | secondaryLabel |
| Tertiary label | A text label that contains tertiary content. | tertiaryLabel |
| Quaternary label | A text label that contains quaternary content. | quaternaryLabel |
| Placeholder text | Placeholder text in controls or text views. | placeholderText |
| Separator | A separator that allows some underlying content to be visible. | separator |
| Opaque separator | A separator that doesn’t allow any underlying content to be visible. | opaqueSeparator |
| Link | Text that functions as a link. | link |

#### macOS

| Color | Use for… | AppKit API |
|---|---|---|
| Alternate selected control text color | The text on a selected surface in a list or table. | alternateSelectedControlTextColor |
| Alternating content background colors | The backgrounds of alternating rows or columns in a list, table, or collection view. | alternatingContentBackgroundColors |
| Control accent | The accent color people select in System Settings. | controlAccentColor |
| Control background color | The background of a large interface element, such as a browser or table. | controlBackgroundColor |
| Control color | The surface of a control. | controlColor |
| Control text color | The text of a control that is available. | controlTextColor |
| Current control tint | The system-defined control tint. | currentControlTint |
| Unavailable control text color | The text of a control that’s unavailable. | disabledControlTextColor |
| Find highlight color | The color of a find indicator. | findHighlightColor |
| Grid color | The gridlines of an interface element, such as a table. | gridColor |
| Header text color | The text of a header cell in a table. | headerTextColor |
| Highlight color | The virtual light source onscreen. | highlightColor |
| Keyboard focus indicator color | The ring that appears around the currently focused control when using the keyboard for interface navigation. | keyboardFocusIndicatorColor |
| Label color | The text of a label containing primary content. | labelColor |
| Link color | A link to other content. | linkColor |
| Placeholder text color | A placeholder string in a control or text view. | placeholderTextColor |
| Quaternary label color | The text of a label of lesser importance than a tertiary label, such as watermark text. | quaternaryLabelColor |
| Secondary label color | The text of a label of lesser importance than a primary label, such as a label used to represent a subheading or additional information. | secondaryLabelColor |
| Selected content background color | The background for selected content in a key window or view. | selectedContentBackgroundColor |
| Selected control color | The surface of a selected control. | selectedControlColor |
| Selected control text color | The text of a selected control. | selectedControlTextColor |
| Selected menu item text color | The text of a selected menu. | selectedMenuItemTextColor |
| Selected text background color | The background of selected text. | selectedTextBackgroundColor |
| Selected text color | The color for selected text. | selectedTextColor |
| Separator color | A separator between different sections of content. | separatorColor |
| Shadow color | The virtual shadow cast by a raised object onscreen. | shadowColor |
| Tertiary label color | The text of a label of lesser importance than a secondary label. | tertiaryLabelColor |
| Text background color | The background color behind text. | textBackgroundColor |
| Text color | The text in a document. | textColor |
| Under page background color | The background behind a document’s content. | underPageBackgroundColor |
| Unemphasized selected content background color | The selected content in a non-key window or view. | unemphasizedSelectedContentBackgroundColor |
| Unemphasized selected text background color | A background for selected text in a non-key window or view. | unemphasizedSelectedTextBackgroundColor |
| Unemphasized selected text color | Selected text in a non-key window or view. | unemphasizedSelectedTextColor |
| Window background color | The background of a window. | windowBackgroundColor |
| Window frame text color | The text in the window’s title bar area. | windowFrameTextColor |

##### App accent colors

#### tvOS
- **Consider choosing a limited color palette that coordinates with your app logo.**
- **Avoid using only color to indicate focus.**

#### visionOS
- **Use color sparingly, especially on glass.**
- **Prefer using color in bold text and large areas.**
- **In a fully immersive experience, help people maintain visual comfort by keeping brightness levels balanced.**

#### watchOS
- **Use background color to support existing content or supply additional information.**
- **Recognize that people might prefer graphic complications to use tinted mode instead of full color.**

### Specifications

#### System colors

| Name | SwiftUI API | Default (light) | Default (dark) | Increased contrast (light) | Increased contrast (dark) |
|---|---|---|---|---|---|
| Red | red | R-255,G-56,B-60 | R-255,G-66,B-69 | R-233,G-21,B-45 | R-255,G-97,B-101 |
| Orange | orange | R-255,G-141,B-40 | R-255,G-146,B-48 | R-197,G-83,B-0 | R-255,G-160,B-86 |
| Yellow | yellow | R-255,G-204,B-0 | R-255,G-214,B-0 | R-161,G-106,B-0 | R-254,G-223,B-67 |
| Green | green | R-52,G-199,B-89 | R-48,G-209,B-88 | R-0,G-137,B-50 | R-74,G-217,B-104 |
| Mint | mint | R-0,G-200,B-179 | R-0,G-218,B-195 | R-0,G-133,B-117 | R-84,G-223,B-203 |
| Teal | teal | R-0,G-195,B-208 | R-0,G-210,B-224 | R-0,G-129,B-152 | R-59,G-221,B-236 |
| Cyan | cyan | R-0,G-192,B-232 | R-60,G-211,B-254 | R-0,G-126,B-174 | R-109,G-217,B-255 |
| Blue | blue | R-0,G-136,B-255 | R-0,G-145,B-255 | R-30,G-110,B-244 | R-92,G-184,B-255 |
| Indigo | indigo | R-97,G-85,B-245 | R-109,G-124,B-255 | R-86,G-74,B-222 | R-167,G-170,B-255 |
| Purple | purple | R-203,G-48,B-224 | R-219,G-52,B-242 | R-176,G-47,B-194 | R-234,G-141,B-255 |
| Pink | pink | R-255,G-45,B-85 | R-255,G-55,B-95 | R-231,G-18,B-77 | R-255,G-138,B-196 |
| Brown | brown | R-172,G-127,B-94 | R-183,G-138,B-102 | R-149,G-109,B-81 | R-219,G-166,B-121 |

#### iOS, iPadOS system gray colors

| Name | UIKit API | Default (light) | Default (dark) | Increased contrast (light) | Increased contrast (dark) |
|---|---|---|---|---|---|
| Gray | systemGray | R-142,G-142,B-147 | R-142,G-142,B-147 | R-108,G-108,B-112 | R-174,G-174,B-178 |
| Gray (2) | systemGray2 | R-174,G-174,B-178 | R-99,G-99,B-102 | R-142,G-142,B-147 | R-124,G-124,B-128 |
| Gray (3) | systemGray3 | R-199,G-199,B-204 | R-72,G-72,B-74 | R-174,G-174,B-178 | R-84,G-84,B-86 |
| Gray (4) | systemGray4 | R-209,G-209,B-214 | R-58,G-58,B-60 | R-188,G-188,B-192 | R-68,G-68,B-70 |
| Gray (5) | systemGray5 | R-229,G-229,B-234 | R-44,G-44,B-46 | R-216,G-216,B-220 | R-54,G-54,B-56 |
| Gray (6) | systemGray6 | R-242,G-242,B-247 | R-28,G-28,B-30 | R-235,G-235,B-240 | R-36,G-36,B-38 |



## Dark Mode
_Dark Mode is a systemwide appearance setting that uses a dark color palette to provide a comfortable viewing experience tailored for low-light environments._

### Best practices
- **Avoid offering an app-specific appearance setting.**
- **Ensure that your app looks good in both appearance modes.**
- **Test your content to make sure that it remains comfortably legible in both appearance modes.**
- **In rare cases, consider using only a dark appearance in the interface.**

### Dark Mode colors
- **Embrace colors that adapt to the current appearance.**
- **Aim for sufficient color contrast in all appearances.** At a minimum, make sure the contrast ratio between colors is no lower than 4.5:1. For custom foreground and background colors, strive for a contrast ratio of 7:1, especially in small text.
- **Soften the color of white backgrounds.**

#### Icons and images
- **Use SF Symbols wherever possible.**
- **Design separate interface icons for the light and dark appearances if necessary.**
- **Make sure full-color images and icons look good in both appearances.**

#### Text
- **Use the system-provided label colors for labels.**
- **Use system views to draw text fields and text views.**

### Platform considerations

#### iOS, iPadOS
- In Dark Mode, the system uses two sets of background colors — called _base_ and _elevated_ — to enhance the perception of depth when one dark interface is layered above another.
- **Prefer the system background colors.**

#### macOS
- **Include some transparency in custom component backgrounds when appropriate.**


## Materials
_A material is a visual effect that creates a sense of depth, layering, and hierarchy between foreground and background elements._
- Apple platforms feature two types of materials: Liquid Glass, and standard materials.

### Liquid Glass
- **Don’t use Liquid Glass in the content layer.**
- **Use Liquid Glass effects sparingly.**
- **Only use clear Liquid Glass for components that appear over visually rich backgrounds.** Liquid Glass provides two variants — regular and clear — that you can choose when building custom components or styling some system components.
  - If the underlying content is bright, consider adding a dark dimming layer of 35% opacity. For developer guidance, see clear.

### Standard materials
- **Choose materials and effects based on semantic meaning and recommended usage.**
- **Help ensure legibility by using vibrant colors on top of materials.**
- **Consider contrast and visual separation when choosing a material to combine with blur and vibrancy effects.**

### Platform considerations

#### iOS, iPadOS
- In addition to Liquid Glass, iOS and iPadOS continue to provide four standard materials — ultra-thin, thin, regular (default), and thick — which you can use in the content layer to help create visual distinction.
- Labels and fills both have several levels of vibrancy; separators have one level.

#### macOS
- **Choose when to allow vibrancy in custom views and controls.**
- **Choose a background blending mode that complements your interface design.** macOS defines two modes that blend background content: behind window and within window.

#### tvOS

| Material | Recommended for |
|---|---|
| ultraThin | Full-screen views that require a light color scheme |
| thin | Overlay views that partially obscure onscreen content and require a light color scheme |
| regular | Overlay views that partially obscure onscreen content |
| thick | Overlay views that partially obscure onscreen content and require a dark color scheme |

#### visionOS
- **Prefer translucency to opaque colors in windows.**
- **If necessary, choose materials that help you create visual separations or indicate interactivity in your app.**
- visionOS defines three vibrancy values that help you communicate a hierarchy of text, symbols, and fills.

#### watchOS
- **Use materials to provide context in a full-screen modal view.**


## Motion
_Beautiful, fluid motions bring the interface to life, conveying status, providing feedback and instruction, and enriching the visual experience of your app or game._

### Best practices
- **Add motion purposefully, supporting the experience without overshadowing it.**
- **Make motion optional.**

### Providing feedback
- **Strive for realistic feedback motion that follows people’s gestures and expectations.**
- **Aim for brevity and precision in feedback animations.**
- **In apps, generally avoid adding motion to UI interactions that occur frequently.**
- **Let people cancel motion.**
- **Consider using animated symbols where it makes sense.**

### Leveraging platform capabilities
- **Make sure your game’s motion looks great by default on each platform you support.**
- **Let people customize the visual experience of your game to optimize performance or battery life.**

### Platform considerations

#### visionOS
- **As much as possible, avoid displaying motion at the edges of a person’s field of view.**
- **Help people remain comfortable when showing the movement of large virtual objects.**
- **Consider using fades when you need to relocate an object.**
- **In general, avoid letting people rotate a virtual world.**
- **Consider giving people a stationary frame of reference.**
- **Avoid showing objects that oscillate in a sustained way.**

#### watchOS


## Playing haptics
_Playing haptics can engage people’s sense of touch and bring their familiarity with the physical world into your app or game._

### Best practices
- **Use system-provided haptic patterns according to their documented meanings.**
- **Use haptics consistently throughout your app or game.**
- **Prefer using haptics to complement other feedback in your app or game.**
- **Avoid overusing haptics.**
- **In most apps, prefer playing short haptics that complement discrete events.**
- **Make haptics optional.**
- **Be aware that playing haptics might impact other user experiences.**

### Custom haptics
- There are two basic building blocks you can use to generate custom haptic patterns.

### Platform considerations

#### iOS

##### Notification

##### Impact
- For example, people might feel a tap when a view snaps into place or a thud when two heavy objects collide.

##### Selection

#### macOS
- When a Magic Trackpad is available, your app can provide one of the three following haptic patterns in response to a drag operation or force click.

| Haptic feedback pattern | Description |
|---|---|
| Alignment | Indicates the alignment of a dragged item. For example, this pattern could be used in a drawing app when the people drag a shape into alignment with another shape. Other scenarios where this type of feedback could be used might include scaling an object to fit within specific dimensions, positioning an object at a preferred location, or reaching the beginning/end or minimum/maximum of something like a scrubber in a video app. |
| Level change | Indicates movement between discrete levels of pressure. For example, as people press a fast-forward button on a video player, playback could increase or decrease and haptic feedback could be provided as different levels of pressure are reached. |
| Generic | Intended for providing general feedback when the other patterns don’t apply. |

#### watchOS

**Notification**
- **Notification.**

**Up**
- **Up.**

**Down**
- **Down.**

**Success**
- **Success.**

**Failure**
- **Failure.**

**Retry**
- **Retry.**

**Start**
- **Start.**

**Stop**
- **Stop.**

**Click**
- **Click.**


## Writing
_The words you choose within your app are an essential part of its user experience._

### Getting started
- **Determine your app’s voice.**
- **Match your tone to the context.**
- Compare the tone of these two examples from Apple Watch.
- **Be clear.**
- **Write for everyone.**

### Best practices
- **Consider each screen’s purpose**
- **Be action oriented.** Active voice and clear labels help people navigate through your app from one step to the next, or from one screen to another.
- **Build language patterns.**
- **Adopt capitalization rules that align with your app’s style, then apply them consistently.**
- **Give clear guidance and use consistent language throughout processes with multiple steps.**
- **Use possessive pronouns sparingly.**
- **Write for how people use each device.**
- **Provide clear next steps on any blank screens.**
- **Write clear error messages.** For example, “That password is too short” isn’t as helpful as “Choose a password with at least 8 characters.” Remember that errors can be frustrating.
- **Choose the right delivery method.**
- **Keep settings labels clear and simple.**
- **Show hints in text fields.**

### Platform considerations


## Inclusion
_Inclusive apps and games put people first by prioritizing respectful communication and presenting content and functionality in ways that everyone can access and understand._

### Inclusive by design

### Welcoming language
- **Consider the tone of your copy from different perspectives.**
- **Pay attention to how you refer to people.**
- **Avoid using specialized or technical terms without defining them.**
- **Replace colloquial expressions with plain language.**
- **Consider carefully before including humor.**

### Being approachable
- Here are two ways to help make an experience approachable.

### Gender identity

### People and settings

### Avoiding stereotypes

### Accessibility
- **Avoid images and language that exclude people with disabilities.**
- **Take a people-first approach when writing about people with disabilities.**
- **Prioritize simplicity and perceivability.**

### Languages

### Platform considerations


## Right to left
_Support right-to-left languages like Arabic and Hebrew by reversing your interface as needed to match the reading direction of the related scripts._

### Text alignment
- **Adjust text alignment to match the interface direction, if the system doesn’t do so automatically.**
- **Align a paragraph based on its language, not on the current context.** When the alignment of a paragraph — defined as three or more lines of text — doesn’t match its language, it can be difficult to read. To improve readability, continue aligning one- and two-line text blocks to match the reading direction of the current context, but align a paragraph to match its language.
- **Use a consistent alignment for all text items in a list.**

### Numbers and characters
- **Don’t reverse the order of numerals in a specific number.**
- **Reverse the order of numerals that show progress or a counting direction; never flip the numerals themselves.**

### Controls
- **Flip controls that show progress from one value to another.**
- **Flip controls that help people navigate or access items in a fixed order.**
- **Preserve the direction of a control that refers to an actual direction or points to an onscreen area.**
- **Visually balance adjacent Latin and RTL scripts when necessary.** To visually balance Arabic or Hebrew text with Latin text that uses all capitals, it often works well to increase the RTL font size by about 2 points.

### Images
- **Avoid flipping images like photographs, illustrations, and general artwork.**
- **Reverse the positions of images when their order is meaningful.**

### Interface icons
- **Flip interface icons that represent text or reading direction.**
- **Consider creating a localized version of an interface icon that displays text.**
- **Flip an interface icon that shows forward or backward motion.**
- **Don’t flip logos or universal signs and marks.**
- **In general, avoid flipping interface icons that depict real-world objects.**
- **Before merely flipping a complex custom interface icon, consider its individual components and the overall visual balance.**

### Platform considerations


## Images
_To make sure your artwork looks great on all devices you support, learn how the system displays content and how to deliver art at the appropriate scale factors._

### Resolution
- For example, a scale factor of 1 (also called @1x) describes a 1:1 pixel density, where one pixel is equal to one point. High-resolution 2D displays have higher pixel densities, such as 2:1 or 3:1. A 2:1 density (called @2x) has a scale factor of 2, and a 3:1 density (called @3x) has a scale factor of 3.
- **Provide high-resolution assets for all bitmap images in your app, for every device you support.**

| Platform | Scale factors |
|---|---|
| iPadOS, watchOS | @2x |
| iOS | @2x and @3x |
| visionOS | @2x or higher (see visionOS) |
| macOS, tvOS | @1x and @2x |

- **In general, design images at the lowest resolution and scale them up to create high-resolution assets.**

### Formats

| Image type | Format |
|---|---|
| Bitmap or raster work | De-interlaced PNG files |
| PNG graphics that don’t require full 24-bit color | An 8-bit color palette |
| Photos | JPEG files, optimized as necessary, or HEIC files |
| Stereo or spatial photos | Stereo HEIC |
| Flat icons, interface icons, and other flat artwork that requires high-resolution scaling | PDF or SVG files |

### Best practices
- **Include a color profile with each image.**
- **Always test images on a range of actual devices.**

### Platform considerations

#### tvOS

##### Parallax effect

##### Layered images
- A _layered image_ consists of two to five distinct layers that come together to form a single image.
- **Use standard interface elements to display layered images.**
- **Identify logical foreground, middle, and background elements.**
- **Generally, keep text in the foreground.**
- **Keep the background layer opaque.**
- **Keep layering simple and subtle.**
- **Leave a safe zone around the foreground layers of your image.**
- **Always preview layered images.**

#### visionOS
- Because you can position images at specific angles within someone’s surroundings, image pixels may not line up 1:1 with screen pixels.
- **Create a layered app icon.** App icons in visionOS are composed of two to three layers that provide the appearance of depth by moving at subtly different rates when the icon is in focus.
- **Prefer vector-based art for 2D images.**
- **If you need to use rasterized images, balance quality with performance as you choose a resolution.**

##### Spatial photos and spatial scenes
- **Make sure spatial photos render correctly in your app.**
- **Prefer the feathered glass background effect to display text over spatial photos.**
- **Take visual comfort into consideration when you make spatial photos from existing 2D content.**
- **Display spatial photos and spatial scenes in standalone views.**
- **Use spatial scenes in your app for specific moments.** Each spatial scene can take up to several seconds to generate from an existing image.
- **When displaying immersively, prefer minimal UI.**
- **Prefer displaying larger spatial scenes that you center in someone’s field of view.**

#### watchOS
- **In general, avoid transparency to keep image files small.**
- **Use autoscaling PDFs to let you provide a single asset for all screen sizes.**

| Screen size | Image scale |
|---|---|
| 38mm | 90% |
| 40mm | 100% |
| 41mm | 106% |
| 42mm | 100% |
| 44mm | 110% |
| 45mm | 119% |
| 49mm | 119% |


