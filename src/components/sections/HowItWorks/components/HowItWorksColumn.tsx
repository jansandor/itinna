import type { ComponentType, SVGProps } from "react";
import { OutlineCard, SectionIntro } from "@/components";
import { HowItWorksReveal } from "./HowItWorksReveal";

interface HowItWorksStep {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  subtitle: string;
}

export interface HowItWorksColumnData {
  label: string;
  title: string;
  subtitle: string;
  steps: HowItWorksStep[];
}

type HowItWorksColumnProps = HowItWorksColumnData & {
  className?: string;
  active: boolean;
  // Offsets the whole column's reveal timeline, so one column's sequence
  // can start slightly after the other's instead of both firing at once.
  startDelayMs?: number;
};

// Short pause after the intro rises in before the step list starts.
const INTRO_TO_ITEMS_DELAY_MS = 300;
const ITEM_STAGGER_MS = 120;

export const HowItWorksColumn = ({
  label,
  title,
  subtitle,
  steps,
  className = "",
  active,
  startDelayMs = 0,
}: HowItWorksColumnProps) => {
  return (
    <div className={`flex max-w-150 flex-col gap-10 ${className}`}>
      <HowItWorksReveal active={active} delayMs={startDelayMs}>
        <SectionIntro label={label} title={title} subtitle={subtitle} />
      </HowItWorksReveal>
      <ol className="flex list-none flex-col gap-4">
        {steps.map(({ title: stepTitle, subtitle: stepSubtitle }, index) => (
          <li key={stepTitle}>
            <HowItWorksReveal
              active={active}
              delayMs={
                startDelayMs + INTRO_TO_ITEMS_DELAY_MS + index * ITEM_STAGGER_MS
              }
            >
              <OutlineCard
                icon={
                  <span className="text-title font-body flex h-8 w-8 shrink-0 items-center justify-center font-semibold text-white/75">
                    {index + 1}
                  </span>
                }
                title={stepTitle}
                subtitle={stepSubtitle}
              />
            </HowItWorksReveal>
          </li>
        ))}
      </ol>
    </div>
  );
};
