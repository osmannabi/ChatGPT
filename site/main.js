/* 35milimetre: all motion is GSAP (ScrollTrigger, ScrollSmoother, SplitText).
   The CSS alone renders a complete, finished page. Every animation here starts
   from that finished state via gsap.from / fromTo inside gsap.matchMedia, so
   reduced-motion users (and a failed script load) still get the whole site. */

(() => {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  // Timecode in the nav: the whole page is a two-minute reel at 24 fps.
  const tcEl = $("#timecode");
  const FPS = 24;
  const REEL_FRAMES = FPS * 120;
  const pad = (n) => String(n).padStart(2, "0");
  const toTimecode = (f) => {
    const s = Math.floor(f / FPS);
    return `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(f % FPS)}`;
  };
  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => { tcEl.textContent = toTimecode(Math.round(self.progress * REEL_FRAMES)); },
  });

  const mm = gsap.matchMedia();

  mm.add(
    {
      motion: "(prefers-reduced-motion: no-preference)",
      desktop: "(min-width: 768px)",
    },
    (ctx) => {
      const { motion, desktop } = ctx.conditions;
      if (!motion) return;

      document.documentElement.classList.add("is-motion");

      // ---------- Smooth scrolling ----------
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.1,
        effects: true,          // enables data-speed / data-lag parallax
        normalizeScroll: false,
        smoothTouch: 0.1,
      });

      // In-page links scroll through the smoother instead of jumping.
      $$('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", (e) => {
          const target = $(a.getAttribute("href"));
          if (!target) return;
          e.preventDefault();
          smoother.scrollTo(target, true, "top top");
        });
      });

      // Film grain: stepped jitter, like a projector gate.
      gsap.to(".grain", {
        x: () => gsap.utils.random(-60, 60),
        y: () => gsap.utils.random(-60, 60),
        duration: 0.08,
        ease: "steps(1)",
        repeat: -1,
        repeatRefresh: true,
      });

      // ---------- Hero: intro on load ----------
      SplitText.create(".hero__title", {
        type: "lines,chars",
        mask: "lines",
        autoSplit: true,
        onSplit: (self) =>
          gsap.from(self.chars, {
            yPercent: 110,
            duration: 1.1,
            ease: "expo.out",
            stagger: 0.018,
            delay: 0.15,
          }),
      });
      gsap.from([".hero__sub", ".hero__cue", ".nav"], {
        autoAlpha: 0,
        y: 16,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.6,
      });
      gsap.fromTo(".hero__cue span", { scaleX: 0.15 }, { scaleX: 1, duration: 1.4, ease: "power2.inOut", repeat: -1, yoyo: true });

      // ---------- Hero: pinned build of the composite ----------
      const hero = $("#hero");
      const items = (n) => $(`.stack__item[data-layer="${n}"]`, hero);
      const on = (n) => [
        gsap.from(items(n), { opacity: 0.28, duration: 0.3 }),
        gsap.from($("i", items(n)), { scale: 0, duration: 0.3 }),
      ];

      const build = gsap.timeline({
        defaults: { ease: "power2.out", duration: 1 },
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: desktop ? "+=280%" : "+=200%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Everything dims to "pending" first; each layer switches on as it lands.
      build
        .from(".hero .frame", { scale: 0.9, duration: 5.4, ease: "none" }, 0)
        .from(".hero .l-plate", { clipPath: "inset(50% 50% 50% 50%)", duration: 1 }, 0)
        .add(on(1), 0)
        .from(".hero .l-subject .plinth", { yPercent: 120, autoAlpha: 0 }, 0.9)
        .from(".hero .l-subject .bottle", { yPercent: -80, autoAlpha: 0, ease: "back.out(1.4)" }, 1.1)
        .add(on(2), 1.1)
        .from(".hero .l-shadow", { scaleX: 0, autoAlpha: 0, transformOrigin: "46% 90%" }, 2.1)
        .add(on(3), 2.1)
        .from(".hero .l-light", { autoAlpha: 0 }, 3.0)
        .from(".hero .l-light .streak", { xPercent: -100, scaleX: 0.2, transformOrigin: "left center" }, 3.0)
        .add(on(4), 3.0)
        .from(".hero .l-grade", { autoAlpha: 0 }, 4.0)
        .add(on(5), 4.0)
        .from(".hero .crop", { scale: 2.2, autoAlpha: 0, stagger: 0.06, duration: 0.5, ease: "power3.out" }, 4.6)
        .to(".hero__title", { yPercent: -18, autoAlpha: 0.15, duration: 1.2, ease: "none" }, 4.4);

      // ---------- Manifesto: words light up as you read ----------
      SplitText.create("#manifesto", {
        type: "words",
        autoSplit: true,
        onSplit: (self) =>
          gsap.fromTo(
            self.words,
            { opacity: 0.16 },
            {
              opacity: 1,
              ease: "none",
              stagger: 0.1,
              scrollTrigger: {
                trigger: "#manifesto",
                start: "top 78%",
                end: "bottom 42%",
                scrub: true,
              },
            }
          ),
      });

      // ---------- Section headings: line reveals ----------
      $$(".h2, .contact__title").forEach((el) => {
        SplitText.create(el, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 105,
              duration: 1,
              ease: "expo.out",
              stagger: 0.09,
              scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
            }),
        });
      });
      gsap.utils.toArray(".eyebrow").forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          x: -12,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" },
        });
      });

      // ---------- Services: pinned horizontal film strip ----------
      const strip = $(".strip");
      const track = $(".strip__track");
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);

      const scrollStrip = gsap.to(track, {
        x: () => -distance(),
        ease: "none", // required for containerAnimation
        scrollTrigger: {
          trigger: strip,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      $$(".card:not(.card--title)", track).forEach((card) => {
        const vis = $(".vis-in", card);
        // parallax inside each frame while the strip travels
        gsap.fromTo(vis, { xPercent: -8 }, {
          xPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: card, containerAnimation: scrollStrip, start: "left right", end: "right left", scrub: true },
        });
        gsap.from([$("h3", card), $("p:last-child", card)], {
          y: 24,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: card, containerAnimation: scrollStrip, start: "left 85%", toggleActions: "play none none reverse" },
        });
      });

      // the illustration stroke draws itself as it crosses the screen
      $$(".vis-illus path, .vis-pack path").forEach((p) => {
        const len = p.getTotalLength();
        gsap.fromTo(p, { strokeDasharray: len, strokeDashoffset: len }, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: { trigger: p.closest(".card"), containerAnimation: scrollStrip, start: "left 90%", end: "center 45%", scrub: true },
        });
      });

      // ---------- Before / after wipe ----------
      const wipe = $("#wipe");
      const notes = $$(".notes li", wipe);
      const wipeTl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: wipe,
          start: "top top",
          end: "+=160%",
          pin: true,
          scrub: 0.8,
        },
      });
      wipeTl
        .fromTo(".scene--final", { clipPath: "inset(0 0 0 100%)" }, { clipPath: "inset(0 0 0 0%)", duration: 1 }, 0)
        .fromTo(".wipe__handle", { left: "100%" }, { left: "0%", duration: 1 }, 0);
      // each note appears the moment the wipe passes its x position
      notes.forEach((li) => {
        const x = parseFloat(li.style.getPropertyValue("--x")) / 100;
        wipeTl.from(li, { autoAlpha: 0, y: 8, duration: 0.06, ease: "power2.out" }, Math.max(0, 1 - x - 0.04));
      });

      // ---------- Marquee: loops forever, reverses and skews with scroll ----------
      const loops = $$(".marquee__row").map((row) => {
        const inner = $(".marquee__inner", row);
        const dir = Number(row.dataset.dir);
        return gsap.fromTo(inner, { xPercent: dir > 0 ? 0 : -50 }, {
          xPercent: dir > 0 ? -50 : 0,
          duration: 28,
          ease: "none",
          repeat: -1,
        }).totalTime(28 * 100); // start deep in the loop so reversing never hits time 0
      });
      const skewTo = gsap.quickTo(".marquee__inner", "skewX", { duration: 0.4, ease: "power3" });
      ScrollTrigger.create({
        trigger: ".marquee",
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const v = self.getVelocity();
          skewTo(gsap.utils.clamp(-12, 12, v / -250));
          const boost = 1 + Math.min(Math.abs(v) / 600, 4);
          loops.forEach((t) => gsap.to(t, { timeScale: self.direction * boost, duration: 0.3, overwrite: true }));
        },
        onLeave: () => skewTo(0),
        onLeaveBack: () => skewTo(0),
      });

      // ---------- Contact ----------
      gsap.from(".contact__body, .contact__link", {
        y: 30,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".contact__body", start: "top 88%", toggleActions: "play none none reverse" },
      });

      // Magnetic CTA on pointer devices.
      if (desktop && matchMedia("(hover: hover)").matches) {
        const link = $(".contact__link");
        const label = $("span", link);
        const xTo = gsap.quickTo(link, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
        const yTo = gsap.quickTo(link, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
        const lxTo = gsap.quickTo(label, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
        const move = (e) => {
          const r = link.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          xTo(dx * 0.35); yTo(dy * 0.35); lxTo(dx * 0.12);
        };
        const leave = () => { xTo(0); yTo(0); lxTo(0); };
        link.addEventListener("pointermove", move);
        link.addEventListener("pointerleave", leave);
        return () => {
          link.removeEventListener("pointermove", move);
          link.removeEventListener("pointerleave", leave);
          document.documentElement.classList.remove("is-motion");
        };
      }

      return () => document.documentElement.classList.remove("is-motion");
    }
  );

  // Fonts change line lengths; re-measure pins and splits once they land.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
})();
