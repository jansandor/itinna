"use client";

import { SECTION } from "@/const";
import { useInViewOnce } from "@/hooks";
import { GuideCard, RevealText } from "./components";
import { GUIDE_CARDS } from "./data";

export const Explore = () => {
  const [sectionRef, hasEntered] = useInViewOnce<HTMLElement>();

  return (
    <section ref={sectionRef} id={SECTION.EXPLORE} className="py-16">
      <h2 className="text-display font-heading mb-8 font-semibold">Explore</h2>
      <RevealText
        text="Everything you need for a better trip, in one place."
        active={hasEntered}
        className="text-title font-body pb-9 pl-6 font-normal tracking-wide"
      />
      <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-16">
        {GUIDE_CARDS.map((card) => (
          <GuideCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};
