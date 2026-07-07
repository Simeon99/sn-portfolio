"use client";

import { useEffect, useRef, useState } from "react";
import { MenuOverlay } from "@/components/menu-overlay";
import { projects } from "@/data/projects";

const PARALLAX_PX = 60;

const navLinks = [
  { label: "About", href: "#" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Content & Video Production",
  "Web Development",
  "Social Media Marketing",
  "Ongoing Support",
];

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let ticking = false;

    function update() {
      const progress = Math.min(
        Math.max(window.scrollY / section!.offsetHeight, 0),
        1,
      );
      content!.style.transform = `translateY(-${progress * PARALLAX_PX}px)`;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Bounds how long the sticky hero can stay pinned — without this,
    // its containing block is <main> (the whole page), so it remains an
    // active sticky layer for the entire scroll, which is what caused it
    // to flicker back into view over unrelated sections on iOS Safari.
    // The negative margin cancels the extra height so Stats still starts
    // immediately after the hero (same reveal timing as before) instead
    // of leaving a dead gap before it arrives.
    <div className="relative h-[200vh] -mb-[100vh]">
      <section
        ref={sectionRef}
        style={{ transform: "translateZ(0)", WebkitTransform: "translateZ(0)" }}
        className="sticky top-0 isolate z-0 flex h-screen w-full flex-col overflow-hidden bg-neutral-950 text-white will-change-transform"
      >
        {/* Placeholder duotone background — swap for a real photo later */}
        <div
          className="absolute inset-0 -z-20"
          style={{
            background:
              "radial-gradient(at 15% 15%, #4b3fae 0%, transparent 55%), radial-gradient(at 85% 10%, #3a6fb0 0%, transparent 50%), radial-gradient(at 60% 55%, #b3502f 0%, transparent 55%), radial-gradient(at 30% 85%, #2a3f8f 0%, transparent 55%), #100a24",
          }}
        />
        <div className="bg-grain absolute inset-0 -z-10 opacity-20 mix-blend-overlay" />

        {/* Nav */}
        <header className="relative z-10 flex items-center justify-between px-6 pt-6 sm:px-10">
          <span className="text-lg font-bold tracking-tight">
            S&N<sup className="text-xs">®</sup>
          </span>

          <nav className="hidden items-center gap-10 text-sm font-semibold tracking-wide uppercase md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-cyan-200">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="/projects"
              className="hidden font-mono text-xl text-cyan-300 transition-colors hover:text-cyan-200 sm:inline"
            >
              ({projects.length})
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 text-sm font-bold tracking-wide uppercase transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
            >
              <span className="flex flex-col gap-1">
                <span className="block h-0.5 w-6 bg-white" />
                <span className="block h-0.5 w-6 bg-white" />
              </span>
              Menu
            </button>
          </div>
        </header>

        <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />

        <div ref={contentRef} className="flex flex-1 flex-col">
          {/* Copyright */}
          <div className="relative z-10 mt-16 flex items-center gap-2 px-6 text-sm font-bold sm:px-10">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white">
              ©
            </span>
            19-24
          </div>

          {/* Headline */}
          <div className="relative z-10 mt-4 flex flex-1 flex-col justify-end px-6 pb-16 sm:px-10">
            <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
              <h1 className="font-sans text-[clamp(3rem,11vw,10rem)] leading-[1.4] font-bold tracking-[-0.06em]">
                <span className="bg-gradient-to-r from-amber-300 via-amber-100 to-cyan-200 bg-[length:106%_100%] bg-clip-text block text-transparent">
                  Digital
                </span>
                <span className="-mt-[0.5em] block">
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-orange-400 bg-[length:106%_100%] bg-clip-text text-transparent">
                    Agency
                  </span>{" "}
                  <span className="bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-100 bg-[length:106%_100%] bg-clip-text text-transparent">
                    Studio
                  </span>
                </span>
              </h1>

              <ul className="flex shrink-0 flex-col gap-1 self-start pt-6 text-sm font-semibold sm:text-base lg:pt-10">
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>

            <p className="mt-10 max-w-sm text-base leading-relaxed text-white/80">
              We handle video, social, and web - all under one roof. Your
              brand doesn&apos;t need five different vendors. It needs one
              team that gets it done.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
