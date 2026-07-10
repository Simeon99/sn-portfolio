import type { Lang } from "@/lib/language-context";

const PLACEHOLDER_IMAGE_1 = "/images/duo-iphone-17-pro-silver-mockup.jpg";
const PLACEHOLDER_IMAGE_2 = "/images/studio-display-xdr-mockup-floating.jpg";
const PLACEHOLDER_IMAGE_3 = "/images/7_8_2026_15_6_7_contentcore.xyz.png";
const PLACEHOLDER_IMAGE_4 = "/images/7_8_2026_14_59_39_contentcore.xyz.png";
const PLACEHOLDER_IMAGE_5 = "/images/go2 img.jpg";
const PLACEHOLDER_IMAGE_6 = "/images/prostore.png";
const PLACEHOLDER_IMAGE_7 = "/images/content.png";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  size: "lg" | "sm";
  link: string;
};

const projectsByLang: Record<Lang, Project[]> = {
  en: [
    {
      title: "Smokvica",
      description:
        "Social media management, content production, and ad campaigns for one of Belgrade’s most beloved restaurants.",
      tags: ["Social Media", "Photo & Video", "Ads"],
      image: PLACEHOLDER_IMAGE_1,
      size: "sm",
      link: "https://www.instagram.com/smokvicabelgrade/?hl=en",
    },
    {
      title: "Mista Osteria",
      description:
        "A new website and digital presence built to fill tables, grow its audience, and bring the brand to life online.",
      tags: ["Web Design", "Development", "Social Media", "Photo & Video", "Ads"],
      image: PLACEHOLDER_IMAGE_4,
      size: "sm",
      link: "https://www.instagram.com/mistaosteria/?hl=en",
    },
    {
      title: "Euro Duo Kalem",
      description:
        "A modern multilingual website and digital presence built to showcase premium fruit seedlings and connect with buyers worldwide.",
      tags: ["Web Design", "Development", "Social Media", "Ads"],
      image: PLACEHOLDER_IMAGE_2,
      size: "lg",
      link: "https://www.euroduokalem.com/en",
    },
    {
      title: "Go2 Traveling",
      description:
        "Social media strategy, content management, and ad campaigns created to inspire travel and grow the agency’s digital presence.",
      tags: ["Social Media", "Ads"],
      image: PLACEHOLDER_IMAGE_5,
      size: "sm",
      link: "https://www.instagram.com/go2travelling/?hl=en",
    },
    {
      title: "Naše Vino",
      description:
        "Social media strategy, content production, and paid campaigns created to grow the brand and reach more wine lovers.",
      tags: ["Social Media", "Photo & Video", "Ads"],
      image: PLACEHOLDER_IMAGE_3,
      size: "lg",
      link: "https://www.instagram.com/nasevino/?hl=en",
    },
    {
      title: "Prostore",
      description:
        "A self storage website built for effortless online reservations — a safe, comfortable place for your belongings, accessible anytime.",
      tags: ["Web Design", "Development"],
      image: PLACEHOLDER_IMAGE_6,
      size: "sm",
      link: "https://prostor.rs/sr",
    },
    {
      title: "Blackbird",
      description:
        "A website for an AI integration studio that deploys AI fitting how companies already work — no rip-and-replace, real results, fast.",
      tags: ["Web Design", "Development"],
      image: PLACEHOLDER_IMAGE_7,
      size: "sm",
      link: "https://blackbird.rs/",
    },
  ],
  sr: [
    {
      title: "Smokvica",
      description:
        "Vođenje društvenih mreža, produkcija sadržaja i oglasne kampanje za jedan od omiljenih restorana u Beogradu.",
      tags: ["Društvene mreže", "Foto i video", "Oglašavanje"],
      image: PLACEHOLDER_IMAGE_1,
      size: "sm",
      link: "https://www.instagram.com/smokvicabelgrade/?hl=en",
    },
    {
      title: "Mista Osteria",
      description:
        "Nov sajt i digitalno prisustvo napravljeni da popune stolove, prošire publiku i ožive brend na internetu.",
      tags: ["Dizajn sajta", "Razvoj", "Društvene mreže", "Foto i video", "Oglašavanje"],
      image: PLACEHOLDER_IMAGE_4,
      size: "sm",
      link: "https://www.instagram.com/mistaosteria/?hl=en",
    },
    {
      title: "Euro Duo Kalem",
      description:
        "Moderan višejezični sajt i digitalno prisustvo napravljeni da predstave vrhunske sadnice voća i povežu firmu sa kupcima širom sveta.",
      tags: ["Dizajn sajta", "Razvoj", "Društvene mreže", "Oglašavanje"],
      image: PLACEHOLDER_IMAGE_2,
      size: "lg",
      link: "https://www.euroduokalem.com/en",
    },
    {
      title: "Go2 Traveling",
      description:
        "Strategija za društvene mreže, vođenje sadržaja i oglasne kampanje osmišljene da inspirišu putovanja i unaprede digitalno prisustvo agencije.",
      tags: ["Društvene mreže", "Oglašavanje"],
      image: PLACEHOLDER_IMAGE_5,
      size: "sm",
      link: "https://www.instagram.com/go2travelling/?hl=en",
    },
    {
      title: "Naše Vino",
      description:
        "Strategija za društvene mreže, produkcija sadržaja i plaćene kampanje osmišljene da unaprede brend i dosegnu više ljubitelja vina.",
      tags: ["Društvene mreže", "Foto i video", "Oglašavanje"],
      image: PLACEHOLDER_IMAGE_3,
      size: "lg",
      link: "https://www.instagram.com/nasevino/?hl=en",
    },
    {
      title: "Prostore",
      description:
        "Sajt za samostalno skladištenje napravljen za jednostavnu online rezervaciju — bezbedno i udobno mesto za vaše stvari, dostupno u svakom trenutku.",
      tags: ["Dizajn sajta", "Razvoj"],
      image: PLACEHOLDER_IMAGE_6,
      size: "sm",
      link: "https://prostor.rs/sr",
    },
    {
      title: "Blackbird",
      description:
        "Sajt za studio koji integriše AI prilagođen postojećem načinu rada kompanija — bez menjanja svega iz temelja, uz brze i realne rezultate.",
      tags: ["Dizajn sajta", "Razvoj"],
      image: PLACEHOLDER_IMAGE_7,
      size: "sm",
      link: "https://blackbird.rs/",
    },
  ],
};

export const PROJECT_COUNT = projectsByLang.en.length;

export function getProjects(lang: Lang): Project[] {
  return projectsByLang[lang];
}

export function getProjectCategories(lang: Lang): string[] {
  return Array.from(
    new Set(projectsByLang[lang].flatMap((project) => project.tags)),
  ).sort();
}
