# 35milimetre site

A single-page studio site where all motion runs on GSAP 3.15 (loaded from jsDelivr):

| Section | GSAP pieces |
| --- | --- |
| Smooth scrolling + `data-speed` parallax | ScrollSmoother |
| Hero: pinned; scrolling builds a composite layer by layer while the layer stack lights up | ScrollTrigger pin + scrubbed timeline, SplitText char intro |
| About: words light up as you read | SplitText words + scrubbed stagger |
| Services: pinned horizontal film strip, parallax and line-draws inside each frame | ScrollTrigger `containerAnimation` |
| Before / after: pinned wipe from raw plate to finished frame, notes appear as the wipe passes | Scrubbed timeline |
| Marquee: loops forever, reverses with scroll direction, skews with scroll velocity | `getVelocity`, `quickTo`, `timeScale` |
| Contact: line reveals, magnetic button | SplitText lines, `quickTo` |
| Nav timecode: scroll position shown as `HH:MM:SS:FF` at 24 fps | ScrollTrigger `onUpdate` |

## Run it

Any static server works, for example:

```sh
cd site && python3 -m http.server 8080
```

## Swapping in real work

The scenes are drawn in CSS so the page has no image dependencies. Each layer is
a `.l-*` div inside `.scene`; give it a real plate and it keeps its animation:

```css
.hero .l-plate { background: url(img/plate.jpg) center / cover; }
```

For the before / after, put the raw frame on `.scene--raw .l-plate` and the
finished frame on `.scene--final .l-plate`, then hide the drawn subject layers.

## Accessibility and fallbacks

The CSS alone renders the finished page. All animations start from that state
(`gsap.from` inside `gsap.matchMedia`), so with `prefers-reduced-motion: reduce`
or if the scripts fail to load, visitors get every section complete and
static, and the service strip becomes a native horizontal scroller.
