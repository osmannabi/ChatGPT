<!-- Distilled from Apple Human Interface Guidelines (developer.apple.com/design/human-interface-guidelines), fetched 2026-10-01. Rule headlines plus every numeric spec; read the live page for full rationale. -->

## Buttons
_A button initiates an instantaneous action._
- In general, a button combines three attributes to clearly communicate its function:

### Best practices
- **Make buttons easy for people to use.** As a general rule, a button needs a hit region of at least 44x44 pt — in visionOS, 60x60 pt — to ensure that people can select it easily, whether they use a fingertip, a pointer, their eyes, or a remote.
- **Always include a press state for a custom button.**

### Style
- **In general, use a button that has a prominent visual style for the most likely action in a view.** Keep the number of prominent buttons to one or two per view.
- **Use style — not size — to visually distinguish the preferred choice among multiple options.** When you use buttons of the same size to offer two or more options, you signal that the options form a coherent set of choices. By contrast, placing two buttons of different sizes near each other can make the interface look confusing and inconsistent.
- **Avoid applying a similar color to button labels and content layer backgrounds.**

### Content
- **Ensure that each button clearly communicates its purpose.**
- **Try to associate familiar actions with familiar icons.**
- **Consider using text when a short label communicates more clearly than an icon.**

### Role
- **Assign the primary role to the button people are most likely to choose.**
- **Don’t assign the primary role to a button that performs a destructive action, even if that action is the most likely choice.**

### Platform considerations

#### iOS, iPadOS
- **Configure a button to display an activity indicator when you need to provide feedback about an action that doesn’t instantly complete.**

#### macOS

##### Push buttons
- **Use a flexible-height push button only when you need to display tall or variable height content.** If you need to present a button that contains two lines of text or a tall icon, use a flexible-height button; otherwise, use a standard push button.
- **Append a trailing ellipsis to the title when a push button opens another window, view, or app.**
- **Consider supporting spring loading.**

##### Square buttons
- **Use square buttons in a view, not in the window frame.**
- **Prefer using a symbol in a square button.**
- **Avoid using labels to introduce square buttons.**

##### Help buttons
- **Use the system-provided help button to display your help documentation.**
- **When possible, open the help topic that’s related to the current context.**
- **Include no more than one help button per window.**
- **Position help buttons where people expect to find them.**

| View style | Help button location |
|---|---|
| Dialog with dismissal buttons (like OK and Cancel) | Lower corner, opposite to the dismissal buttons and vertically aligned with them |
| Dialog without dismissal buttons | Lower-left or lower-right corner |
| Settings window or pane | Lower-left or lower-right corner |

- **Use a help button within a view, not in the window frame.**
- **Avoid displaying text that introduces a help button.**

##### Image buttons
- **Use an image button in a view, not in the window frame.**
- **Include about 10 pixels of padding between the edges of the image and the button edges.**
- **If you need to include a label, position it below the image button.**

#### visionOS
- There are three standard button shapes in visionOS.
- visionOS buttons use different visual styles to communicate four different interaction states.
- In addition to the four states shown above, a button can also reveal a tooltip when people look at it for a brief time.

| Shape | Mini (28 pt) | Small (32 pt) | Regular (44 pt) | Large (52 pt) | Extra large (64 pt) |
|---|---|---|---|---|---|
| Circular | ✓ | ✓ | ✓ | ✓ | ✓ |
| Capsule (text only) |  | ✓ | ✓ | ✓ |  |
| Capsule (text and icon) |  |  | ✓ | ✓ |  |
| Rounded rectangle |  | ✓ | ✓ | ✓ |  |

- **Prefer buttons that have a discernible background shape and fill.**
- **Avoid creating a custom button that uses a white background fill and black text or icons.**
- **In general, prefer circular or capsule-shape buttons.**
- **Provide enough space around a button to make it easy for people to look at it.** Aim to place buttons so their centers are always at least 60 pts apart. If your buttons measure 60 pts or larger, add 4 pts of padding around them to keep the hover effect from overlapping.
- **Choose the right shape if you need to display text-labeled buttons in a stack or row.**
- **Use standard controls to take advantage of the audible feedback sounds people already know.**

