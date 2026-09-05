import { SECTION } from "@/const";

// How many pixels of scroll the Hero → compact-glass transition is spread
// across. Progress is `0` at the top and `1` once scrolled past this.
export const SCROLL_TRANSITION_RANGE_PX = 100;

// Interpolated between these two states as scroll progress goes 0 → 1.
// Keep in sync with the (now removed) `h-24`/`h-18.5` and `py-6`/`py-4`.
export const NAV_HEIGHT_HERO_PX = 96;
export const NAV_HEIGHT_COMPACT_PX = 74;
export const NAV_PADDING_Y_HERO_PX = 24;
export const NAV_PADDING_Y_COMPACT_PX = 16;

// Target values for the compact glass surface, e.g. `bg-black/5` and
// `backdrop-blur-sm` (4px) — faded in from 0 as scroll progress increases.
export const GLASS_BACKGROUND_ALPHA = 0.05;
export const GLASS_BLUR_PX = 4;

export const NAV_LINKS = [
  { label: "Explore", href: `#${SECTION.EXPLORE}` },
  { label: "How it works", href: `#${SECTION.HOW_IT_WORKS}` },
  { label: "For creators", href: `#${SECTION.FOR_CREATORS}` },
] as const;
