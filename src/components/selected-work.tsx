"use client";

import { useEffect, useRef, useState } from "react";
import { projects, type Project } from "@/data/projects";
import { ProjectCard, reveal } from "@/components/project-card";

function ProjectRow({
  lg,
  sm,
  hasEntered,
  delay,
}: {
  lg: Project;
  sm: Project;
  hasEntered: boolean;
  delay: number;
}) {
  return (
    <div className="grid items-start gap-x-10 gap-y-16 sm:grid-cols-[1.7fr_1fr] sm:gap-x-16">
      <ProjectCard project={lg} hasEntered={hasEntered} delay={delay} />
      <ProjectCard project={sm} hasEntered={hasEntered} delay={delay + 120} />
    </div>
  );
}

export function SelectedWork() {
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

  return (
    <section className="relative z-10 bg-white">
      {/* Pinned title — sits behind the cards (lower z-index), so it's
          gradually covered as the grid scrolls up over it. Forced onto
          its own GPU layer (translateZ) because iOS Safari can lag a
          frame behind on fast/flick scrolls and briefly paint sticky
          elements above content that should be covering them. */}
      <div
        style={{ transform: "translateZ(0)", WebkitTransform: "translateZ(0)" }}
        className="sticky top-0 z-0 flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 py-24 text-center will-change-transform"
      >
        <span className="flex items-center gap-2 text-sm font-semibold tracking-wide text-neutral-500 uppercase">
          <span aria-hidden="true" className="text-[#d8472b]">
            ⌐
          </span>
          Selected work
        </span>
        <h2 className="font-sans text-[clamp(2.5rem,7vw,112px)] leading-[0.96] font-semibold tracking-[-0.07em] text-[#0b0b0c]">
          Proven results,
          <br />
          stunning designs
        </h2>
        <span className="text-lg font-bold tracking-tight text-neutral-300">
          2K25
        </span>
      </div>

      <div
        ref={gridRef}
        style={{ transform: "translateZ(0)", WebkitTransform: "translateZ(0)" }}
        className="relative z-10 will-change-transform"
      >
        {/* Soft fade mask — lets the pinned title dissolve into white
            before any card edge reaches it, instead of being cut off
            by a hard line. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-linear-to-b from-transparent to-white sm:h-96"
        />
        {/* Real spacer (not margin) so it can't collapse into the
            parent — the gradient above needs genuine empty space to
            dissolve across before any card is behind it. */}
        <div className="h-72 sm:h-96" />

        <div className="mx-auto max-w-7xl bg-white px-6 pb-24 sm:px-10">
          <ProjectRow lg={projects[0]} sm={projects[1]} hasEntered={hasEntered} delay={0} />

          <div className="mx-auto mt-16 max-w-2xl sm:mt-24">
            <ProjectCard project={projects[2]} hasEntered={hasEntered} delay={240} />
          </div>

          <div className="mt-16 sm:mt-24">
            <ProjectRow lg={projects[3]} sm={projects[4]} hasEntered={hasEntered} delay={360} />
          </div>

          <div
            style={reveal(hasEntered, 480).style}
            className={`mt-16 flex justify-end sm:mt-20 ${reveal(hasEntered, 480).className}`}
          >
            <a
              href="/projects"
              className="group inline-flex items-center gap-2 text-lg font-semibold text-neutral-950 transition-colors duration-200 ease-out hover:text-[#d8472b]"
            >
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1"
              >
                →
              </span>
              All cases
              <sup className="text-xs font-bold text-[#d8472b]">({projects.length})</sup>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
