import type { ComponentType, SVGProps } from "react";
import { OutlineCard, SectionIntro } from "@/components";

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
};

export const HowItWorksColumn = ({
  label,
  title,
  subtitle,
  steps,
  className = "",
}: HowItWorksColumnProps) => {
  return (
    <div className={`flex max-w-150 flex-col gap-10 ${className}`}>
      <SectionIntro label={label} title={title} subtitle={subtitle} />
      <ol className="flex list-none flex-col gap-4">
        {steps.map(({ title: stepTitle, subtitle: stepSubtitle }, index) => (
          <li key={stepTitle}>
            <OutlineCard
              icon={
                <span className="text-title font-body flex h-8 w-8 shrink-0 items-center justify-center font-semibold text-white">
                  {index + 1}
                </span>
              }
              title={stepTitle}
              subtitle={stepSubtitle}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};
