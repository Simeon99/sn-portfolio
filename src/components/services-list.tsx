"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Placeholder photo — swap each entry's image with your own asset per service
const PLACEHOLDER_IMAGE_1 = "/images/b9b8e20333da0c5ec8cb95715c7fcc79.jpg";
const PLACEHOLDER_IMAGE_2 = "/images/ffbddd37b2ceffe750fc534bfa11429d.jpg";
const PLACEHOLDER_IMAGE_3 = "/images/f480716d003bf3ac83cc3571beb1bcf4.jpg";
const PLACEHOLDER_IMAGE_4 = "/images/5c351ae15cc42d7d58525f48faa0e9a9.jpg";

const services = [
  {
    label: "Video & Photo",
    description:
      "We produce cinematic video and photo content that captures attention and tells your brand's story.",
    image: PLACEHOLDER_IMAGE_1,
  },
  {
    label: "Social & Ads",
    description:
      "We plan, create, and run social content and ad campaigns that turn scrolls into results.",
    image: PLACEHOLDER_IMAGE_4,
  },
  {
    label: "Websites",
    description:
      "We design and build fast, modern websites that convert visitors into customers.",
    image: PLACEHOLDER_IMAGE_2,
  },
  {
    label: "Design & Copy",
    description:
      "We craft visual design and copy that make your brand impossible to ignore.",
    image: PLACEHOLDER_IMAGE_3,
  },
];

export function ServicesList() {
  const [active, setActive] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
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
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative z-10 bg-neutral-950 px-6 py-24 text-white sm:px-10">
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold tracking-tight">
          S&N<sup className="text-xs">®</sup>
        </span>
        <span className="flex items-center gap-2 text-sm font-semibold tracking-wide text-neutral-300 uppercase">
          <span aria-hidden="true" className="text-[#d8472b]">
            ⌐
          </span>
          Services
        </span>
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-[230px_1fr] lg:gap-16">
        {/* Preview panel — swaps with a small fade on hover */}
        <div key={active} className="animate-fade-in-up">
          <div className="relative aspect-square w-full max-w-[230px] overflow-hidden rounded-lg">
            <Image
              src={services[active].image}
              alt={services[active].label}
              fill
              sizes="230px"
              className="object-cover"
            />
          </div>
          <div className="mt-6 text-sm font-semibold text-neutral-400">
            {services[active].label}
          </div>
          <p className="mt-3 max-w-[230px] text-lg text-white">
            {services[active].description}
          </p>
        </div>

        {/* List */}
        <div ref={listRef}>
          {services.map((service, i) => (
            <button
              key={service.label}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              style={{
                transitionDelay: hasEntered ? `${i * 120}ms` : "0ms",
              }}
              className={`group flex w-full items-center justify-between border-b border-neutral-800 py-6 text-left transition-all duration-700 ease-out sm:py-8 ${hasEntered
                ? "translate-x-0 opacity-100"
                : "translate-x-16 opacity-0"
                }`}
            >
              <span
                className={`text-4xl font-medium tracking-[-0.07em] leading-[1.1] transition-all duration-300 group-hover:translate-x-2 sm:text-[102px] ${i === active ? "text-white" : "text-neutral-800"
                  }`}
              >
                {service.label}
              </span>
              <span
                className={`text-sm font-semibold transition-colors duration-300 ${i === active ? "text-[#d8472b]" : "text-neutral-700"
                  }`}
              >
                {`{ 0${i + 1} }`}
              </span>
            </button>
          ))}

          <a
            href="#pricing"
            className="group mt-16 inline-flex items-center gap-2 font-semibold text-[#d8472b] transition-[color,transform] duration-200 ease-out hover:text-[#c23f26] active:scale-95"
          >
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1"
            >
              ↳
            </span>{" "}
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}
