<!-- Distilled from Apple Human Interface Guidelines (developer.apple.com/design/human-interface-guidelines), fetched 2026-10-01. Rule headlines plus every numeric spec; read the live page for full rationale. -->

## Onboarding
_Onboarding can help people get a quick start using your app or game._

### Best practices
- **Teach through interactivity.**
- **Consider providing a collection of context-specific tips instead of a single onboarding flow.**
- **If you need to present a prerequisite onboarding flow, design a brief, enjoyable experience that doesn’t require people to memorize a lot of information.**
- **If it makes sense to offer a separate tutorial, consider making it optional.**
- **Keep onboarding content focused on the experience you provide.**

### Additional content
- **Briefly display a splash screen if necessary.**
- **Don’t let large downloads hinder onboarding.**
- **Avoid displaying licensing details within your onboarding flow.**

### Additional requests
- **Postpone nonessential setup flows or customization steps.**
- **If your app or game needs access to private data or resources before it can function, consider integrating the permission request into your onboarding flow.**
- **Prefer letting people experience your app or game before prompting them for ratings or purchases.**

### Platform considerations


## Loading
_The best content-loading experience finishes before people become aware of it._

### Best practices
- **Show something as soon as possible.**
- **Let people do other things in your app or game while they wait for content to load.**
- **If loading takes an unavoidably long time, give people something interesting to view while they wait.**
- **Improve installation and launch time by downloading large assets in the background.**

### Showing progress
- **Clearly communicate that content is loading and how long it might take to complete.** Ideally, content displays instantly, but for situations where loading takes more than a moment or two, you can use system-provided components — called _progress indicators_ — to show that loading is ongoing.
- **For games, consider creating a custom loading view.**

### Platform considerations

#### watchOS
- **As much as possible, avoid showing a loading indicator in your watchOS experience.** In situations where content needs a second or two to load, it’s better to display a loading indicator than a blank screen.


## Launching
_A streamlined launch experience helps people start using your app or game immediately._

### Best practices
- **Launch instantly.**
- **If the platform requires it, provide a launch screen.**
- **If you need a splash screen, consider displaying it at the beginning of your onboarding flow.**
- **Restore the previous state when your app restarts so people can continue where they left off.**

### Launch screens
- **Downplay the launch experience.**
- **Design a launch screen that’s nearly identical to the first screen of your app or game.**
- **Avoid including text on your launch screen, even if your first screen displays text.**
- **Don’t advertise.**

### Platform considerations

#### iOS, iPadOS
- **Launch in the appropriate orientation.**

#### tvOS
- **In a live-viewing app, consider automatically starting playback soon after people start the app.**

#### visionOS
- **Consider launching in the Shared Space even if your app is fully immersive.**


## Notifications
_A notification gives people timely, high-value information they can understand at a glance._

### Anatomy

### Best practices
- **Provide concise, informative notifications.**
- **Avoid sending multiple notifications for the same thing, even if someone hasn’t responded.**
- **Avoid sending a notification that tells people to perform specific tasks within your app.**
- **Use an alert — not a notification — to display an error message.**
- **Handle notifications gracefully when your app is in the foreground.**
- **Avoid including sensitive, personal, or confidential information in a notification.**

### Content
- **Create a short title if it provides context for the notification content.**
- **Write succinct, easy-to-read notification content.**
- **Provide generically descriptive text to display when notification previews aren’t available.**
- **Avoid including your app name or icon.**
- **Consider providing a sound to supplement your notifications.**

### Notification actions
- A notification can present a customizable detail view that contains up to four buttons people use to perform actions without opening your app.
- **Provide beneficial actions that make sense in the context of your notification.**
- **Avoid providing an action that merely opens your app.**
- **Prefer nondestructive actions.**
- **Provide a simple, recognizable interface icon for each notification action.**

