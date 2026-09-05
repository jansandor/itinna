import { SECTION } from "@/const";

// Keep in sync with the `h-24` class on the navbar.
export const NAV_HEIGHT_PX = 96;

export const NAV_LINKS = [
  { label: "Explore", href: `#${SECTION.EXPLORE}` },
  { label: "How it works", href: `#${SECTION.HOW_IT_WORKS}` },
  { label: "For creators", href: `#${SECTION.FOR_CREATORS}` },
] as const;
