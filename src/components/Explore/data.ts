import type { ComponentType, SVGProps } from "react";
import { DownloadIcon, MapIcon, PinIcon } from "./components/GuideCardIcons";

export interface GuideCardFeature {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  subtitle: string;
}

export const GUIDE_CARD_FEATURES: GuideCardFeature[] = [
  {
    icon: MapIcon,
    title: "Interactive map",
    subtitle: "All places in one view",
  },
  {
    icon: DownloadIcon,
    title: "Available offline",
    subtitle: "No signal, no problem",
  },
  {
    icon: PinIcon,
    title: "Real recommendations",
    subtitle: "From people who know",
  },
];

export interface GuideCardData {
  id: string;
  image: string;
  alt: string;
}

// Placeholder data — all three cards reuse the same content until real guides are wired up.
export const GUIDE_CARDS: GuideCardData[] = [
  {
    id: "guide-1",
    image: "/images/explore/map-card-img.png",
    alt: "Phone showing an interactive map guide held up against the Tre Cime di Lavaredo peaks in the Dolomites",
  },
  {
    id: "guide-2",
    image: "/images/explore/map-card-img.png",
    alt: "Phone showing an interactive map guide held up against the Tre Cime di Lavaredo peaks in the Dolomites",
  },
  {
    id: "guide-3",
    image: "/images/explore/map-card-img.png",
    alt: "Phone showing an interactive map guide held up against the Tre Cime di Lavaredo peaks in the Dolomites",
  },
];
