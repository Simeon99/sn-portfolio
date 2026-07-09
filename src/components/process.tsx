"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/language-context";

export function Process() {
  const t = useT();
  const [hasEntered, setHasEntered] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="relative z-10 bg-white px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <h2 className="font-sans text-[clamp(2.5rem,7vw,112px)] leading-[0.96] font-semibold tracking-[-0.07em] text-[#0b0b0c]">
            {t.process.heading}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-[1.4] font-medium tracking-[-0.04em] text-[rgba(12,12,12,0.6)]">
            {t.process.subheading}
          </p>
          <a
            href="#pricing"
            className="group mt-12 inline-flex items-center gap-2 font-semibold text-[#d8472b] transition-[color,transform] duration-200 ease-out hover:text-[#c23f26] active:scale-95"
          >
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1"
            >
              ↳
            </span>{" "}
            {t.process.cta}
          </a>
        </div>

        <div ref={listRef}>
          {t.process.steps.map((step, i) => (
            <div
              key={step.number}
              style={{ transitionDelay: hasEntered ? `${i * 120}ms` : "0ms" }}
              className={`relative flex gap-6 border-t border-neutral-200 py-8 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                hasEntered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0 motion-reduce:translate-y-0"
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute top-8 right-0 text-lg text-[#d8472b]"
              >
                ⌐
              </span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-xs font-semibold text-neutral-950">
                {step.number}
              </span>
              <div className="pr-8">
                <h3 className="text-[26px] leading-[1.3] font-semibold tracking-[-0.04em] text-[#0c0c0c]">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-[1.3] font-medium tracking-[-0.04em] text-[rgba(12,12,12,0.6)]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
