"use client";

import { useState, type JSX } from "react";

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
  // Hover only triggers the sweep; it doesn't control its lifetime. Each
  // mouse enter bumps this counter, which remounts the spans below under a
  // fresh key so the CSS animation restarts and then plays to completion on
  // its own, even if the cursor leaves before it finishes.
  const [sweepCount, setSweepCount] = useState(0);

  return (
    <div
      className={`flex items-center gap-4 rounded-2xl bg-transparent px-6 py-5 ${bordered ? "border border-white/35" : ""} ${className}`}
      onMouseEnter={
        bordered ? () => setSweepCount((count) => count + 1) : undefined
      }
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
            ? subtitleWords.map((word, index) => (
                <span
                  key={`${sweepCount}-${word}-${index}`}
                  className={
                    sweepCount > 0
                      ? "motion-safe:animate-outline-subtitle-sweep"
                      : undefined
                  }
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
