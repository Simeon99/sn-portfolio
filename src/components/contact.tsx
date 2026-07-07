"use client";

import { useEffect, useRef, useState } from "react";

function FormField({
  label,
  name,
  multiline,
  delay,
  visible,
}: {
  label: string;
  name: string;
  multiline?: boolean;
  delay: number;
  visible: boolean;
}) {
  function handleInput(e: React.FormEvent<HTMLTextAreaElement>) {
    const el = e.currentTarget;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }

  return (
    <div
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`relative pb-3 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${visible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0 motion-reduce:translate-y-0"
        }`}
    >
      {multiline ? (
        <textarea
          name={name}
          placeholder={label}
          rows={1}
          onInput={handleInput}
          className="peer w-full resize-none overflow-hidden bg-transparent py-2 text-lg text-white placeholder-neutral-400 outline-none"
        />
      ) : (
        <input
          name={name}
          placeholder={label}
          className="peer w-full bg-transparent py-2 text-lg text-white placeholder-neutral-400 outline-none"
        />
      )}
      <div className="absolute right-0 bottom-0 left-0 h-px bg-white/20" />
      <div className="absolute bottom-0 left-0 h-px w-0 bg-[#d8472b] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] peer-focus:w-full" />
    </div>
  );
}

export function Contact() {
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
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
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
            Contact us
          </span>
        </div>

        <h2
          style={{ transitionDelay: hasEntered ? "80ms" : "0ms" }}
          className={`mt-10 font-sans text-[clamp(2.5rem,7vw,112px)] leading-[0.96] font-semibold tracking-[-0.07em] text-white transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${hasEntered
              ? "translate-y-0 opacity-100 blur-none"
              : "translate-y-6 opacity-0 blur-sm motion-reduce:translate-y-0 motion-reduce:blur-none"
            }`}
        >
          Let&apos;s bring your vision to life
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
              Our team is here to make sure your experience with S&amp;N is
              smooth from the first message to the final launch. Reach out
              anytime — we&apos;re here to help you feel confident and
              supported.
            </p>

            <div
              style={{ transitionDelay: hasEntered ? "240ms" : "0ms" }}
              className={`mt-8 flex items-center gap-3 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${hasEntered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0 motion-reduce:translate-y-0"
                }`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d8472b]/15 text-sm font-bold text-[#d8472b]">
                SN
              </span>
              <div>
                <div className="font-semibold text-white">Stefan Nikolić</div>
                <div className="text-sm text-neutral-400">
                  Client Success Manager
                </div>
              </div>
            </div>
          </div>

          <form className="flex flex-col gap-8">
            <FormField
              label="Name *"
              name="name"
              delay={160}
              visible={hasEntered}
            />
            <FormField
              label="E-mail *"
              name="email"
              delay={240}
              visible={hasEntered}
            />
            <FormField
              label="Message (Tell us about your project)"
              name="message"
              multiline
              delay={320}
              visible={hasEntered}
            />

            <div
              style={{ transitionDelay: hasEntered ? "400ms" : "0ms" }}
              className={`mt-4 w-fit transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${hasEntered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0 motion-reduce:translate-y-0"
                }`}
            >
              <button
                type="submit"
                className="group inline-flex items-center gap-2 font-semibold text-[#d8472b] transition-[color,transform] duration-200 ease-out hover:text-[#e0654d] active:scale-95"
              >
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1"
                >
                  ↳
                </span>{" "}
                Get in touch
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
