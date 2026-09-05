import { useEffect, useState } from "react";

// Tracks whether the page has scrolled past `thresholdPx` from the top.
export const useHasScrolledPast = (thresholdPx: number) => {
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolledPast(window.scrollY > thresholdPx);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [thresholdPx]);

  return hasScrolledPast;
};
