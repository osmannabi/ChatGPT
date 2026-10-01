<!-- Distilled from Apple Human Interface Guidelines (developer.apple.com/design/human-interface-guidelines), fetched 2026-10-01. Rule headlines plus every numeric spec; read the live page for full rationale. -->

## Navigation and search
__

## Tab bars
_A tab bar lets people navigate between top-level sections of your app._

### Best practices
- **Use a tab bar to support navigation, not to provide actions.**
- **Make sure the tab bar is visible when people navigate to different sections of your app.**
- **Use the appropriate number of tabs required to help people navigate your app.**
- **Avoid overflow tabs.**
- **Don’t disable or hide tab bar buttons, even when their content is unavailable.**
- **Include tab labels to help with navigation.**
- **Consider using SF Symbols to provide familiar, scalable tab bar icons.**
- **Use a badge to indicate that critical information is available.**
- **Avoid applying a similar color to tab labels and content layer backgrounds.**

### Platform considerations

#### iOS

#### iPadOS

**Tab bar**

**Sidebar**
- **Prefer a tab bar for navigation.**
- **Let people customize the tab bar.** If you let people select their own tabs, aim for a default list of five or fewer to preserve continuity between compact and regular view sizes.

#### tvOS
- The height of a tab bar is 68 points, and its top edge is 46 points from the top of the screen; you can’t change either of these values.
- **Be aware of tab bar scrolling behaviors.**
- **In a live-viewing app, organize tabs in a consistent way.**

#### visionOS
- **Supply a symbol and a text label for each tab.**
- **If it makes sense in your app, consider using a sidebar within a tab.**


## Tab views
_A tab view presents multiple mutually exclusive panes of content in the same area, which people can switch between using a tabbed control._

### Best practices
- **Use a tab view to present closely related areas of content.**
- **Make sure the controls within a pane affect content only in the same pane.**
- **Provide a label for each tab that describes the contents of its pane.**
- **Avoid using a pop-up button to switch between tabs.** A tabbed control is efficient because it requires a single click or tap to make a selection, whereas a pop-up button requires two.
- **Avoid providing more than six tabs in a tab view.** Having more than six tabs can be overwhelming and create layout issues. If you need to present six or more tabs, consider another way to implement the interface.

### Anatomy
- **In general, inset a tab view by leaving a margin of window-body area on all sides of a tab view.**

### Platform considerations

#### iOS, iPadOS

#### watchOS


## Toolbars
_A toolbar provides convenient access to frequently used commands, controls, navigation, and search._
- They include three types of content:

### Best practices
- **Choose items deliberately to avoid overcrowding.**
- **Add a More menu to contain additional actions.**

**Standard**

**Compact**
- **In iPadOS and macOS apps, consider letting people customize the toolbar to include their most common items.**
- **Reduce the use of toolbar backgrounds and tinted controls.**
- **Avoid applying a similar color to toolbar item labels and content layer backgrounds.**
- **Prefer using standard components in a toolbar.**
- **Consider temporarily hiding toolbars for a distraction-free experience.**

### Titles
- **Provide a useful title for each window.**
- **Don’t title windows with your app name.**
- **Write a concise title.** Aim for a word or short phrase that distills the purpose of the window or view, and keep the title under 15 characters long so you leave enough room for other controls.

### Navigation
- **Use the standard Back and Close buttons.**

### Actions
- **Provide actions that support the main tasks people perform.**
- **Make sure the meaning of each control is clear.**
- **Prefer system-provided symbols without borders.**
- **Use the `.prominent` style for key actions such as Done or Submit.** Only specify one primary action, and put it on the trailing side of the toolbar.

### Item groupings
- You can position toolbar items in three locations: the leading edge, center area, and trailing edge of the toolbar.
- **Group toolbar items logically by function and frequency of use.**
- **Group navigation controls and critical actions like Done, Close, or Save in dedicated, familiar, and visually distinct sections.**
- **Keep consistent groupings and placement across platforms.**
- **Minimize the number of groups.** In general, aim for a maximum of three.
- **Keep actions with text labels separate.**

### Platform considerations

#### iOS
- **Prioritize only the most important items for inclusion in the main toolbar area.**
- **Use a large title to help people stay oriented as they navigate and scroll.**

#### iPadOS
- **Consider combining a toolbar with a tab bar.**

#### macOS
- **Make every toolbar item available as a command in the menu bar.**

#### visionOS
- **Prefer using a system-provided toolbar.**
- **Avoid creating a vertical toolbar.**
- **Try to prevent windows from resizing below the width of the toolbar.**
- **If your app can enter a modal state, consider offering contextually relevant toolbar controls.**
- **Avoid using a pull-down menu in a toolbar.**

#### watchOS
- **Use a scrolling toolbar button for an important action that isn’t a primary app function.**


## Sidebars
_A sidebar appears on the leading side of a view and lets people navigate between areas of your app or top-level collections of content, like folders and playlists._

### Best practices
- **Extend visually rich content beneath the sidebar.**
- **When possible, let people customize the contents of a sidebar.**
- **Group hierarchy with disclosure controls if your app has a lot of content.**
- **Consider using familiar symbols to represent items in the sidebar.**
- **Consider letting people hide the sidebar.**
- **In general, show no more than two levels of hierarchy in a sidebar.** When a data hierarchy is deeper than two levels, consider using a split view interface that includes a content list between the sidebar items and detail view.
- **If you need to include two levels of hierarchy in a sidebar, use succinct, descriptive labels to title each group.**
- **Make sure any sidebar icon colors you choose serve a clear purpose.**

