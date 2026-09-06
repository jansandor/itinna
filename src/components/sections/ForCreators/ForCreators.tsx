"use client";

import { RevealText } from "@/components";
import { SECTION } from "@/const";
import { useInViewOnce } from "@/hooks";

const SWEEP_TRIGGER_ROOT_MARGIN = "0px 0px -75% 0px";

export const ForCreators = () => {
  const [sectionRef, hasEntered] = useInViewOnce<HTMLElement>(
    0,
    SWEEP_TRIGGER_ROOT_MARGIN,
  );

  return (
    <section ref={sectionRef} id={SECTION.FOR_CREATORS} className="py-16">
      <h2 className="text-display font-heading mb-8 font-semibold">
        For Creators
      </h2>
      <RevealText
        text="You know the place. We help you share it."
        active={hasEntered}
        className="text-title font-body pb-9 pl-6 font-normal tracking-wide"
      />
    </section>
  );
};
