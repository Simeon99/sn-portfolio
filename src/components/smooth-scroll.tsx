"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;

    let frame: number;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

    // Next.js scrolls hash links with a native scrollIntoView, which moves
    // the real scroll position without Lenis knowing — the next wheel event
    // then animates from Lenis's stale internal position and jumps. Anchor
    // clicks are handled here instead, driving the same scroll through Lenis.
    function onClick(e: MouseEvent) {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor || anchor.target === "_blank") return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const url = new URL(href, window.location.href);
      if (url.pathname !== window.location.pathname || !url.hash) return;

      const target = document.querySelector(url.hash);
      if (!target) return;

      e.preventDefault();
      lenis.resize();
      lenis.scrollTo(target as HTMLElement, { offset: 0 });
      history.replaceState(null, "", url.hash);
    }

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Handles hash links that navigate across routes (e.g. from /about to
  // /#contact): Next.js's own scroll for that case is disabled via the
  // Link `scroll={false}` prop, so once the new route mounts we scroll to
  // the hash target ourselves, keeping Lenis in sync.
  useEffect(() => {
    const lenis = lenisRef.current;
    const hash = window.location.hash;
    if (!lenis || !hash) return;

    const frame = requestAnimationFrame(() => {
      const target = document.querySelector(hash);
      if (target) {
        // The new route is often taller than the one Lenis last measured;
        // force a remeasure so the scroll target isn't clamped short.
        lenis.resize();
        lenis.scrollTo(target as HTMLElement, { offset: 0, immediate: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
