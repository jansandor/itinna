"use client";

import { SECTION } from "@/const";
import { useInViewOnce } from "@/hooks";
import { GuideCard, RevealText } from "./components";
import { GUIDE_CARDS } from "./data";

// rootMargin crops the bottom 75% of the viewport out of the intersection
// check, so the section only counts as "entered" once the user has scrolled
// well past its top edge — not the moment it first peeks into view.
const SWEEP_TRIGGER_ROOT_MARGIN = "0px 0px -75% 0px";

export const Explore = () => {
  const [sectionRef, hasEntered] = useInViewOnce<HTMLElement>(
    0,
    SWEEP_TRIGGER_ROOT_MARGIN,
  );

  return (
    <section ref={sectionRef} id={SECTION.EXPLORE} className="py-16">
      <h2 className="text-display font-heading mb-8 font-semibold">Explore</h2>
      <RevealText
        text="Everything you need for a better trip, in one place."
        active={hasEntered}
        className="text-title font-body pb-9 pl-6 font-normal tracking-wide"
      />
      <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-16">
        {GUIDE_CARDS.map((card, index) => (
          <GuideCard
            key={card.id}
            {...card}
            // Middle card sits lower for an editorial staggered rhythm, but
            // only once the cards actually sit in one row (lg+); when they
            // wrap onto their own lines the offset would look accidental.
            className={index === 1 ? "lg:mt-28" : undefined}
          />
        ))}
      </div>
    </section>
  );
};
