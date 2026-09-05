import { SECTION } from "@/const";

// Trigger point for the Hero → compact-glass transition. Hysteresis keeps
// small scroll movements right at the threshold from toggling it back and forth.
export const SCROLL_TRIGGER_PX = 48; // Larger value = Navigation changes later, after more scrolling
export const SCROLL_TRIGGER_HYSTERESIS_PX = 24; // Larger value = Navigation changes back later, after more scrolling back up

export const NAV_LINKS = [
  { label: "Explore", href: `#${SECTION.EXPLORE}` },
  { label: "How it works", href: `#${SECTION.HOW_IT_WORKS}` },
  { label: "For creators", href: `#${SECTION.FOR_CREATORS}` },
] as const;
