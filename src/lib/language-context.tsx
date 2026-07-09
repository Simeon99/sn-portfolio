"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import { translations, type Translations } from "@/lib/translations";

export type Lang = "en" | "sr";

const STORAGE_KEY = "sn-lang";

let currentLang: Lang = "en";
let initializedFromStorage = false;
const listeners = new Set<() => void>();

function getSnapshot(): Lang {
  if (!initializedFromStorage && typeof window !== "undefined") {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "sr") currentLang = stored;
    initializedFromStorage = true;
  }
  return currentLang;
}

function getServerSnapshot(): Lang {
  return "en";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function setLangGlobal(next: Lang) {
  currentLang = next;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, next);
  }
  listeners.forEach((listener) => listener());
}

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangGlobal(next);
  }, []);

  const toggle = useCallback(() => {
    setLangGlobal(currentLang === "en" ? "sr" : "en");
  }, []);

  const value = useMemo(() => ({ lang, setLang, toggle }), [lang, setLang, toggle]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function useT(): Translations {
  const { lang } = useLanguage();
  return translations[lang];
}
