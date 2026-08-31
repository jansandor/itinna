import Image from "next/image";
import Link from "next/link";
import { Navigation } from "../Navigation";
import { ROUTE } from "@/routes";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden text-white">
      <Image
        src="/images/mountain-view-hike.jpeg"
        alt="Hikers overlooking a mountain valley"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/50" /> */}

      <Navigation />

      <div className="relative z-10 mt-auto flex flex-col gap-6 px-6 pt-32 pb-20 sm:px-10 lg:px-16">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Discover places worth the trip.
        </h1>
        <p className="max-w-md text-base text-white/80 sm:text-lg">
          Discover hand-picked places from people who know them best — mapped
          out for your trip and available offline.
        </p>
        <Link
          href={ROUTE.EXPLORE_GUIDES}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-white/90"
        >
          Explore guides
        </Link>
      </div>
    </section>
  );
};
