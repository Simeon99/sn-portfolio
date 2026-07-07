const PLACEHOLDER_IMAGE_1 = "/images/duo-iphone-17-pro-silver-mockup.jpg";
const PLACEHOLDER_IMAGE_2 = "/images/studio-display-xdr-mockup-floating.jpg";
const PLACEHOLDER_IMAGE_3 = "/images/iphone 17 Pro.png";
const PLACEHOLDER_IMAGE_4 = "/images/maneken-PS93.jpg";

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
      "Social media management and ad campaigns for this beloved restaurant in Belgrade.",
    tags: ["Social Media", "Ads"],
    image: PLACEHOLDER_IMAGE_1,
    size: "sm",
  },
  {
    title: "Mista Osteria",
    description:
      "A new website and social media presence for this osteria, built to fill tables and grow its following.",
    tags: ["Web Design", "Development", "Social Media", "Ads"],
    image: PLACEHOLDER_IMAGE_4,
    size: "sm",
  },
  {
    title: "Euro Duo Kalem",
    description:
      "A modern, multilingual website and digital presence built to showcase premium fruit seedlings and connect with buyers worldwide.",
    tags: ["Web Design", "Development", "Social Media", "Ads"],
    image: PLACEHOLDER_IMAGE_2,
    size: "lg",
  },
  {
    title: "Naše Vino social media",
    description:
      "Instagram strategy, content and paid campaigns built to grow the brand and reach more wine lovers.",
    tags: ["Social Media", "Content", "Ads"],
    image: PLACEHOLDER_IMAGE_3,
    size: "lg",
  },
  {
    title: "Smokvica",
    description:
      "Social media management and ad campaigns for this beloved restaurant in Belgrade.",
    tags: ["Social Media", "Ads"],
    image: PLACEHOLDER_IMAGE_1,
    size: "sm",
  },
];

export const projectCategories = Array.from(
  new Set(projects.flatMap((project) => project.tags)),
).sort();