#### watchOS
- **Use a toolbar to place buttons in the corners.**
- **Prefer buttons that span the width of the screen for primary actions in your app.** If two buttons must share the same horizontal space, use the same height for both, and use images or short text titles for each button’s content.
- **Use toolbar buttons to provide either navigation to related areas or contextual actions for the view’s content.**
- **Use the same height for vertical stacks of one- and two-line text buttons.**


## Toggles
_A toggle lets people choose between a pair of opposing states, like on and off, using a different appearance to indicate each state._

### Best practices
- **Use a toggle to help people choose between two opposing values that affect the state of content or a view.**
- **Clearly identify the setting, view, or content the toggle affects.**
- **Make sure the visual differences in a toggle’s state are obvious.**

### Platform considerations

#### iOS, iPadOS
- **Use the switch toggle style only in a list row.**
- **Change the default color of a switch only if necessary.**
- **Outside of a list, use a button that behaves like a toggle, not a switch.**
- **Avoid supplying a label that explains the button’s purpose.**

#### macOS
- **Use switches, checkboxes, and radio buttons in the window body, not the window frame.**

##### Switches
- **Prefer a switch for settings that you want to emphasize.**
- **Within a grouped form, consider using a mini switch to control the setting in a single row.**
- **In general, don’t replace a checkbox with a switch.**

##### Checkboxes
- **Use a checkbox instead of a switch if you need to present a hierarchy of settings.**
- **Consider using radio buttons if you need to present a set of more than two mutually exclusive options.**
- **Consider using a label to introduce a group of checkboxes if their relationship isn’t clear.**
- **Accurately reflect a checkbox’s state in its appearance.**

##### Radio buttons
- Typically displayed in groups of two to five, radio buttons present a set of mutually exclusive choices.
- **Prefer a set of radio buttons to present mutually exclusive options.**
- **Avoid listing too many radio buttons in a set.** If you need to present more than about five options, consider using a component like a Pop-up buttons instead.
- **To present a single setting that can be on or off, prefer a checkbox.**
- **Use consistent spacing when you display radio buttons horizontally.**


## Segmented controls
_A segmented control is a linear set of two or more segments, each of which functions as a button._
- For example, in macOS Keynote people can select only one segment in the alignment options control to align selected text.

### Best practices
- **Use a segmented control to provide closely related choices that affect an object, state, or view.**
- **Consider a segmented control when it’s important to group functions together, or to clearly show their selection state.**
- **Keep control types consistent within a single segmented control.**
- **Limit the number of segments in a control.** Aim for no more than about five to seven segments in a wide interface and no more than about five segments on iPhone.
- **In general, keep segment size consistent.**

### Content
- **Prefer using either text or images — not a mix of both — in a single segmented control.** Although individual segments can contain text labels or images, mixing the two in a single control can lead to a disconnected and confusing interface.
- **As much as possible, use content with a similar size in each segment.**
- **Use nouns or noun phrases for segment labels.**

### Platform considerations

#### iOS, iPadOS
- **Consider a segmented control to switch between closely related subviews.**

#### macOS
- **Consider using introductory text to clarify the purpose of a segmented control.** If your app includes tooltips, provide one for each segment in a segmented control.
- **Use a tab view in the main window area — instead of a segmented control — for view switching.**
- **Consider supporting spring loading.**

#### tvOS
- **Consider using a split view instead of a segmented control on screens that perform content filtering.**
- **Avoid putting other focusable elements close to segmented controls.**

#### visionOS


## Text fields
_A text field is a rectangular area in which people enter or edit small, specific pieces of text._

### Best practices
- **Use a text field to request a small amount of information, such as a name or an email address.**
- **Show a hint in a text field to help communicate its purpose.**
- **Use secure text fields to hide private data.**
- **To the extent possible, match the size of a text field to the quantity of anticipated text.**
- **Evenly space multiple text fields.**
- **Ensure that tabbing between multiple fields flows as people expect.**
- **Validate fields when it makes sense.**
- **Use a number formatter to help with numeric data.**
- **Adjust line breaks according to the needs of the field.**
- **Consider using an expansion tooltip to show the full version of clipped or truncated text.**
- **In iOS, iPadOS, tvOS, and visionOS apps, show the appropriate keyboard type.**
- **Minimize text entry in your tvOS and watchOS apps.**

### Platform considerations

#### iOS, iPadOS
- **Display a Clear button in the trailing end of a text field to help people erase their input.**
- **Use images and buttons to provide clarity and functionality in text fields.**

