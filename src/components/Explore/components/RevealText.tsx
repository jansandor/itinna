import { usePrefersReducedMotion } from "@/hooks";

interface RevealTextProps {
  text: string;
  active: boolean;
  className?: string;
  staggerMs?: number;
  durationMs?: number;
}

const DEFAULT_STAGGER_MS = 40;
const DEFAULT_DURATION_MS = 400;

// Splits `text` into words that fade from white/80 to white one by one, like
// a light sweeping left to right. `active` starts the sweep; once a word has
// brightened it stays that way — the effect never reverses or replays.
export const RevealText = ({
  text,
  active,
  className = "",
  staggerMs = DEFAULT_STAGGER_MS,
  durationMs = DEFAULT_DURATION_MS,
}: RevealTextProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const revealed = active || prefersReducedMotion;
  const words = text.split(" ");

  return (
    <p className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={`transition-colors ${revealed ? "text-white" : "text-white/80"}`}
          style={
            prefersReducedMotion
              ? undefined
              : {
                  transitionDelay: `${index * staggerMs}ms`,
                  transitionDuration: `${durationMs}ms`,
                }
          }
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
};
