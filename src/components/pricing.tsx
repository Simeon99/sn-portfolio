"use client";

import { useEffect, useRef, useState } from "react";

type Plan = {
  name: string;
  badge?: { label: string; icon: "flame" | "diamond" };
  monthly: number;
  annual: number;
  description: string;
  features: string[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Basic",
    monthly: 799,
    annual: 559,
    description:
      "For small businesses or startups building their first digital presence.",
    features: [
      "Brand & competitor audit",
      "Website design (up to 4 pages)",
      "4 social media posts / month",
      "Basic analytics setup",
      "Contact form & booking setup",
      "Bug fixing and testing support",
    ],
  },
  {
    name: "Pro",
    badge: { label: "Most popular", icon: "flame" },
    monthly: 2599,
    annual: 1999,
    description:
      "For growing brands that need consistent content and a stronger web presence.",
    features: [
      "Everything in the Basic plan",
      "Up to 10 pages, fully customized",
      "2 short videos + 8 social posts / month",
      "Paid ad management (Meta & Google)",
      "Enhanced SEO for core pages",
      "Monthly performance reporting",
    ],
    highlighted: true,
  },
  {
    name: "Max",
    badge: { label: "Premium", icon: "diamond" },
    monthly: 3999,
    annual: 2799,
    description:
      "For established brands looking for a fully tailored creative team.",
    features: [
      "Everything in the Pro plan",
      "Unlimited video & photo shoots",
      "Full social & ad campaign management",
      "Custom e-commerce functionality",
      "Unlimited revisions during production",
      "Priority support for 6 months post-launch",
    ],
  },
];

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
  const price = annual ? plan.annual : plan.monthly;

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

      <div className="mt-6 flex items-end gap-2">
        {annual && (
          <span className="pb-1 text-lg font-medium text-neutral-400 line-through">
            ${plan.monthly.toLocaleString()}
          </span>
        )}
        <span className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
          ${price.toLocaleString()}
        </span>
        <span className="pb-1 text-sm text-neutral-500">/month</span>
      </div>

      <p className="mt-4 text-sm text-neutral-500">{plan.description}</p>

      <button
        type="button"
        className={`mt-8 flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-[background-color,box-shadow,transform] duration-200 ease-out hover:scale-[1.02] active:scale-95 ${plan.highlighted
            ? "bg-[#d8472b] hover:bg-[#c23f26] text-white"
            : "bg-white text-neutral-950 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300"
          }`}
      >
        <span aria-hidden="true">↳</span> Choose this plan
      </button>

      <div className="mt-10">
        <div className="text-sm font-semibold text-neutral-950">
          What&apos;s Included:
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
  const [annual, setAnnual] = useState(true);
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
    <section id="pricing" className="relative z-10 bg-white py-24">
      <div className="px-6 text-center sm:px-10">
        <h2 className="font-sans whitespace-nowrap text-5xl font-semibold tracking-[-0.07em] text-[#0b0b0c] leading-[0.96] sm:text-[clamp(2.5rem,7vw,112px)]">
          Flexible pricing
        </h2>
      </div>
      <div className="mx-auto max-w-2xl px-6 text-center sm:px-10">
        <p className="mt-6 text-lg leading-[1.4] font-medium tracking-[-0.04em] text-[rgba(12,12,12,0.6)]">
          Choose the plan that fits where your brand is headed. <br /> From a solid
          foundation to a fully optimized growth engine.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span
            className={`text-sm font-medium ${!annual ? "text-neutral-950" : "text-neutral-400"}`}
          >
            Monthly
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
            Annual
          </span>
          <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-[#d8472b]">
            Save 30%
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