#### macOS
- **Consider using a combo box if you need to pair text input with a list of choices.**

#### watchOS
- **Present a text field only when necessary.**


## Search fields
_A search field lets people search a collection of content for specific terms they enter._

### Best practices
- **Use placeholder text to help people know what they can search for.**
- **If possible, start search immediately when a person types.**
- **Consider showing suggested search terms.**
- **Simplify search results.**
- **Consider letting people filter search results.**

### Scope bars and tokens
- **Use a scope bar to filter among clearly defined search categories.**
- **Default to a broader scope and let people refine it as they need.**
- **Use tokens to filter by common search terms or items.**
- **Consider pairing tokens with search suggestions.**

### Platform considerations

#### iOS
- There are three main places you can position the entry point for search:

##### Search as a tab
- There are two styles of search tabs:
- **Choose the standard tab style to provide suggestions, promote discovery, and encourage exploration.**
- **Choose the button appearance to help people quickly find what they need.**

##### Search in a toolbar
- **Place search at the bottom if there’s room.**
- **Place search at the top when itʼs important to defer to content at the bottom of the screen, or thereʼs no bottom toolbar.**

##### Search as an inline field
- **Place search as an inline field when its position alongside the content it searches strengthens that relationship.**
- **When at the top, position an inline search field above the list it searches, and consider pinning it to the top toolbar when scrolling.**

#### iPadOS, macOS
- **Put a search field at the trailing side of the toolbar for many common uses.**
- **Include search at the top of the sidebar when filtering content or navigation there.**
- **Include search as an item in the sidebar or tab bar when you want an area dedicated to discovery.**
- **In a search field in a dedicated area, consider immediately focusing the field when a person navigates to the area to help them search faster and locate the field more easily.**
- **Account for window resizing with the placement of the search field.**

#### tvOS
- **Provide suggestions to make searching easier.**

#### watchOS


## Labels
_A label is a static piece of text that people can read and often copy, but not edit._

### Best practices
- **Use a label to display a small amount of text that people don’t need to edit.**
- **Prefer system fonts.**
- **Use system-provided label colors to communicate relative importance.** The system defines four label colors that vary in appearance to help you give text different levels of visual importance.

| System color | Example usage | iOS, iPadOS, tvOS, visionOS | macOS |
|---|---|---|---|
| Label | Primary information | label | labelColor |
| Secondary label | A subheading or supplemental text | secondaryLabel | secondaryLabelColor |
| Tertiary label | Text that describes an unavailable item or behavior | tertiaryLabel | tertiaryLabelColor |
| Quaternary label | Watermark text | quaternaryLabel | quaternaryLabelColor |

- **Make useful label text selectable.**

### Platform considerations

#### macOS

#### watchOS


## Menus
_A menu reveals its options when people interact with it, making it a space-efficient way to present commands in your app or game._

### Labels
- **For each menu item, write a label that clearly and succinctly describes it.**
- **To be consistent with platform experiences, use title-style capitalization.**
- **Remove articles like _a_, _an_, and _the_ from menu-item labels to save space.**
- **Show people when a menu item is unavailable.**
- **Append an ellipsis to a menu item’s label when the action requires more information before it can complete.**

### Icons
- **Represent common actions consistently.**
- **Use menu item icons sparingly and with purpose.**
- **Apply a uniform visual treatment across menu items in the same group.**

### Organization
- **Prefer listing important or frequently used menu items first.**
- **Consider grouping logically related items.**
- **Prefer keeping all logically related commands in the same group, even if the commands don’t all have the same importance.**
- **Be mindful of menu length.**

### Submenus
- **Use submenus sparingly.** You might consider creating a submenu when a term appears in more than two menu items in the same group.
- **Limit the depth and length of submenus.** Also, if a submenu contains more than about five items, consider creating a new menu.
- **Make sure a submenu remains available even when its nested menu items are unavailable.**
- **Prefer using a submenu to indenting menu items.**

### Toggled items
- **Consider using a changeable label that describes an item’s current state.** For example, instead of listing two menu items like Show Map and Hide Map, you could include one menu item whose label changes from Show Map to Hide Map, depending on whether the map is visible.
- **Include a verb if a changeable label isn’t clear enough.**
- **If necessary, display both menu items instead of one toggled item.**
- **Consider using a checkmark to show that an attribute is currently in effect.**
- **Consider offering a menu item that makes it easy to remove multiple toggled attributes.**

