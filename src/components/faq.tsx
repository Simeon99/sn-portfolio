"use client";

import { useState } from "react";
import { useT } from "@/lib/language-context";
import { useReveal } from "@/lib/use-reveal";

type FaqItem = { question: string; answer: string };

function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-4 w-4 shrink-0 items-center justify-center text-[#d8472b]">
      <span className="absolute h-[2px] w-4 bg-current" />
      <span
        className={`absolute h-4 w-[2px] bg-current transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          open ? "scale-y-0" : "scale-y-100"
        }`}
      />
    </span>
  );
}

function FaqRow({
  item,
  open,
  onToggle,
}: {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-neutral-200 py-6">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-6 text-left"
      >
        <span className="text-lg font-semibold tracking-[-0.02em] text-neutral-950 transition-colors duration-200 ease-out group-hover:text-[#d8472b]">
          {item.question}
        </span>
        <span className="transition-transform duration-200 ease-out group-hover:scale-110 group-active:scale-90">
          <PlusMinusIcon open={open} />
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-[280ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p
            className={`pt-4 pr-10 text-base leading-[1.4] tracking-[-0.02em] text-neutral-500 transition-opacity duration-200 ${
              open ? "opacity-100 delay-100" : "opacity-0"
            }`}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const t = useT();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: listRef, hasEntered } = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section id="faq" className="relative z-10 bg-white px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[320px_1fr] lg:gap-24">
        <div>
          <h2 className="font-sans text-[clamp(2.5rem,7vw,112px)] leading-[0.96] font-semibold tracking-[-0.07em] text-[#0b0b0c]">
            {t.faq.heading}
          </h2>
          <p className="mt-6 max-w-xs text-lg leading-[1.4] font-medium tracking-[-0.04em] text-[rgba(12,12,12,0.6)]">
            {t.faq.subheading}
          </p>
          <a
            href="#"
            className="group mt-12 inline-flex items-center gap-2 font-semibold text-[#d8472b] transition-[color,transform] duration-200 ease-out hover:text-[#c23f26] active:scale-95"
          >
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1"
            >
              ↳
            </span>{" "}
            {t.faq.cta}
          </a>
        </div>

        <div ref={listRef}>
          {t.faq.items.map((item, i) => (
            <div
              key={item.question}
              style={{ transitionDelay: hasEntered ? `${i * 100}ms` : "0ms" }}
              className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                hasEntered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0 motion-reduce:translate-y-0"
              }`}
            >
              <FaqRow
                item={item}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </div>
          ))}
          <div className="border-t border-neutral-200" />
        </div>
      </div>
    </section>
  );
}
