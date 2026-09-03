import Link from "next/link";
import { Navigation } from "../Navigation";
import { ROUTE } from "@/const/routes";
import { HeroVideoBackground } from "./components";
import { getHeroVideoSources } from "./utils";

export const Hero = () => {
  const videoSources = getHeroVideoSources();

  return (
    <header className="relative flex min-h-screen flex-col overflow-hidden text-white">
      <div className="absolute inset-x-0 top-0 z-15 h-32 bg-linear-to-b from-black/70 via-black/30 to-transparent" />

      <HeroVideoBackground sources={videoSources} />

      <Navigation />

      <div className="relative z-10 mt-auto flex flex-col gap-6 px-6 pt-32 pb-20 sm:px-10 lg:px-16">
        <h1 className="font-heading text-display max-w-2xl font-semibold tracking-tight text-balance">
          Discover places worth the trip.
        </h1>
        <p className="font-editorial text-title max-w-md text-white/80">
          Hand-picked travel guides from people who know the places best.
        </p>
        <Link
          href={ROUTE.EXPLORE_GUIDES}
          className="text-small inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-neutral-900 transition hover:bg-white/90"
        >
          Explore guides
        </Link>
      </div>
    </header>
  );
};