### In-game menus
- **Let players navigate in-game menus using the platform’s default interaction method.**
- **Make sure your menus remain easy to open and read on all platforms you support.**

### Platform considerations

#### iOS, iPadOS
- In iOS and iPadOS, a menu can display items in one of the following three layouts.
  - **Small.** A row of four items appears at the top of the menu, above a list that contains the remaining items. For each item in the top row, the menu displays a symbol or icon, but no label.
  - **Medium.** A row of three items appears at the top of the menu, above a list that contains the remaining items. For each item in the top row, the menu displays a symbol or icon above a short label.
- **Choose a small or medium menu layout when it can help streamline people’s choices.** Consider using the medium layout if your app has three important actions that people often want to perform.

#### visionOS
- **Prefer displaying a menu near the content it controls.**
- **Prefer the subtle breakthrough effect in most cases.**


## Context menus
_A context menu provides access to functionality that’s directly related to an item, without cluttering the interface._

### Best practices
- **Prioritize relevancy when choosing items to include in a context menu.**
- **Aim for a small number of menu items.**
- **Support context menus consistently throughout your app.**
- **Always make context menu items available in the main interface, too.**
- **If you need to use submenus to manage a menu’s complexity, keep them to one level.** Although submenus can shorten a context menu and clarify its commands, more than one level of submenu complicates the experience and can be difficult for people to navigate.
- **Hide unavailable menu items, don’t dim them.**
- **Aim to place the most frequently used menu items where people are likely to encounter them first.**
- **Show keyboard shortcuts in your app’s main menus, not in context menus.**
- **Follow best practices for using separators.** In general, you don’t want more than about three groups in a context menu.
- **In iOS, iPadOS, and visionOS, warn people about context menu items that can destroy data.**

### Content
- **Include a title in a context menu only if doing so clarifies the menu’s effect.**
- **Represent menu item actions with familiar icons.**

### Platform considerations

#### iOS, iPadOS
- **Provide either a context menu or an edit menu for an item, but not both.**
- **In iPadOS, consider using a context menu to let people create a new object in your app.**
- **Prefer a graphical preview that clarifies the target of a context menu’s commands.**
- **Ensure that your preview looks good as it animates.**

#### macOS

#### visionOS
- **Consider using a context menu instead of a panel or inspector window to present frequently used functionality.**
- **In general, avoid letting a context menu’s height exceed the height of the window.**


## Disclosure controls
_Disclosure controls reveal and hide information and functionality related to specific controls or views._

### Best practices
- **Use a disclosure control to hide details until they’re relevant.**

### Disclosure triangles

**Collapsed**

**Expanded**
- Clicking or tapping the disclosure triangle switches between these two states, and the view expands or collapses accordingly to accommodate the content.
- **Provide a descriptive label when using a disclosure triangle.**

### Disclosure buttons
- Clicking or tapping the disclosure button switches between these two states, and the view expands or collapses accordingly to accommodate the content.

**Collapsed**

**Expanded**
- **Place a disclosure button near the content that it shows and hides.**
- **Use no more than one disclosure button in a single view.**

### Platform considerations

#### iOS, iPadOS, visionOS


## Pickers
_A picker displays one or more scrollable lists of distinct values that people can choose from._

### Best practices
- **Consider using a picker to offer medium-to-long lists of items.**
- **Use predictable and logically ordered values.**
- **Avoid switching views to show a picker.**
- **Consider providing less granularity when specifying minutes in a date picker.**

### Platform considerations

#### iOS, iPadOS
- A date picker has four modes, each of which presents a different set of selectable values.
  - Countdown timer — Displays hours and minutes, up to a maximum of 23 hours and 59 minutes. This mode isn’t available in the inline or compact styles.

**Compact**

**Inline**

**Wheels**
- **Use a compact date picker when space is constrained.**

#### macOS
- **Choose a date picker style that suits your app.** There are two styles of date pickers in macOS: textual and graphical.

#### tvOS

#### watchOS


## Sliders
_A slider is a horizontal track with a control, called a thumb, that people can adjust between a minimum and maximum value._
- As a slider’s value changes, the portion of track between the minimum value and the thumb fills with color. A slider can optionally display left and right icons that illustrate the meaning of the minimum and maximum values.

