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
    <div className={`flex flex-col gap-10 ${className}`}>
      <SectionIntro label={label} title={title} subtitle={subtitle} />
      <ol className="flex list-none flex-col gap-4">
        {steps.map(
          ({ icon: Icon, title: stepTitle, subtitle: stepSubtitle }, index) => (
            <li key={stepTitle} className="flex items-center gap-4">
              <span className="text-small font-body flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-white">
                {index + 1}
              </span>
              <OutlineCard
                icon={<Icon className="h-8 w-8 shrink-0 text-white" />}
                title={stepTitle}
                subtitle={stepSubtitle}
                className="flex-1"
              />
            </li>
          ),
        )}
      </ol>
    </div>
  );
};
