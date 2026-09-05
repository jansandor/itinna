import { useEffect, useRef, useState } from "react";

// Returns how far the page has scrolled through the first `rangePx` of
// scrolling, as a 0–1 value — driving a continuous transition rather than
// an on/off switch. Updates are rAF-throttled to stay smooth under scroll.
export const useScrollProgress = (rangePx: number) => {
  const [progress, setProgress] = useState(0);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const updateProgress = () => {
      frameRef.current = undefined;
      setProgress(Math.min(1, Math.max(0, window.scrollY / rangePx)));
    };

    const handleScroll = () => {
      if (frameRef.current !== undefined) return;
      frameRef.current = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current !== undefined) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [rangePx]);

  return progress;
};
