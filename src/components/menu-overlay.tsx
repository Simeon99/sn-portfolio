"use client";

import Link from "next/link";
import { PROJECT_COUNT } from "@/data/projects";
import { useT } from "@/lib/language-context";
import { CONTACT_EMAILS, CONTACT_PHONE } from "@/lib/site-config";
import { LanguageToggle } from "@/components/language-toggle";

export function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const t = useT();

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.projects, href: "/projects", meta: `(${PROJECT_COUNT})` },
    { label: t.nav.contact, href: "/#contact" },
  ];

  return (
    <div
      aria-hidden={!open}
      inert={!open ? true : undefined}
      className={`absolute inset-x-0 top-0 z-30 flex min-h-[65vh] flex-col overflow-hidden bg-[#d8472b] px-6 pt-6 pb-10 text-white transition-[clip-path,opacity] ease-[cubic-bezier(0.23,1,0.32,1)] sm:px-10 ${open
          ? "opacity-100 duration-[420ms] [clip-path:inset(0_0_0%_0)]"
          : "pointer-events-none opacity-0 duration-[260ms] [clip-path:inset(0_0_100%_0)]"
        }`}
    >
      <div className="flex items-start justify-between">
        <span className="text-lg font-bold tracking-tight">
          S&N<sup className="text-xs">®</sup>
        </span>

        <div className="flex items-center gap-4">
          <LanguageToggle />

          <button
            onClick={onClose}
            className="flex items-center gap-2 text-sm font-bold tracking-wide uppercase transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
          >
            <span className="relative h-4 w-6">
              <span className="absolute top-1/2 left-0 block h-0.5 w-6 -translate-y-1/2 rotate-45 bg-white" />
              <span className="absolute top-1/2 left-0 block h-0.5 w-6 -translate-y-1/2 -rotate-45 bg-white" />
            </span>
            {t.menu.menu}
          </button>
        </div>
      </div>

      <nav className="absolute top-24 right-6 flex flex-col items-end gap-3 text-2xl font-bold sm:right-10 sm:text-3xl">
        {navItems.map((item, i) => (
          <Link
            key={item.label}
            href={item.href}
            scroll={!item.href.includes("#")}
            onClick={onClose}
            style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
            className={`transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white/70 ${open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
          >
            {item.label} {item.meta}
          </Link>
        ))}
      </nav>

      <div className="mt-auto">
        <a
          href={`tel:${CONTACT_PHONE.href}`}
          className="block text-sm font-semibold transition-colors duration-200 ease-out hover:text-white/70"
        >
          {CONTACT_PHONE.display}
        </a>
        {CONTACT_EMAILS.map((email) => (
          <a
            key={email}
            href={`mailto:${email}`}
            className="block text-xl font-bold break-all transition-colors duration-200 ease-out hover:text-white/70 sm:text-3xl"
          >
            {email}
          </a>
        ))}
      </div>
    </div>
  );
}