### Best practices
- **Customize a slider’s appearance if it adds value.**
- **Use familiar slider directions.** People expect the minimum and maximum sides of sliders to be consistent in all apps, with minimum values on the leading side and maximum values on the trailing side (for horizontal sliders) and minimum values at the bottom and maximum values at the top (for vertical sliders). For example, people expect to be able to move a horizontal slider that represents a percentage from 0 percent on the leading side to 100 percent on the trailing side.
- **Consider supplementing a slider with a corresponding text field and stepper.**

### Platform considerations

#### iOS, iPadOS
- **Don’t use a slider to adjust audio volume.**

#### macOS
- In a linear slider either with or without tick marks, the thumb is a narrow lozenge shape, and the portion of track between the minimum value and the thumb is filled with color. A linear slider often includes supplementary icons that illustrate the meaning of the minimum and maximum values.
- **Consider giving live feedback as the value of a slider changes.**
- **Choose a slider style that matches peoples’ expectations.** For example, a graphics app might offer a horizontal slider for setting the opacity level of an object between 0 and 100 percent. An animation app might use a circular slider to adjust how many times an object spins when animated — four complete rotations equals four spins, or 1440 degrees of rotation.
- **Consider using a label to introduce a slider.**
- **Use tick marks to increase clarity and accuracy.**
- **Consider adding labels to tick marks for even greater clarity.** In many cases, labeling only the minimum and maximum values is sufficient.

#### visionOS
- **Prefer horizontal sliders.**

#### watchOS
- **If necessary, create custom glyphs to communicate what the slider does.**


## Steppers
_A stepper is a two-segment control that people use to increase or decrease an incremental value._

### Best practices
- **Make the value that a stepper affects obvious.**
- **Consider pairing a stepper with a text field when large value changes are likely.**

### Platform considerations

#### macOS
- **For large value ranges, consider supporting Shift-click to change the value quickly.**


## Progress indicators
_Progress indicators let people know that your app isn’t stalled while it loads content or performs lengthy operations._
- Because the duration of an operation is either known or unknown, there are two types of progress indicators:

### Best practices
- **When possible, use a determinate progress indicator.**
- **Be as accurate as possible when reporting advancement in a determinate progress indicator.** Showing 90 percent completion in five seconds and the last 10 percent in 5 minutes can make people wonder if your app is still working and can even feel deceptive.
- **Keep progress indicators moving so people know something is continuing to happen.**
- **When possible, switch a progress bar from indeterminate to determinate.**
- **Don’t switch from the circular style to the bar style.**
- **If it’s helpful, display a description that provides additional context for the task.**
- **Display a progress indicator in a consistent location.**
- **When it’s feasible, let people halt processing.**
- **Let people know when halting a process has a negative consequence.**

### Platform considerations

#### iOS, iPadOS

##### Refresh content controls
- **Perform automatic content updates.**
- **Supply a short title only if it adds value.**

#### macOS
- **Prefer an activity indicator (spinner) to communicate the status of a background operation or when space is constrained.**
- **Avoid labeling a spinning progress indicator.**

#### watchOS


## Lists and tables
_Lists and tables present data in one or more columns of rows._

### Best practices
- **Prefer displaying text in a list or table.**
- **Let people edit a table when it makes sense.**
- **Provide appropriate feedback when people select a list item.**

### Content
- **Keep item text succinct so row content is comfortable to read.**
- **Consider ways to preserve readability of text that might otherwise get clipped or truncated.**
- **Use descriptive column headings in a multicolumn table.**

### Style
- **Choose a table or list style that coordinates with your data and platform.**
- **Choose a row style that fits the information you need to display.**

### Platform considerations

#### iOS, iPadOS, visionOS
- **Use an info button only to reveal more information about a row’s content.**
- **Avoid adding an index to a table that displays controls — like disclosure indicators — in the trailing ends of its rows.**

#### macOS
- **When it provides value, let people click a column heading to sort a table view based on that column**
- **Let people resize columns.**
- **Consider using alternating row colors in a multicolumn table.**
- **Use an outline view instead of a table view to present hierarchical data.**

#### tvOS
- **Confirm that images near a table still look good as each row highlights and slightly increases in size when it becomes focused.**

