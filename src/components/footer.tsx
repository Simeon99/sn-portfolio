"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/language-context";
import { BOOKING_URL, CONTACT_EMAILS, CONTACT_PHONE } from "@/lib/site-config";

export function Footer() {
  const t = useT();
  const links = t.footer.links;
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
        className={`mx-auto max-w-7xl transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${hasEntered
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 motion-reduce:translate-y-0"
          }`}
      >
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1.4fr_auto] lg:gap-8">
          <div>
            <span className="block text-[clamp(3.5rem,9vw,9rem)] leading-[0.85] font-black tracking-[-0.04em] text-neutral-950">
              S&N<sup className="text-[0.3em]">&reg;</sup>
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-bold tracking-[-0.02em] text-neutral-950">
              {t.footer.bookTitle}
            </h3>
            <p className="mt-3 max-w-xs text-sm text-neutral-500">
              {t.footer.bookDescription}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#d8472b] px-6 py-3 text-sm font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:scale-[1.02] hover:bg-[#c23f26] active:scale-95"
            >
              {t.footer.bookCta}
              <span
                aria-hidden="true"
                className="transition-transform duration-200 ease-out group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </a>
          </div>

          <nav className="flex flex-col gap-2 text-sm font-medium text-neutral-600">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="w-fit transition-colors hover:text-neutral-950"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-20 flex flex-col gap-8 border-t border-neutral-200 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a
              href={`tel:${CONTACT_PHONE.href}`}
              className="block text-sm font-semibold text-neutral-950 transition-colors duration-200 ease-out hover:text-[#d8472b]"
            >
              {CONTACT_PHONE.display}
            </a>
            {CONTACT_EMAILS.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="mt-1 block text-xl font-bold tracking-tight break-all text-neutral-950 transition-colors duration-200 ease-out hover:text-[#d8472b] sm:text-2xl"
              >
                {email}
              </a>
            ))}
          </div>

          <p className="max-w-md text-sm text-neutral-500 sm:text-right">
            {t.footer.bottomDescription}
          </p>
        </div>
      </div>
    </footer>
  );
}
