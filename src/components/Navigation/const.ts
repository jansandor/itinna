import { SECTION } from "@/const";

// How far the user must scroll before the navbar switches to its compact
// glass state. Small enough that the transition starts almost immediately.
export const SCROLL_TRIGGER_PX = 8;

export const NAV_LINKS = [
  { label: "Explore", href: `#${SECTION.EXPLORE}` },
  { label: "How it works", href: `#${SECTION.HOW_IT_WORKS}` },
  { label: "For creators", href: `#${SECTION.FOR_CREATORS}` },
] as const;