#### watchOS
- **When possible, limit the number of rows.**
- **Constrain the length of detail views if you want to support vertical page-based navigation.**


## Collections
_A collection manages an ordered set of content and presents it in a customizable and highly visual layout._

### Best practices
- **Use the standard row or grid layout whenever possible.**
- **Consider using a table instead of a collection for text.**
- **Make it easy to choose an item.**
- **Add custom interactions when necessary.**
- **Consider using animations to provide feedback when people insert, delete, or reorder items.**

### Platform considerations

#### iOS, iPadOS
- **Use caution when making dynamic layout changes.**


## Sheets
_A sheet helps people perform a scoped task that’s closely related to their current context._

### Anatomy

### Best practices
- **For complex or prolonged user flows, consider alternatives to sheets.**
- **Display only one sheet at a time from the main interface.**
- **Use a nonmodal view when you want to present supplementary items that affect the main task in the parent view.**
- **Provide an alternative to the Done button.**
- Avoid showing all three buttons — Cancel, Done, and Back — together.

### Platform considerations

#### iOS, iPadOS

**First step**

**Subsequent step**

**Final step**
- The system defines two detents: _large_ is the height of a fully expanded sheet and _medium_ is about half of the fully expanded height. Sheets can have one or more custom detent values.
- **In an iPhone app, consider supporting the medium detent to allow progressive disclosure of the sheet’s content.**
- **Include a grabber in a resizable sheet.**
- **Support swiping to dismiss a sheet.**
- **Prefer using the page or form sheet presentation styles in an iPadOS app.**

#### macOS
- **Present a sheet in a reasonable default size.**
- **Let people interact with other app windows without first dismissing a sheet.**
- **Use a panel instead of a sheet if people need to repeatedly provide input and observe results.**

#### visionOS
- **Avoid displaying a sheet that emerges from the bottom edge of a window.**
- **Present a sheet in a default size that helps people retain their context.**

#### watchOS
- **Use a sheet only when your modal task requires a custom title or custom content presentation.**
- **Keep sheet interactions brief and occasional.**
- **If you change the default label, prefer using SF Symbols to represent the action.**


## Alerts
_An alert gives people critical information they need right away._

### Best practices
- **Use alerts sparingly.**
- **Avoid using an alert merely to provide information.**
- **Avoid displaying alerts for common, undoable actions, even when they’re destructive.**
- **Avoid showing an alert when your app starts.**

### Anatomy

**iOS**

**macOS**

**tvOS**

**visionOS**

**watchOS**

### Content
- In all platforms, alerts display a title, optional informative text, and up to three buttons.
- **In all alert copy, be direct, and use a neutral, approachable tone.**
- **Write a title that clearly and succinctly describes the situation.** Avoid writing a title that doesn’t convey useful information — like “Error” or “Error 329347 occurred” — but also avoid overly long titles that wrap to more than two lines.
- **Include informative text only if it adds value.**
- **Avoid explaining alert buttons.**
- **If supported, include a text field only if you need people’s input to resolve the situation.**

### Buttons
- **Create succinct, logical button titles.** Aim for a one- or two-word title that describes the result of selecting the button.
- **Avoid using OK as the default button title unless the alert is purely informational.**
- **Place buttons where people expect.**
- **Use the destructive style to identify a button that performs a destructive action people didn’t deliberately choose.**
- **If there’s a destructive action, include a Cancel button to give people a clear, safe way to avoid the action.**
- **Provide alternative ways to cancel an alert when it makes sense.**

| Action | Platform |
|---|---|
| Exit to the Home Screen | iOS, iPadOS |
| Pressing Escape (Esc) or Command-Period (.) on an attached keyboard | iOS, iPadOS, macOS, visionOS |
| Pressing Menu on the remote | tvOS |

### Platform considerations

#### iOS, iPadOS
- **Use an action sheet — not an alert — to offer choices related to an intentional action.** For example, when people cancel the Mail message they’re editing, an action sheet provides three choices: delete the edits (or the entire draft), save the draft, or return to editing.
- **When possible, avoid displaying an alert that scrolls.**

#### macOS
- **Use a caution symbol sparingly.**

#### visionOS
- If you need to display an accessory view in a visionOS alert, create a view that has a maximum height of 154 pt and a 16-pt corner radius.

