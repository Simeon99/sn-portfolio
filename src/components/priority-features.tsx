"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useT } from "@/lib/language-context";
import { BOOKING_URL } from "@/lib/site-config";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 shrink-0 rounded-full bg-orange-500 p-0.5 text-white"
    >
      <path
        d="M5 10.5l3 3 7-7"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GrowthChart() {
  return (
    <svg viewBox="0 0 240 100" fill="none" className="h-24 w-full">
      <defs>
        <linearGradient id="growth-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f97362" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#f97362" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,80 L30,72 L60,76 L90,48 L120,54 L150,26 L180,32 L240,8 V100 H0 Z"
        fill="url(#growth-fill)"
      />
      <path
        d="M0,80 L30,72 L60,76 L90,48 L120,54 L150,26 L180,32 L240,8"
        stroke="#f97362"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="240" cy="8" r="4" fill="#f97362" />
    </svg>
  );
}

// The booking week is computed from the real clock: the first opening is
// always the day after tomorrow, shown inside its surrounding Sunday-first
// week. Computed lazily on the client (with a static server fallback) so the
// prerendered HTML never depends on the build machine's date.
type BookingWeek = { dates: number[]; selectedIndex: number };

const serverBookingWeek: BookingWeek = {
  dates: [12, 13, 14, 15, 16, 17, 18],
  selectedIndex: 4,
};

let clientBookingWeek: BookingWeek | null = null;

function getBookingWeek(): BookingWeek {
  if (!clientBookingWeek) {
    const target = new Date();
    target.setDate(target.getDate() + 2);
    const selectedIndex = target.getDay();
    const dates: number[] = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(target);
      day.setDate(target.getDate() - selectedIndex + i);
      dates.push(day.getDate());
    }
    clientBookingWeek = { dates, selectedIndex };
  }
  return clientBookingWeek;
}

function getServerBookingWeek(): BookingWeek {
  return serverBookingWeek;
}

function subscribeBookingWeek() {
  return () => {};
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-4 w-4 shrink-0"
    >
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  );
}

function reveal(hasEntered: boolean, delay: number) {
  return {
    style: { transitionDelay: hasEntered ? `${delay}ms` : "0ms" },
    className: `transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
      hasEntered
        ? "translate-y-0 opacity-100"
        : "translate-y-8 opacity-0 motion-reduce:translate-y-0"
    }`,
  };
}

