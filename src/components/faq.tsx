"use client";

import { useEffect, useRef, useState } from "react";

type FaqItem = { question: string; answer: string };

const faqs: FaqItem[] = [
  {
    question: "What's your process for taking on a new project?",
    answer:
      "We start by understanding your brand, goals, and audience, then map out a creative direction across video, social, and web. Once you approve the concept, we move into production and development, testing everything before launch.",
  },
  {
    question: "What if I need changes or new content after launch?",
    answer:
      "No problem — most of our plans include ongoing revisions and fresh content each month. If you need something outside your plan, we scope it quickly and get to work.",
  },
  {
    question: "Do you handle social media management and paid ads?",
    answer:
      "Yes. We plan, create, and post content, and we manage Meta and Google ad campaigns end to end, from creative to targeting to reporting.",
  },
  {
    question: "How long does it typically take to see results?",
    answer:
      "Most clients see initial engagement and traffic gains within the first month, with stronger results building over 60-90 days as content and campaigns compound.",
  },
  {
    question: "How do you make sure everything stays on-brand and mobile-friendly?",
    answer:
      "Every deliverable follows the brand guidelines we set together at kickoff, and every site and asset is tested across devices before it ever reaches your audience.",
  },
];

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
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
    <section className="relative z-10 bg-white px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[320px_1fr] lg:gap-24">
        <div>
          <h2 className="font-sans text-[clamp(2.5rem,7vw,112px)] leading-[0.96] font-semibold tracking-[-0.07em] text-[#0b0b0c]">
            FAQ
          </h2>
          <p className="mt-6 max-w-xs text-lg leading-[1.4] font-medium tracking-[-0.04em] text-[rgba(12,12,12,0.6)]">
            We&apos;ve heard it all. Here&apos;s everything you need to know
            before working with us.
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
            Ask a question
          </a>
        </div>

        <div ref={listRef}>
          {faqs.map((item, i) => (
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
