"use client";

import { useEffect, useRef } from "react";
import { useT } from "@/lib/language-context";

const START_SCALE = 1.9;
const END_SCALE = 1.2;
// How much scrolling (in viewport heights) the shrink takes, measured from
// the moment the section first touches the bottom of the screen.
const ANIMATION_VH = 1.1;

export function ZoomText() {
  const t = useT();
  const sectionRef = useRef<HTMLElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scaleEl = scaleRef.current;
    const boxEl = boxRef.current;
    if (!section || !scaleEl || !boxEl) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scaleEl.style.transform = `scale(${END_SCALE})`;
      boxEl.style.transform = `translate(-50%, -50%) scale(${1 / END_SCALE})`;
      return;
    }

    let ticking = false;

    function update() {
      const rect = section!.getBoundingClientRect();
      // Distance scrolled since the section's top edge first touched the
      // bottom of the viewport (i.e. since the text first became visible).
      // The section scrolls normally the whole time — nothing pins it in
      // place, so the page never stops moving.
      const scrolledIntoView = window.innerHeight - rect.top;
      const scrollRange = window.innerHeight * ANIMATION_VH;
      const progress = Math.min(Math.max(scrolledIntoView / scrollRange, 0), 1);
      const scale = START_SCALE - (START_SCALE - END_SCALE) * progress;
      scaleEl!.style.transform = `scale(${scale})`;
      // Counter-scale the box so it renders at a constant size while the
      // text around it grows/shrinks.
      boxEl!.style.transform = `translate(-50%, -50%) scale(${1 / scale})`;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 flex items-center justify-center overflow-hidden bg-white py-24 text-neutral-950"
    >
      <div
        ref={scaleRef}
        className="relative flex flex-col items-center bg-white text-center will-change-transform"
      >
        <h2 className="relative px-4 py-6 text-[clamp(2.5rem,9vw,7rem)] leading-[1.22] font-sans font-bold tracking-[-0.02em]">
          {/* Placeholder product shot — swap for a real photo via next/image later.
              Painted first so the text (blended below) sits on top of it.
              Counter-scaled via ref so it stays a fixed size while scrolling. */}
          <span
            ref={boxRef}
            className="absolute top-1/2 left-1/2 block h-[4em] w-[6em] overflow-hidden rounded-sm bg-black will-change-transform"
          >
            <span className="bg-grain absolute inset-0 block opacity-30 mix-blend-overlay" />
          </span>

          {/* White text with a difference blend: over the white page it reads
              black, over the black box above it inverts to white. */}
          <span className="relative mix-blend-difference block text-white">
            {t.zoomText.lineOne}
          </span>
          <span className="relative mix-blend-difference block text-white">
            {t.zoomText.lineTwo}
          </span>
        </h2>
      </div>
    </section>
  );
}