### Badging
- **Use a badge only to show people how many unread notifications they have.**
- **Make sure badging isn’t the only method you use to communicate essential information.**
- **Keep badges up to date.**
- **Avoid creating a custom image or component that mimics the appearance or behavior of a badge.**

### Platform considerations

#### watchOS
- On Apple Watch, notifications occur in two stages: _short look_ and _long look_.

##### Short looks
- **Avoid using a short look as the only way to communicate important information.**
- **Keep privacy in mind.**

##### Long looks
- **Consider using a rich, custom long-look notification to let people get the information they need without launching your app.**
- **At the minimum, provide a static interface; prefer providing a dynamic interface too.**
- **Choose a background appearance for the sash.**
- **Choose a background color for the content area.** If you want to match the background color of other system notifications, use white with 18% opacity; otherwise, you can use a custom color, such as a color within your brand’s palette.
- **Provide up to four custom actions below the content area.**

##### Double tap
- **Keep double tap in mind when choosing the order of custom actions you present as responses to a notification.**


## Widgets
_A widget provides quick access to essential information and focused interactions from your app or game in additional contexts._

### Anatomy

#### System family widgets

**Small**

**Medium**

**Large**

**Extra large**

**Extra large portrait**

| Widget size | iPhone | iPad | Mac | Apple Vision Pro |
|---|---|---|---|---|
| System small | Home Screen, Today View, StandBy, and CarPlay | Home Screen, Today View, and Lock Screen | Desktop and Notification Center | Horizontal and vertical surfaces |
| System medium | Home Screen and Today View | Home Screen and Today View | Desktop and Notification Center | Horizontal and vertical surfaces |
| System large | Home Screen and Today View | Home Screen and Today View | Desktop and Notification Center | Horizontal and vertical surfaces |
| System extra large | Not supported | Home Screen and Today View | Desktop and Notification Center | Horizontal and vertical surfaces |
| System extra large portrait | Not supported | Not supported | Not supported | Horizontal and vertical surfaces |

#### Accessory widgets

**Accessory circular**

**Accessory corner**

**Accessory inline**

**Accessory rectangular**

| Widget size | iPhone | iPad | Apple Watch |
|---|---|---|---|
| Accessory circular | Lock Screen | Lock Screen | Watch complications and in the Smart Stack |
| Accessory corner | Not supported | Not supported | Watch complications |
| Accessory inline | Lock Screen | Lock Screen | Watch complications |
| Accessory rectangular | Lock Screen | Lock Screen | Watch complications and in the Smart Stack |

#### Appearances

**iPhone Lock Screen**

**Watch complication**

**Smart Stack on Apple Watch**

| Platform | Full-color | Accented | Vibrant |
|---|---|---|---|
| iPhone | Home Screen, Today view, StandBy and CarPlay (with the background removed) | Home Screen and Today view | Lock Screen, StandBy in low-light conditions |
| iPad | Home Screen and Today view | Home Screen and Today view | Lock Screen |
| Apple Watch | Smart Stack, complications | Smart Stack, complications | Not supported |
| Mac | Desktop and Notification Center | Not supported | Desktop |
| Apple Vision Pro | Horizontal and vertical surfaces | Horizontal and vertical surfaces | Not supported |

### Best practices
- **Choose simple ideas that relate to your app’s main purpose.**
- **Aim to create a widget that gives people quick access to the content they want.**
- **Prefer dynamic information that changes throughout the day.**
- **Look for opportunities to surprise and delight.**
- **Offer widgets in multiple sizes when doing so adds value.**
- **Balance information density.**
- **Display only the information that’s directly related to the widget’s main purpose.**
- **Use brand elements thoughtfully.**
- **Choose between automatically displaying content and letting people customize displayed information.**
- **Avoid mirroring your widget’s appearance within your app.**
- **Let people know when authentication adds value.**

