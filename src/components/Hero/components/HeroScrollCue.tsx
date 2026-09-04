import { SECTION } from "@/const";

// Staggered per-chevron delay creates the sequential, downward-flowing fade.
const CHEVRONS = [
  { id: "chevron-1", delayClassName: "[animation-delay:0ms]" },
  { id: "chevron-2", delayClassName: "[animation-delay:200ms]" },
  { id: "chevron-3", delayClassName: "[animation-delay:400ms]" },
] as const;

export const HeroScrollCue = () => {
  return (
    <a
      href={`#${SECTION.EXPLORE}`}
      aria-label="Scroll to explore guides"
      className="absolute inset-x-0 bottom-8 z-10 mx-auto flex w-fit flex-col items-center gap-2 text-white/80 transition hover:text-white sm:bottom-10"
    >
      <span className="text-small font-medium tracking-widest uppercase">
        Explore
      </span>
      <span className="flex flex-col items-center gap-1">
        {CHEVRONS.map((chevron) => (
          <svg
            key={chevron.id}
            width="20"
            height="10"
            viewBox="0 0 20 10"
            fill="none"
            aria-hidden="true"
            className={`motion-safe:animate-hero-chevron-fade ${chevron.delayClassName}`}
          >
            <path
              d="M1.5 1.5L10 8.5L18.5 1.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </span>
    </a>
  );
};
