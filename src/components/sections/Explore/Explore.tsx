"use client";

import { SECTION } from "@/const";
import { useInViewOnce } from "@/hooks";
import { GuideCard } from "./components";
import { GUIDE_CARDS } from "./data";
import { RevealText } from "@/components";

// rootMargin crops the bottom 75% of the viewport out of the intersection
// check, so the section only counts as "entered" once the user has scrolled
// well past its top edge — not the moment it first peeks into view.
const SWEEP_TRIGGER_ROOT_MARGIN = "0px 0px -75% 0px";

// Crops the bottom 60% of the viewport, so the card grid only counts as
// "entered" once its top has scrolled up into the upper-middle of the
// screen — the user is already looking at the cards, not just their edge.
const CARDS_TRIGGER_ROOT_MARGIN = "0px 0px -25% 0px";

// image → content → image → content → image → content, left to right, each
// step landing before the next one starts so the sequence reads as one
// continuous reveal rather than six independent animations.
const CARD_REVEAL_DELAYS_MS = [
  { image: 0, content: 180 },
  { image: 600, content: 780 },
  { image: 1200, content: 1380 },
] as const;

export const Explore = () => {
  const [sectionRef, hasEntered] = useInViewOnce<HTMLElement>(
    0,
    SWEEP_TRIGGER_ROOT_MARGIN,
  );
  const [cardsRef, cardsInView] = useInViewOnce<HTMLDivElement>(
    0,
    CARDS_TRIGGER_ROOT_MARGIN,
  );

  return (
    <section ref={sectionRef} id={SECTION.EXPLORE} className="py-16">
      <h2 className="text-display font-heading mb-8 font-semibold">Explore</h2>
      <RevealText
        text="Everything you need for a better trip, in one place."
        active={hasEntered}
        className="text-title font-body pb-9 pl-6 font-normal tracking-wide"
      />
      <div
        ref={cardsRef}
        className="flex flex-wrap items-start justify-between gap-x-8 gap-y-16"
      >
        {GUIDE_CARDS.map((card, index) => (
          <GuideCard
            key={card.id}
            {...card}
            // Middle card sits lower for an editorial staggered rhythm, but
            // only once the cards actually sit in one row (lg+); when they
            // wrap onto their own lines the offset would look accidental.
            className={index === 1 ? "lg:mt-28" : undefined}
            revealActive={cardsInView}
            imageRevealDelayMs={CARD_REVEAL_DELAYS_MS[index].image}
            contentRevealDelayMs={CARD_REVEAL_DELAYS_MS[index].content}
          />
        ))}
      </div>
    </section>
  );
};
