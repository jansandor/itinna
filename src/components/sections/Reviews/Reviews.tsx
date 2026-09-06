"use client";

import { ReviewCard, RevealText } from "@/components";
import { useInViewOnce } from "@/hooks";
import { REVIEWS } from "./data";

const SWEEP_TRIGGER_ROOT_MARGIN = "0px 0px -75% 0px";

export const Reviews = () => {
  const [sectionRef, hasEntered] = useInViewOnce<HTMLElement>(
    0,
    SWEEP_TRIGGER_ROOT_MARGIN,
  );

  return (
    <section ref={sectionRef} className="py-16">
      <h2 className="text-display font-heading mb-8 font-semibold">
        Loved by both
      </h2>
      <RevealText
        text="New adventures for travelers. Simple sharing for creators." // "New adventures for travelers. An easy way to share for creators." // "Better trips for travelers. More reach for creators."
        active={hasEntered}
        className="text-title font-body pb-9 pl-6 font-normal tracking-wide"
      />
      <div className="grid grid-cols-1 gap-6 py-12 lg:grid-cols-3 lg:gap-8">
        {REVIEWS.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </section>
  );
};
