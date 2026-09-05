import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks";

interface RevealOnEnterProps {
  active: boolean;
  delayMs?: number;
  durationMs?: number;
  className?: string;
  children: ReactNode;
}

const DEFAULT_DURATION_MS = 800;

// Fades + slides `children` up into its final position once `active` flips
// true. Being a transition (not a keyframe animation), it settles there and
// never reverses, so the reveal can only ever play once.
export const RevealOnEnter = ({
  active,
  delayMs = 0,
  durationMs = DEFAULT_DURATION_MS,
  className = "",
  children,
}: RevealOnEnterProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const revealed = active || prefersReducedMotion;

  return (
    <div
      className={`transition-[opacity,transform] ease-out ${revealed ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} ${className}`}
      style={
        prefersReducedMotion
          ? undefined
          : {
              transitionDelay: `${delayMs}ms`,
              transitionDuration: `${durationMs}ms`,
            }
      }
    >
      {children}
    </div>
  );
};
