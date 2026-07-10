"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/language-context";
import { BOOKING_URL } from "@/lib/site-config";

type PlanPricing =
  | { kind: "retainer"; monthly: number; annual: number }
  | { kind: "project"; price: number | null };

type Plan = {
  name: string;
  badge?: { label: string; icon: "flame" | "diamond" };
  pricing: PlanPricing;
  description: string;
  features: string[];
  highlighted?: boolean;
};

// Full monthly price vs. discounted price with an annual commitment.
const socialMeta = [
  { monthly: 610, annual: 550 },
  { monthly: 720, annual: 650, icon: "flame" as const, highlighted: true },
  { monthly: 950, annual: 850, icon: "diamond" as const },
];

// One-off project prices; `null` means custom scope ("Let's Talk").
const webMeta = [
  { price: 990 as number | null },
  { price: 1990 as number | null, icon: "flame" as const, highlighted: true },
  { price: null as number | null, icon: "diamond" as const },
];

function formatPrice(value: number) {
  return `€${value.toLocaleString("en-US")}`;
}

function FlameIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
      <path d="M12 2c1 3-3 4-3 7a3 3 0 0 0 6 0c0-1-.5-2-1-2.5.5 2 3 3 3 6.5a5 5 0 0 1-10 0c0-4 3-5 5-11z" />
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
      <path d="M6 3h12l4 6-10 12L2 9z" />
    </svg>
  );
}

