export interface ReviewData {
  id: string;
  quote: string;
  name: string;
  meta: string;
  avatarSrc: string;
  avatarAlt: string;
}

export const REVIEWS: ReviewData[] = [
  {
    id: "sofia-laurent",
    quote:
      "Itinna completely changed how I plan city trips. I found places I would never have discovered on my own — and having everything on one map made the whole trip so much easier.",
    name: "Sofia Laurent",
    meta: "Traveler · Paris",
    avatarSrc: "/images/reviews/sofia-laurent.png",
    avatarAlt: "Portrait of Sofia Laurent",
  },
  {
    id: "daniel-weber",
    quote:
      "It feels like having a friend who knows the city inside out. No endless tabs, no generic recommendations — just places I actually wanted to visit.",
    name: "Daniel Weber",
    meta: "Traveler · Berlin",
    avatarSrc: "/images/reviews/daniel-weber.png",
    avatarAlt: "Portrait of Daniel Weber",
  },
  {
    id: "maya-thompson",
    quote:
      "Creating my first guide was much easier than I expected. I could turn the places and recommendations I already share into something travelers could actually use throughout their trip.",
    name: "Maya Thompson",
    meta: "Creator · London",
    avatarSrc: "/images/reviews/maya-thompson.png",
    avatarAlt: "Portrait of Maya Thompson",
  },
];
