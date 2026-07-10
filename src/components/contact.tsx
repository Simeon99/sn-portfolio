"use client";

import { useT } from "@/lib/language-context";
import { BOOKING_URL } from "@/lib/site-config";
import { useReveal } from "@/lib/use-reveal";

export function Contact() {
  const t = useT();
  const { ref: sectionRef, hasEntered } = useReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      id="contact"
      className="relative z-10 overflow-hidden bg-neutral-950 px-6 py-24 text-white sm:px-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 80% 20%, rgba(216,71,43,0.16), transparent 60%), radial-gradient(80% 80% at 10% 90%, rgba(255,255,255,0.06), transparent 60%)",
        }}
      />

      <div ref={sectionRef} className="relative mx-auto max-w-7xl">
        <div
          className={`flex items-center justify-end transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${hasEntered
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 motion-reduce:translate-y-0"
            }`}
        >
          <span className="flex items-center gap-2 text-sm font-semibold tracking-wide text-neutral-300 uppercase">
            <span aria-hidden="true" className="text-[#d8472b]">
              ⌐
            </span>
            {t.contact.kicker}
          </span>
        </div>

        <h2
          style={{ transitionDelay: hasEntered ? "80ms" : "0ms" }}
          className={`mt-10 font-sans text-[clamp(2.5rem,7vw,112px)] leading-[0.96] font-semibold tracking-[-0.07em] text-white transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${hasEntered
            ? "translate-y-0 opacity-100 blur-none"
            : "translate-y-6 opacity-0 blur-sm motion-reduce:translate-y-0 motion-reduce:blur-none"
            }`}
        >
          {t.contact.heading}
        </h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p
              style={{ transitionDelay: hasEntered ? "160ms" : "0ms" }}
              className={`max-w-md text-lg leading-[1.4] font-medium tracking-[-0.04em] text-neutral-400 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${hasEntered
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0 motion-reduce:translate-y-0"
                }`}
            >
              {t.contact.description}
            </p>

            <div
              style={{ transitionDelay: hasEntered ? "240ms" : "0ms" }}
              className={`mt-8 flex items-center gap-3 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${hasEntered
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0 motion-reduce:translate-y-0"
                }`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d8472b]/15 text-sm font-bold text-[#d8472b]">
                SI
              </span>
              <div>
                <div className="font-semibold text-white">{t.contact.managerName}</div>
                <div className="text-sm text-neutral-400">
                  {t.contact.managerRole}
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ transitionDelay: hasEntered ? "240ms" : "0ms" }}
            className={`self-start rounded-2xl border border-white/10 bg-white/5 p-8 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] sm:p-10 ${hasEntered
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0 motion-reduce:translate-y-0"
              }`}
          >
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              {t.contact.bookingTitle}
            </h3>
            <p className="mt-3 max-w-sm text-neutral-400">
              {t.contact.bookingDescription}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#d8472b] px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:scale-[1.02] hover:bg-[#e0654d] active:scale-95"
            >
              {t.contact.bookingCta}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
              >
                <path
                  d="M5 12h14m0 0-6-6m6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
