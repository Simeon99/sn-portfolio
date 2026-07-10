import type { Lang } from "@/lib/language-context";

const PLACEHOLDER_IMAGE_1 = "/images/duo-iphone-17-pro-silver-mockup.jpg";
const PLACEHOLDER_IMAGE_2 = "/images/studio-display-xdr-mockup-floating.jpg";
const PLACEHOLDER_IMAGE_3 = "/images/7_8_2026_15_6_7_contentcore.xyz.png";
const PLACEHOLDER_IMAGE_4 = "/images/7_8_2026_14_59_39_contentcore.xyz.png";
const PLACEHOLDER_IMAGE_5 = "/images/go2 img.jpg";
const PLACEHOLDER_IMAGE_6 = "/images/prostore.png";
const PLACEHOLDER_IMAGE_7 = "/images/content.png";
const PLACEHOLDER_IMAGE_8 = "/images/BelgradeWF.jpg";
const PLACEHOLDER_IMAGE_9 = "/images/aura.jpg";
const PLACEHOLDER_IMAGE_10 = "/images/zasadi drvo.jpg";
const PLACEHOLDER_IMAGE_11 = "/images/28jun.jpg";
const PLACEHOLDER_IMAGE_12 = "/images/mondo.jpg";
const PLACEHOLDER_IMAGE_13 = "/images/burgerfest.jpg";
const PLACEHOLDER_IMAGE_14 = "/images/bakina tajna.jpg";
const PLACEHOLDER_IMAGE_15 = "/images/mts.png";
const PLACEHOLDER_IMAGE_16 = "/images/mcluck.png";

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
    {
      title: "Belgrade Waterfront",
      description:
        "Social media management, content production, and ad campaigns for Belgrade Waterfront, a large-scale urban redevelopment project in the heart of Belgrade, from November 2022 to March 2023.",
      tags: ["Social Media", "Photo & Video", "Ads"],
      image: PLACEHOLDER_IMAGE_8,
      size: "sm",
      link: "https://www.belgradewaterfront.com/en/",
    },
    {
      title: "Aura",
      description:
        "Social media management, content production, and ad campaigns for Aura — a well-known Serbian cosmetics brand with over 20 years on the market — from December 2022 to November 2023.",
      tags: ["Social Media", "Photo & Video", "Ads"],
      image: PLACEHOLDER_IMAGE_9,
      size: "sm",
      link: "https://rs.auramakeup.eu/",
    },
    {
      title: "Zasadi drvo",
      description:
        "Social media management, content production, and ad campaigns for Zasadi drvo, a WMG and dm initiative mobilizing volunteers for tree-planting activities, throughout 2022.",
      tags: ["Social Media", "Photo & Video", "Ads"],
      image: PLACEHOLDER_IMAGE_10,
      size: "sm",
      link: "https://www.instagram.com/zasadi_drvo/",
    },
    {
      title: "28. Jun",
      description:
        "Developed a comprehensive social media strategy for 28. Jun, an international humanitarian organization with special consultative status at the United Nations, to amplify its mission and connect with a global audience.",
      tags: ["Social Media"],
      image: PLACEHOLDER_IMAGE_11,
      size: "sm",
      link: "https://28jun.org/",
    },
    {
      title: "Mondo",
      description:
        "Social media management, content production, and ad campaigns across MONDO Sport, MONDO Portal, ELLE Serbia, and WANTED festivals as junior content strategist.",
      tags: ["Social Media", "Photo & Video", "Ads"],
      image: PLACEHOLDER_IMAGE_12,
      size: "sm",
      link: "https://mondo.rs/",
    },
    {
      title: "Belgrade Burger Festival",
      description:
        "Social media management, content production, and ad campaigns for Belgrade Burger Festival, a beloved food festival held at Kalemegdan every May, as junior content strategist in 2021.",
      tags: ["Social Media", "Photo & Video", "Ads"],
      image: PLACEHOLDER_IMAGE_13,
      size: "sm",
      link: "https://www.instagram.com/burgerfestivalrs/",
    },
    {
      title: "Bakina tajna",
      description:
        "Social media management, content production, and ad campaigns for Bakina tajna, a traditional Serbian brand of ajvar, jams, and fruit preserves.",
      tags: ["Social Media", "Photo & Video", "Ads"],
      image: PLACEHOLDER_IMAGE_14,
      size: "sm",
      link: "https://www.bakinatajna.com/",
    },
    {
      title: "mts",
      description:
        "Social media management, content production, and ad campaigns for mts, Serbia's state-owned telecommunications operator — including a new Instagram strategy developed during their rebranding, with a strongly positive audience response.",
      tags: ["Social Media", "Photo & Video", "Ads"],
      image: PLACEHOLDER_IMAGE_15,
      size: "sm",
      link: "https://www.instagram.com/mtstvojsvet/",
    },
    {
      title: "Social Casino",
      description:
        "Social media management, content production, and ad campaigns across four social casino brands — McLuck, Hello Millions, PlayFame, and SpinBlitz.",
      tags: ["Social Media", "Photo & Video", "Ads"],
      image: PLACEHOLDER_IMAGE_16,
      size: "sm",
      link: "https://www.mcluck.com/",
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
    {
      title: "Belgrade Waterfront",
      description:
        "Vođenje društvenih mreža, produkcija sadržaja i oglasne kampanje za Belgrade Waterfront, veliki urbani razvojni projekat u centru Beograda, od novembra 2022. do marta 2023.",
      tags: ["Društvene mreže", "Foto i video", "Oglašavanje"],
      image: PLACEHOLDER_IMAGE_8,
      size: "sm",
      link: "https://www.belgradewaterfront.com/en/",
    },
    {
      title: "Aura",
      description:
        "Vođenje društvenih mreža, produkcija sadržaja i oglasne kampanje za Auru — poznat srpski brend kozmetike prisutan na tržištu više od 20 godina — od decembra 2022. do novembra 2023.",
      tags: ["Društvene mreže", "Foto i video", "Oglašavanje"],
      image: PLACEHOLDER_IMAGE_9,
      size: "sm",
      link: "https://rs.auramakeup.eu/",
    },
    {
      title: "Zasadi drvo",
      description:
        "Vođenje društvenih mreža, produkcija sadržaja i oglasne kampanje za Zasadi drvo, inicijativu WMG-a i dm-a za mobilizaciju volontera na sadnji drveća, tokom 2022. godine.",
      tags: ["Društvene mreže", "Foto i video", "Oglašavanje"],
      image: PLACEHOLDER_IMAGE_10,
      size: "sm",
      link: "https://www.instagram.com/zasadi_drvo/",
    },
    {
      title: "28. Jun",
      description:
        "Razvoj sveobuhvatne strategije za društvene mreže za 28. Jun, međunarodnu humanitarnu organizaciju sa posebnim konsultativnim statusom pri Ujedinjenim nacijama, radi jačanja misije i povezivanja sa globalnom publikom.",
      tags: ["Društvene mreže"],
      image: PLACEHOLDER_IMAGE_11,
      size: "sm",
      link: "https://28jun.org/",
    },
    {
      title: "Mondo",
      description:
        "Vođenje društvenih mreža, produkcija sadržaja i oglasne kampanje za MONDO Sport, MONDO Portal, ELLE Srbija i WANTED festivale u ulozi junior content strategiste.",
      tags: ["Društvene mreže", "Foto i video", "Oglašavanje"],
      image: PLACEHOLDER_IMAGE_12,
      size: "sm",
      link: "https://mondo.rs/",
    },
    {
      title: "Belgrade Burger Festival",
      description:
        "Vođenje društvenih mreža, produkcija sadržaja i oglasne kampanje za Beogradski burger festival, omiljeni gastro festival koji se svake godine održava na Kalemegdanu, u ulozi junior content strategiste 2021. godine.",
      tags: ["Društvene mreže", "Foto i video", "Oglašavanje"],
      image: PLACEHOLDER_IMAGE_13,
      size: "sm",
      link: "https://www.instagram.com/burgerfestivalrs/",
    },
    {
      title: "Bakina tajna",
      description:
        "Vođenje društvenih mreža, produkcija sadržaja i oglasne kampanje za Bakinu tajnu, tradicionalni srpski brend ajvara, džemova i slatka.",
      tags: ["Društvene mreže", "Foto i video", "Oglašavanje"],
      image: PLACEHOLDER_IMAGE_14,
      size: "sm",
      link: "https://www.bakinatajna.com/",
    },
    {
      title: "mts",
      description:
        "Vođenje društvenih mreža, produkcija sadržaja i oglasne kampanje za mts, državnog operatera telekomunikacija u Srbiji — uključujući novu Instagram strategiju razvijenu tokom rebrendiranja, koja je naišla na veoma pozitivne reakcije publike.",
      tags: ["Društvene mreže", "Foto i video", "Oglašavanje"],
      image: PLACEHOLDER_IMAGE_15,
      size: "sm",
      link: "https://www.instagram.com/mtstvojsvet/",
    },
    {
      title: "Social Casino",
      description:
        "Vođenje društvenih mreža, produkcija sadržaja i oglasne kampanje za četiri social casino brenda — McLuck, Hello Millions, PlayFame i SpinBlitz.",
      tags: ["Društvene mreže", "Foto i video", "Oglašavanje"],
      image: PLACEHOLDER_IMAGE_16,
      size: "sm",
      link: "https://www.mcluck.com/",
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
