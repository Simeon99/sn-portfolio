"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/language-context";

// Placeholder photo — swap each entry's image with your own asset per service
const PLACEHOLDER_IMAGE_1 = "/images/b9b8e20333da0c5ec8cb95715c7fcc79.jpg";
const PLACEHOLDER_IMAGE_2 = "/images/ffbddd37b2ceffe750fc534bfa11429d.jpg";
const PLACEHOLDER_IMAGE_3 = "/images/f480716d003bf3ac83cc3571beb1bcf4.jpg";
const PLACEHOLDER_IMAGE_4 = "/images/5c351ae15cc42d7d58525f48faa0e9a9.jpg";

const serviceImages = [
  PLACEHOLDER_IMAGE_4,
  PLACEHOLDER_IMAGE_2,
  PLACEHOLDER_IMAGE_1,
  PLACEHOLDER_IMAGE_3,
];

export function ServicesList() {
  const t = useT();
  const services = t.servicesList.items.map((item, i) => ({
    ...item,
    image: serviceImages[i],
  }));
  const [active, setActive] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  // Below lg the preview sits inline in the list, so selecting a service
  // reflows the items underneath a stationary pointer — which would fire more
  // mouseenter events and cascade the selection down the list. There, only an
  // explicit tap selects.
  const selectOnHover = (i: number) => {
    if (window.matchMedia("(min-width: 1024px)").matches) setActive(i);
  };

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
    <section id="services" className="relative z-10 overflow-x-hidden bg-neutral-950 px-6 py-24 text-white sm:px-10">
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold tracking-tight">
          S&N<sup className="text-xs">®</sup>
        </span>
        <span className="flex items-center gap-2 text-sm font-semibold tracking-wide text-neutral-300 uppercase">
          <span aria-hidden="true" className="text-[#d8472b]">
            ⌐
          </span>
          {t.servicesList.kicker}
        </span>
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-[230px_1fr] lg:gap-16">
        {/* Preview panel — swaps with a small fade on hover. Below lg the
            preview is rendered inline above the active service instead, so it
            stays in view when a service further down the list is selected. */}
        <div key={active} className="animate-fade-in-up hidden lg:block">
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
            <div key={service.label}>
              {i === active && (
                <div className="animate-service-preview grid grid-rows-[1fr] lg:hidden">
                  <div className="min-h-0 overflow-hidden">
                    <div className="flex items-center gap-5 pt-6 pb-2">
                      <div className="relative size-28 shrink-0 overflow-hidden rounded-lg sm:size-32">
                        <Image
                          src={service.image}
                          alt={service.label}
                          fill
                          sizes="(min-width: 640px) 128px, 112px"
                          className="object-cover"
                        />
                      </div>
                      <p className="text-base leading-snug text-neutral-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => selectOnHover(i)}
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
                  className={`min-w-0 shrink text-[clamp(2.25rem,6.5vw,102px)] font-medium tracking-[-0.07em] leading-[1.1] transition-all duration-300 group-hover:translate-x-2 ${i === active ? "text-white" : "text-neutral-800"
                    }`}
                >
                  {service.label}
                </span>
                <span className={`shrink-0 text-sm font-semibold transition-colors duration-300 ${i === active ? "" : "text-neutral-700"}`}>
                  {i === active ? (
                    <>
                      <span className="text-[#d8472b]">{"{ "}</span>
                      <span className="text-white">{`0${i + 1}`}</span>
                      <span className="text-[#d8472b]">{" }"}</span>
                    </>
                  ) : (
                    `{ 0${i + 1} }`
                  )}
                </span>
              </button>
            </div>
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
            {t.servicesList.seePricing}
          </a>
        </div>
      </div>
    </section>
  );
}