function PlanBadge({ badge }: { badge: NonNullable<Plan["badge"]> }) {
  const isPremium = badge.icon === "diamond";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${isPremium ? "bg-neutral-950 text-white" : "bg-orange-50 text-[#d8472b]"
        }`}
    >
      {isPremium ? <DiamondIcon /> : <FlameIcon />}
      {badge.label}
    </span>
  );
}

function PlanPrice({ pricing, annual }: { pricing: PlanPricing; annual: boolean }) {
  const t = useT();

  if (pricing.kind === "retainer") {
    const price = annual ? pricing.annual : pricing.monthly;
    return (
      <div className="mt-6 flex items-end gap-2">
        {annual && (
          <span className="pb-1 text-lg font-medium text-neutral-400 line-through">
            {formatPrice(pricing.monthly)}
          </span>
        )}
        <span className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
          {formatPrice(price)}
        </span>
        <span className="pb-1 text-sm text-neutral-500">{t.pricing.perMonth}</span>
      </div>
    );
  }

  if (pricing.price === null) {
    return (
      <div className="mt-6 flex items-end gap-2">
        <span className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
          {t.pricing.customPrice}
        </span>
      </div>
    );
  }

  return (
    <div className="mt-6 flex flex-wrap items-end gap-x-2 gap-y-1">
      <span className="pb-1 text-sm text-neutral-500">{t.pricing.startingAt}</span>
      <span className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
        {formatPrice(pricing.price)}
      </span>
      <span className="pb-1 text-sm text-neutral-500">{t.pricing.oneTime}</span>
    </div>
  );
}

function PlanCard({
  plan,
  annual,
  hasEntered,
  delay,
}: {
  plan: Plan;
  annual: boolean;
  hasEntered: boolean;
  delay: number;
}) {
  const t = useT();

  return (
    <div
      style={{ transitionDelay: hasEntered ? `${delay}ms` : "0ms" }}
      className={`relative flex flex-col rounded-2xl bg-white p-8 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        plan.highlighted
          ? "shadow-xl ring-1 ring-neutral-950/5 lg:-my-6 lg:py-14"
          : ""
      } ${
        hasEntered
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 motion-reduce:translate-y-0"
      }`}
    >
      {plan.highlighted && (
        <span
          aria-hidden="true"
          className="absolute top-6 right-6 text-lg text-[#d8472b]"
        >
          ⌐
        </span>
      )}

      <div className="flex items-center gap-2">
        <span className="font-semibold text-neutral-950">{plan.name}</span>
        {plan.badge && <PlanBadge badge={plan.badge} />}
      </div>

      <PlanPrice pricing={plan.pricing} annual={annual} />

      <p className="mt-4 text-sm text-neutral-500">{plan.description}</p>

      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-[background-color,box-shadow,transform] duration-200 ease-out hover:scale-[1.02] active:scale-95 ${plan.highlighted
            ? "bg-[#d8472b] hover:bg-[#c23f26] text-white"
            : "bg-white text-neutral-950 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300"
          }`}
      >
        <span aria-hidden="true">↳</span> {t.pricing.choosePlan}
      </a>

      <div className="mt-10">
        <div className="text-sm font-semibold text-neutral-950">
          {t.pricing.whatsIncluded}
        </div>
        <ul className="mt-4 space-y-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-neutral-500"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 text-[#d8472b]"
              >
                ⌐
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Pricing() {
  const t = useT();
  const [tab, setTab] = useState<"social" | "web">("social");
  const [annual, setAnnual] = useState(true);
  const [hasEntered, setHasEntered] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const plans: Plan[] =
    tab === "social"
      ? t.pricing.socialPlans.map((plan, i) => ({
          name: plan.name,
          badge:
            plan.badgeLabel && socialMeta[i].icon
              ? { label: plan.badgeLabel, icon: socialMeta[i].icon! }
              : undefined,
          pricing: {
            kind: "retainer",
            monthly: socialMeta[i].monthly,
            annual: socialMeta[i].annual,
          },
          description: plan.description,
          features: plan.features,
          highlighted: socialMeta[i].highlighted,
        }))
      : t.pricing.webPlans.map((plan, i) => ({
          name: plan.name,
          badge:
            plan.badgeLabel && webMeta[i].icon
              ? { label: plan.badgeLabel, icon: webMeta[i].icon! }
              : undefined,
          pricing: { kind: "project", price: webMeta[i].price },
          description: plan.description,
          features: plan.features,
          highlighted: webMeta[i].highlighted,
        }));

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
    <section id="pricing" className="relative z-10 bg-white py-24">
      <div className="px-6 text-center sm:px-10">
        <h2 className="font-sans whitespace-nowrap text-5xl font-semibold tracking-[-0.07em] text-[#0b0b0c] leading-[0.96] sm:text-[clamp(2.5rem,7vw,112px)]">
          {t.pricing.heading}
        </h2>
      </div>
      <div className="mx-auto max-w-2xl px-6 text-center sm:px-10">
        <p className="mt-6 text-lg leading-[1.4] font-medium tracking-[-0.04em] text-[rgba(12,12,12,0.6)]">
          {t.pricing.subheading} <br /> {t.pricing.subheadingLine2}
        </p>

        <div className="mt-8 inline-flex rounded-full bg-neutral-100 p-1">
          {(["social", "web"] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-[background-color,color] duration-200 ease-out ${
                tab === key
                  ? "bg-neutral-950 text-white"
                  : "text-neutral-500 hover:text-neutral-950"
              }`}
            >
              {key === "social" ? t.pricing.socialTab : t.pricing.webTab}
            </button>
          ))}
        </div>

        {/* Kept in the layout (invisible) on the web tab so the cards don't jump. */}
        <div
          className={`mt-6 flex items-center justify-center gap-3 ${tab === "social" ? "" : "invisible"}`}
        >
          <span
            className={`text-sm font-medium ${!annual ? "text-neutral-950" : "text-neutral-400"}`}
          >
            {t.pricing.monthly}
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            onClick={() => setAnnual((v) => !v)}
            className="relative h-7 w-12 shrink-0 rounded-full bg-[#d8472b] transition-[background-color,transform] duration-200 ease-out hover:scale-105 hover:bg-[#c23f26] active:scale-95"
          >
            <span
              className={`absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${annual ? "translate-x-5" : "translate-x-0"
                }`}
            />
          </button>
          <span
            className={`text-sm font-medium ${annual ? "text-neutral-950" : "text-neutral-400"}`}
          >
            {t.pricing.annual}
          </span>
          <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-[#d8472b]">
            {t.pricing.saveBadge}
          </span>
        </div>
      </div>

      <div className="mt-16 bg-neutral-100 px-6 py-20 sm:px-10">
        <div
          ref={gridRef}
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {plans.map((plan, i) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              annual={annual}
              hasEntered={hasEntered}
              delay={i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
