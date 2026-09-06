import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks";

interface HowItWorksRevealProps {
  active: boolean;
  delayMs?: number;
  className?: string;
  children: ReactNode;
}

const DURATION_MS = 900;
// Travels up from further away than the Explore reveal (56px vs. 40px) —
// How It Works wants a clearly visible rise, not a subtle fade.
const HIDDEN_CLASSES = "translate-y-14 opacity-0";
const REVEALED_CLASSES = "translate-y-0 opacity-100";

// Fades + rises `children` into place once `active` flips true. A
// transition (not a keyframe animation), so it settles there and never
// reverses — scrolling back up can't replay or undo the reveal.
export const HowItWorksReveal = ({
  active,
  delayMs = 0,
  className = "",
  children,
}: HowItWorksRevealProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const revealed = active || prefersReducedMotion;

  return (
    <div
      className={`transition-[opacity,transform] ease-out ${revealed ? REVEALED_CLASSES : HIDDEN_CLASSES} ${className}`}
      style={
        prefersReducedMotion
          ? undefined
          : {
              transitionDelay: `${delayMs}ms`,
              transitionDuration: `${DURATION_MS}ms`,
            }
      }
    >
      {children}
    </div>
  );
};
