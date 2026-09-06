import type { HowItWorksColumnData } from "./components";
import {
  BookmarkIcon,
  ChartBarIcon,
  CompassIcon,
  HeartIcon,
  MapFoldIcon,
  PeopleIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
  TrophyIcon,
} from "./components/HowItWorksIcons";

export const TRAVELER_COLUMN: HowItWorksColumnData = {
  label: "For Travelers",
  title: "Find guides.\nMake them yours.",
  subtitle:
    "Discover authentic travel guides from people who know the places best.",
  steps: [
    {
      icon: SearchIcon,
      title: "Explore destinations",
      subtitle: "Browse guides for places you're curious about.",
    },
    {
      icon: MapFoldIcon,
      title: "Find your guide",
      subtitle: "Choose from locals, travelers and experts.",
    },
    {
      icon: BookmarkIcon,
      title: "Save & plan",
      subtitle: "Keep your favorite places and build your trip.",
    },
    {
      icon: CompassIcon,
      title: "Go & explore",
      subtitle: "Take your guide with you, even offline.",
    },
    {
      icon: HeartIcon,
      title: "Make it yours",
      subtitle: "Follow, save and discover more places along the way.",
    },
  ],
};

export const CREATOR_COLUMN: HowItWorksColumnData = {
  label: "For Creators",
  title: "Share your knowledge.\nInspire the next journey.",
  subtitle:
    "Turn your travel experience into guides and reach travelers around the world.",
  steps: [
    {
      icon: PlusIcon,
      title: "Create your guide",
      subtitle: "Add places, photos and personal recommendations.",
    },
    {
      icon: PeopleIcon,
      title: "Share your perspective",
      subtitle: "Publish your guide and reach curious travelers.",
    },
    {
      icon: ChartBarIcon,
      title: "Grow your audience",
      subtitle: "Build a following around the places you know best.",
    },
    {
      icon: TrophyIcon,
      title: "Earn from your guides",
      subtitle: "Turn your knowledge into something valuable.",
    },
    {
      icon: StarIcon,
      title: "Keep creating",
      subtitle: "Share more places, stories and experiences.",
    },
  ],
};