#### Updating widget content
- **Keep your widget up to date.**
- **Use system functionality to refresh dates and times in your widget.** For developer guidance about widget updates, see Keeping a widget up to date.
- **Use animated transitions to bring attention to data updates.** Additionally, use standard and custom animations with a duration of up to two seconds to let people know when new information is available or when content displays differently.

#### Adding interactivity
- **Offer simple, relevant functionality and reserve complexity for your app.**
- **Ensure that a widget interaction opens your app at the right location.**
- **Offer interactivity while remaining glanceable and uncluttered.**

#### Choosing margins and padding
- **In general, use standard margins to ensure legibility.** Use the standard margin width for widgets — 16 points for most widgets — to avoid crowding their edges and creating a cluttered appearance. If you need to use tighter margins — for example, to create content groupings for graphics, buttons, or background shapes — setting margins of 11 points can work well.
- **Coordinate the corner radius of your content with the corner radius of the widget.**

#### Displaying text in widgets
- **Prefer using the system font, text styles, and SF Symbols.**
- **Avoid very small font sizes.** In general, display text using fonts at 11 points or larger. Text in a font that’s smaller than 11 points can be too hard for many people to read.
- **Avoid rasterizing text.**

#### Using color
- **Use color to enhance a widget’s appearance without competing with its content.**
- **Convey meaning without relying on specific colors to represent information.**
- **Use full-color images judiciously.**

### Rendering modes

#### Full-color
- **Support light and dark appearances.**

#### Accented
- **Group widget components into an accented and a primary group.**

#### Vibrant
- **Offer enough contrast to ensure legibility.**
- **Create optimized assets for the best vibrant effect.**

### Previews and placeholders
- **Design a realistic preview to display in the widget gallery.**
- **Design placeholder content that helps people recognize your widget.**
- **Write a succinct widget description.**
- **Group your widget’s sizes together, and provide a single description.**
- **Consider coloring the Add button.**

### Platform considerations

#### iOS, iPadOS
- Your app can offer widgets on the Lock Screen in three different shapes: as inline text that appears above the clock, and as circular and rectangular shapes that appear below the clock.
- **Support the Always-On display on iPhone.**
- **Offer Live Activities to show real-time updates.**

##### StandBy and CarPlay
- On iPhone in StandBy, the system displays two small system family widgets side-by-side, scaled up so they fill the Lock Screen. CarPlay and StandBy widgets both use the small system family widget with the background removed and scaled up to best fit the grid on the Widgets screen.
- **Limit usage of rich images or color to convey meaning in StandBy.**

**Correct usage**

**Incorrect usage**

#### visionOS
- **Adapt your design and content for the spatial experience Apple Vision Pro provides.**
- **Test your widgets across the full range of system color palettes and in different lighting conditions.**

##### Thresholds and sizes
- Widgets on Apple Vision Pro can adapt based on a person’s proximity, and visionOS provides widgets with two key thresholds to design for: the simplified threshold for when a person views a widget at a distance, and the default threshold when a person views it nearby.
- **Design a responsive layout that shows the right level of detail for each of the two thresholds.**
- **Offer widget family sizes that fit a person’s surroundings well.**
- **Display content in a way that remains legible from a range of distances.** To make a widget feel intentional and proportionate to where they place it, people can scale a widget from 75 to 125 percent in size. Include high-resolution assets that look good scaled up to every size.

##### Mounting styles
- **Choose the mounting style that fits your content and the experience you want to create.**
- **Test your elevated widget designs with each system-provided frame width.**

##### Treatment styles
- In addition to size and mounting style, the system applies one of two treatment styles to visionOS widgets.
- **Choose the paper style for a print-like look that feels more like a real object in the room.**
- **Choose the glass style for information-rich widgets.**

#### watchOS
- **Provide a colorful background that conveys meaning.**
- **Encourage the system to display or elevate the position of your watchOS widget in the Smart Stack.**

### Specifications

#### iOS dimensions

