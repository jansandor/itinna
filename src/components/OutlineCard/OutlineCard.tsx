import type { JSX } from "react";

interface OutlineCardProps {
  title: string;
  subtitle: string;
  icon?: JSX.Element;
  className?: string;
  bordered?: boolean;
  size?: "normal" | "large";
}

// Bordered, transparent row for feature/step lists — same visual language
// (typography, spacing, icon treatment) as the Explore guide-card feature
// rows, generalized so it isn't coupled to guide data.
export const OutlineCard = ({
  title,
  subtitle,
  icon,
  className = "",
  bordered = true,
  size = "normal",
}: OutlineCardProps) => {
  const isLarge = size === "large";

  return (
    <div
      className={`flex items-center gap-4 rounded-2xl bg-transparent px-6 py-5 ${bordered ? "border border-white/35" : ""} ${className}`}
    >
      {icon}
      <div className={`flex flex-col ${isLarge ? "gap-1" : "gap-0.5"}`}>
        <p
          className={`text-title font-body font-semibold text-white ${isLarge ? "text-[24px]" : "text-[20px]"}`}
        >
          {title}
        </p>
        <p
          className={`text-body font-body font-normal text-white/65 ${isLarge ? "text-[18px] leading-6 tracking-wide" : ""}`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};
