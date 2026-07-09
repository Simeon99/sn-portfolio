"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/footer";
import { MenuOverlay } from "@/components/menu-overlay";
import { LanguageToggle } from "@/components/language-toggle";
import { ProjectCard } from "@/components/project-card";
import { getProjects, getProjectCategories } from "@/data/projects";
import { useT, useLanguage } from "@/lib/language-context";

export default function ProjectsPage() {
  const { lang } = useLanguage();
  return <ProjectsPageContent key={lang} />;
}

function ProjectsPageContent() {
  const t = useT();
  const { lang } = useLanguage();
  const projects = getProjects(lang);
  const filters = [t.projectsPage.allFilter, ...getProjectCategories(lang)];
  const [filter, setFilter] = useState(t.projectsPage.allFilter);
  const gridRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filtered =
    filter === t.projectsPage.allFilter
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  return (
    <>
      <main className="flex-1 bg-white text-neutral-950">
        <div className="relative">
          <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10">
            <Link href="/" className="text-lg font-bold tracking-tight">
              S&N<sup className="text-xs">®</sup>
            </Link>

            <nav className="hidden items-center gap-10 text-sm font-semibold tracking-wide uppercase md:flex">
              <Link href="/" className="transition-colors duration-200 ease-out hover:text-[#d8472b]">
                {t.nav.home}
              </Link>
              <Link href="/about" className="transition-colors duration-200 ease-out hover:text-[#d8472b]">
                {t.nav.about}
              </Link>
              <span aria-current="page" className="text-neutral-950">
                {t.nav.projects}
              </span>
              <Link href="/#pricing" scroll={false} className="transition-colors duration-200 ease-out hover:text-[#d8472b]">
                {t.nav.pricing}
              </Link>
              <Link href="/#contact" scroll={false} className="transition-colors duration-200 ease-out hover:text-[#d8472b]">
                {t.nav.contact}
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <LanguageToggle />
              <button
                onClick={() => setMenuOpen(true)}
                className="flex items-center gap-2 text-sm font-bold tracking-wide uppercase transition-transform duration-200 ease-out hover:scale-105 active:scale-95 md:hidden"
              >
                <span className="flex flex-col gap-1">
                  <span className="block h-0.5 w-6 bg-neutral-950" />
                  <span className="block h-0.5 w-6 bg-neutral-950" />
                </span>
              </button>
            </div>
          </header>

          <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
        </div>

        <section className="px-6 pt-10 pb-24 sm:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <h1 className="font-sans text-[clamp(2.5rem,7vw,80px)] leading-[0.96] font-semibold tracking-[-0.05em] text-[#0b0b0c]">
              {t.projectsPage.heading}
            </h1>
            <p className="max-w-sm text-neutral-500 sm:pt-4">
              {t.projectsPage.description}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 border-b border-neutral-200 pb-4 text-sm font-semibold">
            {filters.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`transition-colors duration-200 ease-out active:scale-95 ${
                  filter === cat
                    ? "text-neutral-950"
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div
            key={filter}
            ref={gridRef}
            className="animate-fade-in-up mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2"
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={`${project.title}-${i}`}
                project={project}
                hasEntered={hasEntered}
                delay={i * 80}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
