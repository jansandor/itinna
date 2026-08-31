import { SECTION } from "@/const";

export const NAV_LINKS = [
  { label: "Explore", href: `#${SECTION.EXPLORE}` },
  { label: "How it works", href: `#${SECTION.HOW_IT_WORKS}` },
  { label: "For creators", href: `#${SECTION.FOR_CREATORS}` },
] as const;
