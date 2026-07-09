"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";

export function reveal(hasEntered: boolean, delay: number) {
  return {
    style: { transitionDelay: hasEntered ? `${delay}ms` : "0ms" },
    className: `transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
      hasEntered
        ? "translate-y-0 opacity-100"
        : "translate-y-10 opacity-0 motion-reduce:translate-y-0"
    }`,
  };
}

export function ProjectCard({
  project,
  hasEntered,
  delay,
}: {
  project: Project;
  hasEntered: boolean;
  delay: number;
}) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
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
