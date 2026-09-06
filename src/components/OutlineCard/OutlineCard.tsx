import type { JSX } from "react";

interface OutlineCardProps {
  title: string;
  subtitle: string;
  icon?: JSX.Element;
  className?: string;
}

// Bordered, transparent row for feature/step lists — same visual language
// (typography, spacing, icon treatment) as the Explore guide-card feature
// rows, generalized so it isn't coupled to guide data.
export const OutlineCard = ({
  title,
  subtitle,
  icon,
  className = "",
}: OutlineCardProps) => {
  return (
    <div
      className={`flex items-center gap-4 rounded-2xl border border-white/40 bg-transparent px-6 py-5 ${className}`}
    >
      {icon}
      <div className="flex flex-col gap-0.5">
        <p className="text-title font-body text-[20px] font-semibold text-white">
          {title}
        </p>
        <p className="text-body font-body font-normal text-white/65">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
