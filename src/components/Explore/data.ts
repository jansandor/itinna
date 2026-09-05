import type { ComponentType, SVGProps } from "react";
import {
  BookIcon,
  CalendarIcon,
  DownloadIcon,
  HeartIcon,
  MapIcon,
  PersonIcon,
  PinIcon,
  RouteIcon,
  StarIcon,
} from "./components/GuideCardIcons";

export interface GuideCardFeature {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  subtitle: string;
}

const EXPLORE_FEATURES: GuideCardFeature[] = [
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

const GUIDE_DETAIL_FEATURES: GuideCardFeature[] = [
  {
    icon: BookIcon,
    title: "Guide detail",
    subtitle: "Everything in one guide",
  },
  {
    icon: PersonIcon,
    title: "Local perspective",
    subtitle: "From people who know",
  },
  {
    icon: StarIcon,
    title: "Curated places",
    subtitle: "Quality over quantity",
  },
];

const ITINERARY_FEATURES: GuideCardFeature[] = [
  {
    icon: CalendarIcon,
    title: "Your trip",
    subtitle: "A plan made for you",
  },
  {
    icon: RouteIcon,
    title: "Ready-to-use itinerary",
    subtitle: "Save time, see more",
  },
  {
    icon: HeartIcon,
    title: "Flexible & personal",
    subtitle: "Make it your own",
  },
];

export interface GuideCardData {
  id: string;
  image: string;
  alt: string;
  features: GuideCardFeature[];
}

export const GUIDE_CARDS: GuideCardData[] = [
  {
    id: "guide-1",
    image: "/images/explore/map-card-img.png",
    alt: "Phone showing an interactive map guide held up against the Tre Cime di Lavaredo peaks in the Dolomites",
    features: EXPLORE_FEATURES,
  },
  {
    id: "guide-2",
    image: "/images/explore/guide-detail-card-2-img.png",
    alt: "Phone showing a guide's detail screen with featured places, held up in a Lisbon alleyway",
    features: GUIDE_DETAIL_FEATURES,
  },
  {
    id: "guide-3",
    image: "/images/explore/itinerary-card-3-img.png",
    alt: "Phone showing a day-by-day itinerary with a route map, held up against a Lisbon sunset",
    features: ITINERARY_FEATURES,
  },
];
