"use client";

import { useEffect, useRef, useState } from "react";

// Reveals content once its container scrolls into view. Falls back to an
// immediate reveal if IntersectionObserver never fires — unsupported
// browser, blocked by a privacy extension, or (a real WebKit quirk) an
// element that's already on-screen when observe() is called — so content
// can never get stuck permanently invisible.
export function useReveal<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.1 },
) {
  const ref = useRef<T>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const { threshold, rootMargin } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setHasEntered(true));
      return () => cancelAnimationFrame(frame);
    }

    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setHasEntered(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(el);

    const fallback = window.setTimeout(() => setHasEntered(true), 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [threshold, rootMargin]);

  return { ref, hasEntered };
}
