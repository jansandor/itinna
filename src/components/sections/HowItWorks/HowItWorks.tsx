"use client";

import { RevealText } from "@/components";
import { SECTION } from "@/const";
import { useInViewOnce } from "@/hooks";
import { HowItWorksColumn } from "./components";
import { CREATOR_COLUMN, TRAVELER_COLUMN } from "./data";

const SWEEP_TRIGGER_ROOT_MARGIN = "0px 0px -75% 0px";

export const HowItWorks = () => {
  const [sectionRef, hasEntered] = useInViewOnce<HTMLElement>(
    0,
    SWEEP_TRIGGER_ROOT_MARGIN,
  );

  return (
    <section ref={sectionRef} id={SECTION.HOW_IT_WORKS} className="py-16">
      <h2 className="text-display font-heading mb-8 font-semibold">
        How It Works
      </h2>
      <RevealText
        text="One app, two sides of the journey."
        active={hasEntered}
        className="text-title font-body pb-20 pl-6 font-normal tracking-wide"
      />
      <div className="relative flex flex-col justify-between gap-16 lg:flex-row lg:items-start lg:gap-12">
        <HowItWorksColumn {...TRAVELER_COLUMN} className="lg:flex-1" />
        {/* Divider spans only the middle stretch between the two columns'
            midpoints — its offsets are derived from the lg:mt-56 stagger
            below, not tied to either column's actual content height. */}
        <div
          aria-hidden
          className="absolute top-[20%] bottom-[10%] left-1/2 hidden w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.4)_15%,rgba(255,255,255,0.9)_50%,rgba(255,255,255,0.4)_85%,transparent_100%)] lg:block"
        />
        {/* Starts roughly a third into the travelers column so the two
            steps lists read as staggered rather than aligned. */}
        <HowItWorksColumn {...CREATOR_COLUMN} className="lg:mt-125 lg:flex-1" />
      </div>
    </section>
  );
};
