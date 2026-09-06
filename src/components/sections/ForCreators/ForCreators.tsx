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
        <div className="group relative h-96 w-full overflow-hidden rounded-3xl sm:h-120 lg:h-175 lg:basis-2/3">
          <Image
            src="/images/for-creators/for-creators.png"
            alt="A creator photographing a coastal mountain view for a guide"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover object-center motion-safe:transition-transform motion-safe:duration-600 motion-safe:ease-out motion-safe:group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col gap-6 lg:basis-1/3 lg:justify-center">
          {VALUE_PROPS.map(({ title, subtitle }) => (
            <OutlineCard key={title} title={title} subtitle={subtitle} />
          ))}
        </div>
      </div>
    </section>
  );
};
