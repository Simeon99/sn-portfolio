"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/footer";
import { MenuOverlay } from "@/components/menu-overlay";
import { reveal } from "@/components/project-card";

const team = [
  {
    name: "Simeon",
    role: "Co-founder, Software Engineer",
    initials: "SI",
    image: "/images/simeon.jpeg",
    gradient:
      "radial-gradient(at 20% 20%, #4b3fae 0%, transparent 55%), radial-gradient(at 80% 80%, #3a6fb0 0%, transparent 55%), #100a24",
  },
  {
    name: "Nevena",
    role: "Co-founder, Marketing Manager",
    initials: "NE",
    image: "/images/slika portfolio n.png",
    gradient:
      "radial-gradient(at 80% 20%, #b3502f 0%, transparent 55%), radial-gradient(at 20% 80%, #2a3f8f 0%, transparent 55%), #100a24",
  },
];

export default function AboutPage() {
  const [hasEntered, setHasEntered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = introRef.current;
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
    <>
      <main className="flex-1 bg-white text-neutral-950">
        <div className="relative">
          <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10">
            <Link href="/" className="text-lg font-bold tracking-tight">
              S&N<sup className="text-xs">®</sup>
            </Link>

            <nav className="hidden items-center gap-10 text-sm font-semibold tracking-wide uppercase md:flex">
              <Link href="/" className="transition-colors duration-200 ease-out hover:text-[#d8472b]">
                Home
              </Link>
              <span aria-current="page" className="text-neutral-950">
                About
              </span>
              <Link href="/projects" className="transition-colors duration-200 ease-out hover:text-[#d8472b]">
                Projects
              </Link>
              <Link href="/#contact" scroll={false} className="transition-colors duration-200 ease-out hover:text-[#d8472b]">
                Contact
              </Link>
            </nav>

            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 text-sm font-bold tracking-wide uppercase transition-transform duration-200 ease-out hover:scale-105 active:scale-95 md:hidden"
            >
              <span className="flex flex-col gap-1">
                <span className="block h-0.5 w-6 bg-neutral-950" />
                <span className="block h-0.5 w-6 bg-neutral-950" />
              </span>
            </button>
          </header>

          <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
        </div>

        <section className="px-6 pt-10 pb-16 sm:px-10">
          <h1 className="font-sans text-[clamp(3rem,9vw,140px)] leading-[0.9] font-semibold tracking-[-0.05em] text-[#0b0b0c]">
            About us
          </h1>
        </section>

        <div ref={introRef}>
          <section className="grid gap-10 px-6 pb-24 sm:px-10 lg:grid-cols-[1fr_1fr_1.6fr] lg:gap-16">
            <div
              style={reveal(hasEntered, 0).style}
              className={reveal(hasEntered, 0).className}
            >
              <span className="text-sm font-semibold tracking-wide text-neutral-500 uppercase">
                Meet the team
              </span>
            </div>

            <div
              style={reveal(hasEntered, 80).style}
              className={`flex flex-col gap-6 ${reveal(hasEntered, 80).className}`}
            >
              <p className="text-sm text-neutral-500">
                Two graduates, two very different degrees, one shared
                instinct: most agencies overcomplicate a simple problem.
              </p>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full"
                >
                  <Image
                    src={team[0].image}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </span>
                <div>
                  <p className="text-sm font-bold text-neutral-950">Simeon</p>
                  <p className="text-xs text-neutral-500">Software Engineer</p>
                </div>
              </div>
            </div>

            <div
              style={reveal(hasEntered, 160).style}
              className={reveal(hasEntered, 160).className}
            >
              <p className="text-xl leading-relaxed text-neutral-950 sm:text-2xl">
                We don&apos;t believe in overcomplicating things, using the
                tools and strategies that make the most sense for your goals.
                If custom code is needed, we write it. If something works out
                of the box, we won&apos;t reinvent it.
              </p>
              <p className="mt-6 text-neutral-500">
                We approach each project with the same questions: what does
                this need to do, who will use it, and how can we make it as
                simple and effective as possible?
              </p>
            </div>
          </section>

          <section className="px-6 pb-24 sm:px-10">
            <div className="grid gap-6 sm:grid-cols-3">
              <div
                style={reveal(hasEntered, 0).style}
                className={`flex flex-col justify-between rounded-2xl border border-neutral-200 p-8 ${reveal(hasEntered, 0).className}`}
              >
                <span className="flex items-center gap-1 text-sm font-bold tracking-tight">
                  S&N<sup className="text-xs">®</sup>
                  <span aria-hidden="true" className="ml-auto text-[#d8472b]">
                    ⌐
                  </span>
                </span>

                <div className="mt-16">
                  <h3 className="text-2xl font-bold tracking-tight text-neutral-950">
                    Join us
                  </h3>
                  <p className="mt-3 text-sm text-neutral-500">
                    If you&apos;re ready to grow your brand with us, your
                    journey could start here.
                  </p>
                </div>

                <Link
                  href="/#contact"
                  scroll={false}
                  className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition-colors duration-200 ease-out hover:text-[#d8472b]"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1"
                  >
                    →
                  </span>
                  Let&apos;s talk
                </Link>
              </div>

              {team.map((member, i) => (
                <div
                  key={member.name}
                  style={reveal(hasEntered, 120 + i * 100).style}
                  className={reveal(hasEntered, 120 + i * 100).className}
                >
                  <div
                    className="relative aspect-[3/4] overflow-hidden rounded-2xl"
                    style={{ background: member.gradient }}
                  >
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(min-width: 1024px) 30vw, 90vw"
                        className="object-cover"
                      />
                    ) : (
                      <>
                        <div className="bg-grain absolute inset-0 opacity-20 mix-blend-overlay" />
                        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-4xl font-bold text-white/90">
                          {member.initials}
                        </span>
                      </>
                    )}
                  </div>
                  <p className="mt-6 text-sm font-bold text-neutral-950">
                    {member.name}
                  </p>
                  <p className="text-xs text-neutral-500">{member.role}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-10 px-6 pb-24 sm:px-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <span
              style={reveal(hasEntered, 0).style}
              className={`text-sm font-semibold tracking-wide text-neutral-500 uppercase ${reveal(hasEntered, 0).className}`}
            >
              Approach
            </span>

            <div
              style={reveal(hasEntered, 80).style}
              className={`flex flex-col gap-6 ${reveal(hasEntered, 80).className}`}
            >
              <p className="text-xl leading-relaxed text-neutral-950 sm:text-2xl">
                S&amp;N started with two young, talented people who&apos;d
                already proven their skills in practice — one with a degree
                in Software Engineering, the other with a Master&apos;s in
                Marketing Management. Instead of going separate ways, into
                separate companies, they built one studio where both
                disciplines sit at the same table.
              </p>
              <p className="text-neutral-500">
                That&apos;s still how we work today. Every site we ship is
                held to a developer&apos;s standard for what &quot;done&quot;
                means, and every campaign is held to a marketer&apos;s
                standard for what &quot;working&quot; means. Nothing gets lost
                in translation between departments, because there aren&apos;t
                any — just two people who studied this for years, and now do
                it for you.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
