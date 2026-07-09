"use client";

import { useT, useLanguage } from "@/lib/language-context";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { toggle } = useLanguage();
  const t = useT();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.languageToggle.ariaLabel}
      className={`flex h-8 min-w-8 items-center justify-center rounded-full border border-current px-2 text-xs font-bold tracking-wide uppercase transition-transform duration-200 ease-out hover:scale-105 active:scale-95 ${className}`}
    >
      {t.languageToggle.switchTo}
    </button>
  );
}
