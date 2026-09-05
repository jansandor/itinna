import { useEffect, useState } from "react";

// Boolean scroll-past-threshold state with hysteresis: crosses to `true`
// past `enterPx`, back to `false` only below `enterPx - hysteresisPx`, so
// small scroll movements right at the threshold don't repeatedly toggle it.
export const useHasScrolledPast = (
  enterPx: number,
  hysteresisPx: number = 0,
) => {
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  useEffect(() => {
    const exitPx = Math.max(0, enterPx - hysteresisPx);

    const handleScroll = () => {
      setHasScrolledPast((prev) => {
        if (!prev && window.scrollY > enterPx) return true;
        if (prev && window.scrollY < exitPx) return false;
        return prev;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enterPx, hysteresisPx]);

  return hasScrolledPast;
};