export function PriorityFeatures() {
  const t = useT();
  const bookingWeek = useSyncExternalStore(
    subscribeBookingWeek,
    getBookingWeek,
    getServerBookingWeek,
  );
  const [hasEntered, setHasEntered] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
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
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative z-10 bg-white px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-sans text-[clamp(2.5rem,7vw,112px)] leading-[0.96] font-semibold tracking-[-0.07em] text-[#0b0b0c]">
          {t.priorityFeatures.heading}
        </h2>
        <p className="mt-6 text-lg text-neutral-500">
          {t.priorityFeatures.subheading}
        </p>
      </div>

      <div
        ref={gridRef}
        className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {/* Card 1 — priority care */}
        <div
          style={reveal(hasEntered, 0).style}
          className={`flex flex-col overflow-hidden rounded-2xl bg-neutral-50 ${reveal(hasEntered, 0).className}`}
        >
          <div
            className="relative aspect-[4/5]"
            style={{
              backgroundImage:
                "radial-gradient(#d4d4d4 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          >
            <Image
              src="/images/laptophand.png"
              alt={t.priorityFeatures.card1.title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-neutral-950">
              {t.priorityFeatures.card1.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              {t.priorityFeatures.card1.descriptionBefore}{" "}
              <span className="font-semibold text-neutral-950">
                {t.priorityFeatures.card1.highlight}
              </span>{" "}
              {t.priorityFeatures.card1.descriptionAfter}
            </p>
          </div>
        </div>

        {/* Card 2 — tailored tweaks */}
        <div
          style={reveal(hasEntered, 120).style}
          className={`relative flex flex-col gap-4 rounded-2xl bg-neutral-50 p-6 ${reveal(hasEntered, 120).className}`}
        >
          <span
            aria-hidden="true"
            className="absolute top-6 right-6 text-lg text-orange-500"
          >
            ↗
          </span>

          <div>
            <h3 className="text-xl leading-tight font-bold text-neutral-950">
              {t.priorityFeatures.card2.titleLine1}
              <br />
              {t.priorityFeatures.card2.titleLine2}
            </h3>
            <p className="mt-3 text-sm text-neutral-500">
              {t.priorityFeatures.card2.descriptionBefore}{" "}
              <span className="font-semibold text-neutral-950">
                {t.priorityFeatures.card2.highlight}
              </span>{" "}
              {t.priorityFeatures.card2.descriptionAfter}
            </p>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="font-semibold text-neutral-950">
              {t.priorityFeatures.card2.timelineLabel}
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              {t.priorityFeatures.card2.doneItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-neutral-400 line-through"
                >
                  <CheckIcon />
                  {item}
                </li>
              ))}
              {t.priorityFeatures.card2.todoItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-neutral-700"
                >
                  <span className="h-4 w-4 shrink-0 rounded-full border border-neutral-300" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-2 border-t border-neutral-100 pt-3 text-xs text-neutral-400">
              <CalendarIcon />
              {t.priorityFeatures.card2.turnaround}
            </div>
          </div>
        </div>

        {/* Card 3 — growth you can measure */}
        <div
          style={reveal(hasEntered, 240).style}
          className={`relative flex flex-col gap-4 overflow-hidden rounded-2xl bg-neutral-950 p-6 text-white ${reveal(hasEntered, 240).className}`}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-neutral-400">
              {t.priorityFeatures.card3.engagementLabel}
            </span>
            <span className="rounded-full bg-white/10 px-2 py-1 text-xs font-semibold text-orange-400">
              +248%
            </span>
          </div>

          <GrowthChart />

          <div>
            <h3 className="text-xl font-bold">{t.priorityFeatures.card3.title}</h3>
            <p className="mt-2 text-sm text-neutral-400">
              {t.priorityFeatures.card3.descriptionBefore}{" "}
              <span className="font-semibold text-white">
                {t.priorityFeatures.card3.highlight}
              </span>
              {t.priorityFeatures.card3.descriptionAfter}
            </p>
          </div>
        </div>

        {/* Card 4 — book a call */}
        <div
          style={reveal(hasEntered, 360).style}
          className={`flex flex-col gap-5 rounded-2xl bg-[#d8472b] p-6 text-white ${reveal(hasEntered, 360).className}`}
        >
          <div className="rounded-xl bg-white/10 p-4">
            <div className="grid grid-cols-7 gap-1 text-center text-xs text-white/60">
              {t.priorityFeatures.card4.weekLabels.map((label, i) => (
                <span key={i}>{label}</span>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-7 gap-1 text-center text-sm">
              {bookingWeek.dates.map((date, i) => (
                <span
                  key={`${i}-${date}`}
                  className={
                    i === bookingWeek.selectedIndex
                      ? "flex items-center justify-center rounded-full bg-white py-1 font-semibold text-[#d8472b]"
                      : "flex items-center justify-center py-1 text-white/80"
                  }
                >
                  {date}
                </span>
              ))}
            </div>
            <div className="mt-3 border-t border-white/15 pt-3 text-xs text-white/70">
              {t.priorityFeatures.card4.nextOpeningPrefix}{" "}
              {t.priorityFeatures.card4.dayNames[bookingWeek.selectedIndex]},{" "}
              {t.priorityFeatures.card4.nextOpeningTime}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold">{t.priorityFeatures.card4.title}</h3>
            <p className="mt-2 text-sm text-white/80">
              {t.priorityFeatures.card4.description}
            </p>
          </div>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-auto flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#d8472b] transition-[background-color,transform] duration-200 ease-out hover:scale-[1.02] hover:bg-neutral-100 active:scale-95"
          >
            {t.priorityFeatures.card4.cta}
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
    </section>
  );
}
