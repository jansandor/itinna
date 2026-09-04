import Link from "next/link";
import { Navigation } from "../Navigation";
import { GlassBox } from "../GlassBox";
import { ROUTE } from "@/const/routes";
import { HeroVideoBackground } from "./components";
import { getHeroVideoSources } from "./utils";

export const Hero = () => {
  const videoSources = getHeroVideoSources();

  return (
    <header className="relative flex min-h-screen flex-col overflow-hidden text-white">
      <HeroVideoBackground sources={videoSources} />
      <Navigation />
      <div className="relative z-10 mx-56 my-auto flex max-w-6xl flex-col">
        <GlassBox className="flex flex-col gap-8 px-4 py-20 sm:px-12 lg:px-20">
          <h1 className="font-heading text-display max-w-3xl font-bold tracking-tight text-balance">
            Discover places worth the trip.
          </h1>
          <p className="font-editorial text-title ml-10 max-w-200 leading-9 font-normal text-white/80">
            {/* 
          Alternative 1
          Hand-picked travel guides from people who know the places best. 
          */}
            {/* 
          Alternative 2
          Discover hand-picked places and experiences recommended by people who
          know them best. Take their guides with you, explore offline, and
          follow their recommendations at your own pace.
          */}
            Discover hand-picked places and experiences recommended by people
            who know them best. Take their guides with you, use them offline,
            and explore at your own pace.
          </p>
          <Link
            href={ROUTE.EXPLORE_GUIDES}
            className="text-small ml-10 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-neutral-900 transition hover:bg-white/90"
          >
            Explore guides
          </Link>
        </GlassBox>
      </div>
    </header>
  );
};
