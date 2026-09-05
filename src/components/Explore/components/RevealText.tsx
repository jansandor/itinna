import { usePrefersReducedMotion } from "@/hooks";

interface RevealTextProps {
  text: string;
  active: boolean;
  className?: string;
  staggerMs?: number;
  durationMs?: number;
}

const DEFAULT_STAGGER_MS = 40;
const DEFAULT_DURATION_MS = 800;

// Text rests at white/80. Once `active`, each word briefly pulses to full
// white and back via a CSS animation, staggered per word so the pulses
// overlap and read as one beam sweeping left to right. Animations (unlike
// transitions) play exactly once and don't need to be undone afterwards, so
// the sweep can never replay on re-entry.
export const RevealText = ({
  text,
  active,
  className = "",
  staggerMs = DEFAULT_STAGGER_MS,
  durationMs = DEFAULT_DURATION_MS,
}: RevealTextProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const sweep = active && !prefersReducedMotion;
  const words = text.split(" ");

  return (
    <p className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={`text-white/80 ${sweep ? "motion-safe:animate-explore-word-sweep" : ""}`}
          style={
            sweep
              ? {
                  animationDelay: `${index * staggerMs}ms`,
                  animationDuration: `${durationMs}ms`,
                }
              : undefined
          }
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
};
