"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/footer";
import { MenuOverlay } from "@/components/menu-overlay";
import { LanguageToggle } from "@/components/language-toggle";
import { Logo } from "@/components/logo";
import { reveal } from "@/components/project-card";
import { useT } from "@/lib/language-context";
import { BOOKING_URL } from "@/lib/site-config";
import { useReveal } from "@/lib/use-reveal";

const teamMeta = [
  {
    initials: "SI",
    image: "/images/simeon.jpeg",
    gradient:
      "radial-gradient(at 20% 20%, #4b3fae 0%, transparent 55%), radial-gradient(at 80% 80%, #3a6fb0 0%, transparent 55%), #100a24",
  },
  {
    initials: "NE",
    image: "/images/slika portfolio n.png",
    gradient:
      "radial-gradient(at 80% 20%, #b3502f 0%, transparent 55%), radial-gradient(at 20% 80%, #2a3f8f 0%, transparent 55%), #100a24",
  },
  {
    initials: "MI",
    image: "/images/1686827059536.jpg",
    gradient:
      "radial-gradient(at 20% 80%, #7a2f8f 0%, transparent 55%), radial-gradient(at 80% 20%, #2f6f8f 0%, transparent 55%), #100a24",
  },
];

export default function AboutPage() {
  const t = useT();
  const team = t.aboutPage.team.map((member, i) => ({
    ...member,
    ...teamMeta[i],
  }));
  const [menuOpen, setMenuOpen] = useState(false);
  const { ref: introRef, hasEntered } = useReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <>
      <main className="flex-1 bg-white text-neutral-950">
        <div className="relative">
          <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10">
            <Link href="/">
              <Logo tone="light" className="h-5 w-auto" />
            </Link>

            <nav className="hidden items-center gap-10 text-sm font-semibold tracking-wide uppercase md:flex">
              <Link href="/" className="transition-colors duration-200 ease-out hover:text-[#d8472b]">
                {t.nav.home}
              </Link>
              <span aria-current="page" className="text-neutral-950">
                {t.nav.about}
              </span>
              <Link href="/projects" className="transition-colors duration-200 ease-out hover:text-[#d8472b]">
                {t.nav.projects}
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

        <section className="px-6 pt-10 pb-16 sm:px-10">
          <h1 className="font-sans text-[clamp(3rem,9vw,140px)] leading-[0.9] font-semibold tracking-[-0.05em] text-[#0b0b0c]">
            {t.aboutPage.heading}
          </h1>
        </section>

        <div ref={introRef}>
          <section className="grid gap-10 px-6 pb-24 sm:px-10 lg:grid-cols-[1fr_1fr_1.6fr] lg:gap-16">
            <div
              style={reveal(hasEntered, 0).style}
              className={reveal(hasEntered, 0).className}
            >
              <span className="text-sm font-semibold tracking-wide text-neutral-500 uppercase">
                {t.aboutPage.meetTheTeam}
              </span>
            </div>

            <div
              style={reveal(hasEntered, 80).style}
              className={`flex flex-col gap-6 ${reveal(hasEntered, 80).className}`}
            >
              <p className="text-sm text-neutral-500">
                {t.aboutPage.introSmall}
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
                  <p className="text-sm font-bold text-neutral-950">{team[0].name}</p>
                  <p className="text-xs text-neutral-500">{t.aboutPage.founderRole}</p>
                </div>
              </div>
            </div>

            <div
              style={reveal(hasEntered, 160).style}
              className={reveal(hasEntered, 160).className}
            >
              <p className="text-xl leading-relaxed text-neutral-950 sm:text-2xl">
                {t.aboutPage.introLarge}
              </p>
              <p className="mt-6 text-neutral-500">
                {t.aboutPage.introLargeSecondary}
              </p>
            </div>
          </section>

          <section className="px-6 pb-24 sm:px-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div
                style={reveal(hasEntered, 0).style}
                className={`flex flex-col justify-between rounded-2xl border border-neutral-200 p-8 ${reveal(hasEntered, 0).className}`}
              >
                <span className="flex items-center gap-1">
                  <Logo tone="light" className="h-4 w-auto" />
                  <span aria-hidden="true" className="ml-auto text-[#d8472b]">
                    ⌐
                  </span>
                </span>

                <div className="mt-16">
                  <h3 className="text-2xl font-bold tracking-tight text-neutral-950">
                    {t.aboutPage.joinUs}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-500">
                    {t.aboutPage.joinUsDescription}
                  </p>
                </div>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition-colors duration-200 ease-out hover:text-[#d8472b]"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1"
                  >
                    →
                  </span>
                  {t.aboutPage.letsTalk}
                </a>
              </div>

              {team.map((member, i) => (
                <div
                  key={member.name}
                  style={reveal(hasEntered, 120 + i * 100).style}
                  className={reveal(hasEntered, 120 + i * 100).className}
                >
                  <div
                    className="relative aspect-[3/5] overflow-hidden rounded-2xl"
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
              {t.aboutPage.approach}
            </span>

            <div
              style={reveal(hasEntered, 80).style}
              className={`flex flex-col gap-6 ${reveal(hasEntered, 80).className}`}
            >
              <p className="text-xl leading-relaxed text-neutral-950 sm:text-2xl">
                {t.aboutPage.approachLarge}
              </p>
              <p className="text-neutral-500">
                {t.aboutPage.approachSecondary}
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
