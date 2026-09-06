"use client";

import { RevealText } from "@/components";
import { useInViewOnce } from "@/hooks";

const SWEEP_TRIGGER_ROOT_MARGIN = "0px 0px -75% 0px";

export const FinalCta = () => {
  const [sectionRef, hasEntered] = useInViewOnce<HTMLElement>(
    0,
    SWEEP_TRIGGER_ROOT_MARGIN,
  );

  return (
    <section ref={sectionRef} className="py-16">
      <h2 className="text-display font-heading mb-8 font-semibold">
        Where will you go next?
      </h2>
      <RevealText
        text="Find your next adventure."
        active={hasEntered}
        className="text-title font-body pb-9 pl-6 font-normal tracking-wide"
      />
    </section>
  );
};
