"use client";

import Image from "next/image";
import { OutlineCard, RevealText } from "@/components";
import { SECTION } from "@/const";
import { useInViewOnce } from "@/hooks";
import { VALUE_PROPS } from "./data";

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
      <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-12">
        <div className="relative h-80 w-full overflow-hidden rounded-3xl sm:h-96 lg:h-auto lg:flex-1">
          <Image
            src="/images/for-creators/for-creators.png"
            alt="A creator photographing a coastal mountain view for a guide"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col justify-between gap-6 lg:flex-1">
          {VALUE_PROPS.map(({ title, subtitle }) => (
            <OutlineCard key={title} title={title} subtitle={subtitle} />
          ))}
        </div>
      </div>
    </section>
  );
};