| Screen size (portrait, pt) | Small (pt) | Medium (pt) | Large (pt) | Circular (pt) | Rectangular (pt) | Inline (pt) |
|---|---|---|---|---|---|---|
| 430×932 | 170x170 | 364x170 | 364x382 | 76x76 | 172x76 | 257x26 |
| 428x926 | 170x170 | 364x170 | 364x382 | 76x76 | 172x76 | 257x26 |
| 414x896 | 169x169 | 360x169 | 360x379 | 76x76 | 160x72 | 248x26 |
| 414x736 | 159x159 | 348x157 | 348x357 | 76x76 | 170x76 | 248x26 |
| 393x852 | 158x158 | 338x158 | 338x354 | 72x72 | 160x72 | 234x26 |
| 390x844 | 158x158 | 338x158 | 338x354 | 72x72 | 160x72 | 234x26 |
| 375x812 | 155x155 | 329x155 | 329x345 | 72x72 | 157x72 | 225x26 |
| 375x667 | 148x148 | 321x148 | 321x324 | 68x68 | 153x68 | 225x26 |
| 360x780 | 155x155 | 329x155 | 329x345 | 72x72 | 157x72 | 225x26 |
| 320x568 | 141x141 | 292x141 | 292x311 | N/A | N/A | N/A |

#### iPadOS dimensions

| Screen size (portrait, pt) | Target | Small (pt) | Medium (pt) | Large (pt) | Extra large (pt) |
|---|---|---|---|---|---|
| 768x1024 | Canvas | 141x141 | 305.5x141 | 305.5x305.5 | 634.5x305.5 |
|  | Device | 120x120 | 260x120 | 260x260 | 540x260 |
| 744x1133 | Canvas | 141x141 | 305.5x141 | 305.5x305.5 | 634.5x305.5 |
|  | Device | 120x120 | 260x120 | 260x260 | 540x260 |
| 810x1080 | Canvas | 146x146 | 320.5x146 | 320.5x320.5 | 669x320.5 |
|  | Device | 124x124 | 272x124 | 272x272 | 568x272 |
| 820x1180 | Canvas | 155x155 | 342x155 | 342x342 | 715.5x342 |
|  | Device | 136x136 | 300x136 | 300x300 | 628x300 |
| 834x1112 | Canvas | 150x150 | 327.5x150 | 327.5x327.5 | 682x327.5 |
|  | Device | 132x132 | 288x132 | 288x288 | 600x288 |
| 834x1194 | Canvas | 155x155 | 342x155 | 342x342 | 715.5x342 |
|  | Device | 136x136 | 300x136 | 300x300 | 628x300 |
| 954x1373 * | Canvas | 162x162 | 350x162 | 350x350 | 726x350 |
|  | Device | 162x162 | 350x162 | 350x350 | 726x350 |
| 970x1389 * | Canvas | 162x162 | 350x162 | 350x350 | 726x350 |
|  | Device | 162x162 | 350x162 | 350x350 | 726x350 |
| 1024x1366 | Canvas | 170x170 | 378.5x170 | 378.5x378.5 | 795x378.5 |
|  | Device | 160x160 | 356x160 | 356x356 | 748x356 |
| 1192x1590 * | Canvas | 188x188 | 412x188 | 412x412 | 860x412 |
|  | Device | 188x188 | 412x188 | 412x412 | 860x412 |

#### visionOS dimensions

| Widget | Size in pt | Size in mm (scaled to 100%) |
|---|---|---|
| Small | 158x158 | 268x268 |
| Medium | 338x158 | 574x268 |
| Large | 338x354 | 574x600 |
| Extra large | 450x338 | 763x574 |
| Extra large portrait | 338x450 | 574x763 |

#### watchOS dimensions

| Apple Watch size | Size of a widget in the Smart Stack (pt) |
|---|---|
| 40mm | 152x69.5 |
| 41mm | 165x72.5 |
| 44mm | 173x76.5 |
| 45mm | 184x80.5 |
| 49mm | 191x81.5 |


