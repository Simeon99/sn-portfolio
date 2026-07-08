const PLACEHOLDER_IMAGE_1 = "/images/duo-iphone-17-pro-silver-mockup.jpg";
const PLACEHOLDER_IMAGE_2 = "/images/studio-display-xdr-mockup-floating.jpg";
const PLACEHOLDER_IMAGE_3 = "/images/7_8_2026_15_6_7_contentcore.xyz.png";
const PLACEHOLDER_IMAGE_4 = "/images/7_8_2026_14_59_39_contentcore.xyz.png";
const PLACEHOLDER_IMAGE_5 = "/images/go2 img.jpg";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  size: "lg" | "sm";
};

export const projects: Project[] = [
  {
    title: "Smokvica",
    description:
      "Social media management, content production, and ad campaigns for one of Belgrade’s most beloved restaurants.",
    tags: ["Social Media", "Photo & Video", "Ads"],
    image: PLACEHOLDER_IMAGE_1,
    size: "sm",
  },
  {
    title: "Mista Osteria",
    description:
      "A new website and digital presence built to fill tables, grow its audience, and bring the brand to life online.",
    tags: ["Web Design", "Development", "Social Media", "Photo & Video", "Ads"],
    image: PLACEHOLDER_IMAGE_4,
    size: "sm",
  },
  {
    title: "Euro Duo Kalem",
    description:
      "A modern multilingual website and digital presence built to showcase premium fruit seedlings and connect with buyers worldwide.",
    tags: ["Web Design", "Development", "Social Media", "Ads"],
    image: PLACEHOLDER_IMAGE_2,
    size: "lg",
  },
  {
    title: "Go2 Traveling",
    description:
      "Social media strategy, content management, and ad campaigns created to inspire travel and grow the agency’s digital presence.",
    tags: ["Social Media", "Ads"],
    image: PLACEHOLDER_IMAGE_5,
    size: "sm",
  },
  {
    title: "Naše Vino",
    description:
      "Social media strategy, content production, and paid campaigns created to grow the brand and reach more wine lovers.",
    tags: ["Social Media", "Photo & Video", "Ads"],
    image: PLACEHOLDER_IMAGE_3,
    size: "lg",
  },



];

export const projectCategories = Array.from(
  new Set(projects.flatMap((project) => project.tags)),
).sort();
