"use client";

import { useT } from "@/lib/language-context";
import { useReveal } from "@/lib/use-reveal";
import { Logo } from "@/components/logo";

export function BrandStatement() {
  const t = useT();
  const { ref: sectionRef, hasEntered } = useReveal<HTMLElement>({ threshold: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative z-20 flex min-h-[50%] flex-col items-center justify-center gap-10 bg-white px-6 py-24 text-center text-neutral-950"
    >
      {/* Matches the black box's width in ZoomText (6em of the same clamp
          font-size) so the guide lines line up across sections. */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 h-full w-[calc(6*clamp(2.5rem,9vw,7rem))] -translate-x-1/2 border border-neutral-200" />

      <p
        style={{ transitionDelay: hasEntered ? "0ms" : "0ms" }}
        className={`relative max-w-md text-lg leading-relaxed text-neutral-500 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] sm:text-xl ${
          hasEntered
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 motion-reduce:translate-y-0"
        }`}
      >
        {t.brandStatement.lineOne}
        <br />
        {t.brandStatement.lineTwo}
      </p>

      <span
        style={{ transitionDelay: hasEntered ? "120ms" : "0ms" }}
        className={`relative block transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          hasEntered
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 motion-reduce:translate-y-0"
        }`}
      >
        <Logo tone="light" className="h-9 w-auto sm:h-12" />
      </span>

      {/* Sits on the section's bottom border line, straddling into the
          next section. Animation lives on this wrapper so the button itself
          keeps a fast, untouched transition for its own press feedback. */}
      <div
        style={{ transitionDelay: hasEntered ? "240ms" : "0ms" }}
        className={`absolute bottom-0 left-1/2 z-10 -translate-x-1/2 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          hasEntered
            ? "translate-y-1/2 opacity-100"
            : "translate-y-[calc(50%+2rem)] opacity-0 motion-reduce:translate-y-1/2"
        }`}
      >
        <button
          type="button"
          onClick={() =>
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
          }
          aria-label={t.brandStatement.scrollDown}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950 text-white transition-transform duration-200 ease-out hover:scale-110 active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
