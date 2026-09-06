import type { JSX } from "react";

interface OutlineCardProps {
  title: string;
  subtitle: string;
  icon?: JSX.Element;
  className?: string;
  bordered?: boolean;
  size?: "normal" | "large";
}

const SWEEP_STAGGER_MS = 40;

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
  const subtitleWords = subtitle.split(" ");

  return (
    <div
      className={`flex items-center gap-4 rounded-2xl bg-transparent px-6 py-5 ${bordered ? "group border border-white/35" : ""} ${className}`}
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
          {bordered
            ? // CSS restarts the animation each time :hover is (re)matched,
              // so the sweep replays on every hover without any JS state.
              subtitleWords.map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className="motion-safe:group-hover:animate-outline-subtitle-sweep"
                  style={{ animationDelay: `${index * SWEEP_STAGGER_MS}ms` }}
                >
                  {word}
                  {index < subtitleWords.length - 1 ? " " : ""}
                </span>
              ))
            : subtitle}
        </p>
      </div>
    </div>
  );
};
