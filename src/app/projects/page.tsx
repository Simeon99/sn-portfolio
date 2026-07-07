"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { projects, projectCategories } from "@/data/projects";

const filters = ["All", ...projectCategories];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const gridRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

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
    filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <>
      <main className="flex-1 bg-white text-neutral-950">
        <header className="flex items-center justify-between px-6 py-6 sm:px-10">
          <Link href="/" className="text-lg font-bold tracking-tight">
            S&N<sup className="text-xs">®</sup>
          </Link>

          <nav className="hidden items-center gap-10 text-sm font-semibold tracking-wide uppercase md:flex">
            <Link href="/" className="transition-colors duration-200 ease-out hover:text-[#d8472b]">
              Home
            </Link>
            <span aria-current="page" className="text-neutral-950">
              Projects
            </span>
            <Link href="/#pricing" className="transition-colors duration-200 ease-out hover:text-[#d8472b]">
              Pricing
            </Link>
            <Link href="/#contact" className="transition-colors duration-200 ease-out hover:text-[#d8472b]">
              Contact
            </Link>
          </nav>

          <Link
            href="/#contact"
            className="text-sm font-bold tracking-wide uppercase transition-colors duration-200 ease-out hover:text-[#d8472b]"
          >
            Get in touch
          </Link>
        </header>

        <section className="px-6 pt-10 pb-24 sm:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <h1 className="font-sans text-[clamp(2.5rem,7vw,80px)] leading-[0.96] font-semibold tracking-[-0.05em] text-[#0b0b0c]">
              Projects
            </h1>
            <p className="max-w-sm text-neutral-500 sm:pt-4">
              Every project we deliver is a reflection of our commitment to
              quality, designed to inspire and drive real results.
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
