"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const PLACEHOLDER_IMAGE_1 = "/images/duo-iphone-17-pro-silver-mockup.jpg";
const PLACEHOLDER_IMAGE_2 = "/images/studio-display-xdr-mockup-floating.jpg";
const PLACEHOLDER_IMAGE_3 = "/images/iphone 17 Pro.png";
const PLACEHOLDER_IMAGE_4 = "/images/maneken-PS93.jpg";

const projects = [
  {
    title: "Smokvica",
    description:
      "Social media management and ad campaigns for this beloved restaurant in Belgrade.",
    tags: ["Social Media", "Ads"],
    image: PLACEHOLDER_IMAGE_1,
    size: "sm" as const,
  },
  {
    title: "Mista Osteria",
    description:
      "A new website and social media presence for this osteria, built to fill tables and grow its following.",
    tags: ["Web Design", "Development", "Social Media", "Ads"],
    image: PLACEHOLDER_IMAGE_4,
    size: "sm" as const,
  },
  {
    title: "Euro Duo Kalem",
    description:
      "A modern, multilingual website and digital presence built to showcase premium fruit seedlings and connect with buyers worldwide.",
    tags: ["Web Design", "Development", "Social Media", "Paid Ads"],
    image: PLACEHOLDER_IMAGE_2,
    size: "lg" as const,
  },

  {
    title: "Naše Vino social media",
    description:
      "Instagram strategy, content and paid campaigns built to grow the brand and reach more wine lovers.",
    tags: ["Social Media", "Content", "Paid Ads"],
    image: PLACEHOLDER_IMAGE_3,
    size: "lg" as const,
  },

  {
    title: "Smokvica",
    description:
      "Social media management and ad campaigns for this beloved restaurant in Belgrade.",
    tags: ["Social Media", "Ads"],
    image: PLACEHOLDER_IMAGE_1,
    size: "sm" as const,
  },
];

function reveal(hasEntered: boolean, delay: number) {
  return {
    style: { transitionDelay: hasEntered ? `${delay}ms` : "0ms" },
    className: `transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${hasEntered
      ? "translate-y-0 opacity-100"
      : "translate-y-10 opacity-0 motion-reduce:translate-y-0"
      }`,
  };
}

function ProjectCard({
  project,
  hasEntered,
  delay,
}: {
  project: (typeof projects)[number];
  hasEntered: boolean;
  delay: number;
}) {
  return (
    <a
      href="#"
      style={reveal(hasEntered, delay).style}
      className={`group block ${reveal(hasEntered, delay).className}`}
    >
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
        />
        <span
          aria-hidden="true"
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#d8472b] opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
        >
          ↗
        </span>
      </div>
      <h3 className="mt-6 text-lg font-bold text-neutral-950 transition-colors duration-200 ease-out group-hover:text-[#d8472b]">
        {project.title}
      </h3>
      <p className="mt-2 max-w-sm text-sm text-neutral-500">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-semibold tracking-wide text-neutral-600 uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

function ProjectRow({
  lg,
  sm,
  hasEntered,
  delay,
}: {
  lg: (typeof projects)[number];
  sm: (typeof projects)[number];
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
          gradually covered as the grid scrolls up over it. */}
      <div className="sticky top-0 z-0 flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 py-24 text-center">
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

      <div ref={gridRef} className="relative z-10">
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
              href="#"
              className="group inline-flex items-center gap-2 text-lg font-semibold text-neutral-950 transition-colors duration-200 ease-out hover:text-[#d8472b]"
            >
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1"
              >
                →
              </span>
              All cases
              <sup className="text-xs font-bold text-[#d8472b]">(17)</sup>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
