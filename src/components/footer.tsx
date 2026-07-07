"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Services", href: "#" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
];

export function Footer() {
  const [hasEntered, setHasEntered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
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
    <footer className="relative z-10 bg-neutral-100 px-6 py-16 sm:px-10">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          hasEntered
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 motion-reduce:translate-y-0"
        }`}
      >
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1.2fr_auto_auto] lg:gap-8">
          <div>
            <span className="block text-[clamp(3.5rem,9vw,9rem)] leading-[0.85] font-black tracking-[-0.04em] text-neutral-950">
              S&N<sup className="text-[0.3em]">&reg;</sup>
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-bold tracking-[-0.02em] text-neutral-950">
              Stay connected
            </h3>
            <p className="mt-3 max-w-xs text-sm text-neutral-500">
              Get monthly tips on video, social, and web — plus an occasional
              look behind the scenes at S&amp;N.
            </p>
            <form className="mt-6 flex max-w-xs items-center gap-3 border-b border-neutral-300 pb-2">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full bg-transparent text-sm text-neutral-950 placeholder-neutral-400 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d8472b] text-white transition-[background-color,transform] duration-200 ease-out hover:scale-110 hover:bg-[#c23f26] active:scale-95"
              >
                <span aria-hidden="true">&rarr;</span>
              </button>
            </form>
          </div>

          <nav className="flex flex-col gap-2 text-sm font-medium text-neutral-600">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="w-fit transition-colors hover:text-neutral-950"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <nav className="flex flex-col gap-2 text-sm font-medium text-neutral-600">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-fit transition-colors hover:text-neutral-950"
              >
                {social.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-20 flex flex-col gap-8 border-t border-neutral-200 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a
              href="tel:+10000000000"
              className="block text-sm font-semibold text-neutral-950 transition-colors duration-200 ease-out hover:text-[#d8472b]"
            >
              (000) 000-0000
            </a>
            <a
              href="mailto:hello@sn-portfolio.com"
              className="mt-1 block text-2xl font-bold tracking-tight text-neutral-950 transition-colors duration-200 ease-out hover:text-[#d8472b] sm:text-3xl"
            >
              hello@sn-portfolio.com
            </a>
          </div>

          <p className="max-w-md text-sm text-neutral-500 sm:text-right">
            With S&amp;N, your brand gets more than content. We create video,
            social, and web experiences that resonate with your audience and
            drive real results.
          </p>
        </div>
      </div>
    </footer>
  );
}