### Platform considerations

#### iOS, iPadOS
- **Consider using a tab bar first.**
- **If necessary, apply the correct appearance to a sidebar.**

#### macOS
- **Consider automatically hiding and revealing a sidebar when its container window resizes.**
- **Avoid putting critical information or actions at the bottom of a sidebar.**

#### visionOS
- **If your app’s hierarchy is deep, consider using a sidebar within a tab in a tab bar.**


## Status bars
_A status bar appears along the upper edge of the screen and displays information about the device’s current state, like the time, cellular carrier, and battery level._

### Best practices
- **Obscure content under the status bar.**
- **Consider temporarily hiding the status bar when displaying full-screen media.**
- **Avoid permanently hiding the status bar.**

### Platform considerations


## Page controls
_A page control displays a row of indicator images, each of which represents a page in a flat list._

### Best practices
- **Use page controls to represent movement between an ordered list of pages.**
- **Center a page control at the bottom of the view or window.**
- **Although page controls can handle any number of pages, don’t display too many**

### Customizing indicators
- **Make sure custom indicator images are simple and clear.**
- **Customize the default indicator image only when it enhances the page control’s overall meaning.**
- **Avoid using more than two different indicator images in a page control.** A page control that displays more than two types of indicator images tends to look messy and haphazard, even when each image is clear.
- **Avoid coloring indicator images.**

### Platform considerations

#### iOS, iPadOS
- **Avoid animating page transitions during scrubbing.**
- **Avoid supporting the scrubber when you use the minimal background style.**

#### tvOS
- **Use page controls on collections of full-screen pages.**

#### visionOS

#### watchOS
- **Use vertical pagination to separate multiple views into distinct, purposeful pages.**
- **Consider limiting the content of an individual page to a single screen height.**


## Gestures
_A gesture is a physical motion that a person uses to directly affect an object in an app or game on their device._

### Best practices
- **Give people more than one way to interact with your app.**
- **In general, respond to gestures in ways that are consistent with people’s expectations.**
- **Handle gestures as responsively as possible.**
- **Indicate when a gesture isn’t available.**

### Custom gestures
- **Add custom gestures only when necessary.**
- **Make custom gestures easy to learn.**
- **Use shortcut gestures to supplement standard gestures, not replace them.** While you may supply a custom gesture to quickly access parts of your app, people also need simple, familiar ways to navigate and perform actions, even if it means an extra tap or two.
- **Avoid conflicting with gestures that access system UI.**

### Platform considerations

#### iOS, iPadOS

| Gesture | Common action |
|---|---|
| Three-finger swipe | Initiate undo (left swipe); initiate redo (right swipe). |
| Three-finger pinch | Copy selected text (pinch in); paste copied text (pinch out). |
| Four-finger swipe (iPadOS only) | Switch between apps. |
| Shake | Initiate undo; initiate redo. |

- **Consider allowing simultaneous recognition of multiple gestures if it enhances the experience.**

#### macOS

#### tvOS

#### visionOS
- visionOS supports two categories of gestures: indirect and direct.

| Direct gesture | Common use |
|---|---|
| Touch | Directly select or activate an object. |
| Touch and hold | Open a contextual menu. |
| Touch and drag | Move an object to a new location. |
| Double touch | Preview an object or file; select a word in an editing context. |
| Swipe | Reveal actions and controls; dismiss views; scroll. |
| With two hands, pinch and drag together or apart | Zoom in or out. |
| With two hands, pinch and drag in a circular motion | Rotate an object. |

- **Support standard gestures everywhere you can.**
- **Offer both indirect and direct interactions when possible.**
- **Avoid requiring specific body movements or positions for input.**

##### Designing custom gestures in visionOS
- **Prioritize comfort.**
- **Carefully consider complex custom gestures that involve multiple fingers or both hands.**
- **Avoid custom gestures that require using a specific hand.**

##### Working with system overlays in visionOS
- **Reserve the area around a person’s hand for system overlays and their related gestures.**
- **Consider deferring the system overlay behavior when designing an immersive app or game.**
- **Use caution when designing custom gestures that involve a rolling motion of the hand, wrist, and forearm.**

#### watchOS

##### Double tap
- **Avoid setting a primary action in views with lists, scroll views, or vertical tabs.**
- **Choose the button that people use most commonly as the primary action in a view.**

### Specifications

#### Standard gestures

| Gesture | Supported in | Common action |
|---|---|---|
| Tap | iOS, iPadOS, macOS, tvOS, visionOS, watchOS | Activate a control; select an item. |
| Swipe | iOS, iPadOS, macOS, tvOS, visionOS, watchOS | Reveal actions and controls; dismiss views; scroll. |
| Drag | iOS, iPadOS, macOS, tvOS, visionOS, watchOS | Move a UI element. |
| Touch (or pinch) and hold | iOS, iPadOS, tvOS, visionOS, watchOS | Reveal additional controls or functionality. |
| Double tap | iOS, iPadOS, macOS, tvOS, visionOS, watchOS | Zoom in; zoom out if already zoomed in; perform a primary action on Apple Watch Series 9 and Apple Watch Ultra 2. |
| Zoom | iOS, iPadOS, macOS, tvOS, visionOS | Zoom a view; magnify content. |
| Rotate | iOS, iPadOS, macOS, tvOS, visionOS | Rotate a selected item. |


