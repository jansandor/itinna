import { SECTION } from "@/const";

// Each chevron delays by 1/3 of the animation duration (2.4s), so only one is
// ever near its bright peak at a time — a highlight traveling top to bottom.
// Delay is set inline (not via a Tailwind class) because the `animate-*`
// utility applies `animation` as a shorthand, which would otherwise reset
// a class-based `animation-delay` back to 0 depending on CSS source order.
const CHEVRONS = [
  { id: "chevron-1", style: { animationDelay: "0ms" } },
  { id: "chevron-2", style: { animationDelay: "1200ms" } },
  { id: "chevron-3", style: { animationDelay: "2400ms" } },
] as const;

export const HeroScrollCue = () => {
  return (
    <a
      href={`#${SECTION.EXPLORE}`}
      aria-label="Scroll to explore guides"
      className="absolute inset-x-0 bottom-8 z-10 mx-auto flex w-fit flex-col items-center gap-2 text-white/80 transition hover:text-white sm:bottom-10"
    >
      <span className="text-small font-body font-medium tracking-widest uppercase">
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
            className="motion-safe:animate-hero-chevron-fade"
            style={chevron.style}
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
