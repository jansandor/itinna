import { useEffect, useRef, useState } from "react";

// Tracks whether an element has ever entered the viewport, then stops
// observing — the returned flag latches `true` and never resets on re-entry.
export const useInViewOnce = <T extends Element>(threshold: number = 0.2) => {
  const ref = useRef<T>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (hasEntered) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasEntered, threshold]);

  return [ref, hasEntered] as const;
};
