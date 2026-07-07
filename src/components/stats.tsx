"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: "10+",
    label: "Clients served",
    description: "Campaigns and sites shipped for our clients.",
  },
  {
    value: "1.5M+",
    label: "Views generated",
    description: "Video and social content reaching real audiences.",
  },
  {
    value: "98%",
    label: "Client satisfaction rate",
    description: "We build long-term partnerships through proven results.",
  },
  {
    value: "3+",
    label: "Years of expertise",
    description: "Combined experience across video, social, and web.",
  },
];

function parseValue(raw: string) {
  const match = raw.match(/^([^\d.]*)([\d.]+)(.*)$/);
  if (!match) return { prefix: "", target: 0, decimals: 0, suffix: raw };
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { prefix, target: parseFloat(numStr), decimals, suffix };
}

function useCountUp(raw: string, start: boolean, delay: number) {
  const { prefix, target, decimals, suffix } = parseValue(raw);
  const [display, setDisplay] = useState(`${prefix}${(0).toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (!start) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setDisplay(raw));
      return () => cancelAnimationFrame(frame);
    }

    const duration = 800;
    let frame: number;
    const timeout = window.setTimeout(() => {
      frame = requestAnimationFrame((n) => tick(n, n));
    }, delay);

    function tick(now: number, startTime: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
      if (progress < 1) {
        frame = requestAnimationFrame((n) => tick(n, startTime));
      }
    }

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  return display;
}

function StatItem({
  stat,
  start,
  delay,
}: {
  stat: (typeof stats)[number];
  start: boolean;
  delay: number;
}) {
  const display = useCountUp(stat.value, start, delay);

  return (
    <div
      style={{ transitionDelay: start ? `${delay}ms` : "0ms" }}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        start
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 motion-reduce:translate-y-0"
      }`}
    >
      <div className="text-7xl leading-[0.9] font-bold tracking-[-0.03em] tabular-nums 2xl:text-8xl">
        {display}
      </div>
      <div className="mt-8 border-t border-neutral-200 pt-5">
        <div className="text-xl font-bold tracking-[-0.01em] sm:text-2xl">
          {stat.label}
        </div>
        <p className="mt-2 text-base leading-relaxed text-neutral-500">
          {stat.description}
        </p>
      </div>
    </div>
  );
}

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 min-h-screen bg-white px-6 py-24 text-neutral-950 sm:px-10"
    >
      <div
        className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          start
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 motion-reduce:translate-y-0"
        }`}
      >
        <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-16">
          <div className="flex items-center gap-2 text-lg font-semibold text-[#d8472b]">
            <span aria-hidden="true">↳</span>
            <span className="text-neutral-950">Let&apos;s talk</span>
          </div>
          <h2 className="max-w-3xl font-sans text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-bold tracking-[-0.02em]">
            Our work speaks through numbers. Here&apos;s what we&apos;ve
            achieved so far.
          </h2>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-x-10 gap-y-16 sm:mt-32 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} start={start} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
