import { useEffect } from "react";

const ACTIVE_CLASS = "is-scrolling";
const FADE_OUT_DELAY_MS = 1000;

/**
 * Toggles a class on <html> while the user is actively scrolling, so a
 * subtle scrollbar indicator can fade in/out via CSS. Purely visual — does
 * not intercept or alter native scroll behavior.
 */
export const useScrollbarActivity = () => {
  useEffect(() => {
    const root = document.documentElement;
    let fadeOutTimeout: ReturnType<typeof setTimeout> | undefined;

    const handleScroll = () => {
      root.classList.add(ACTIVE_CLASS);
      clearTimeout(fadeOutTimeout);
      fadeOutTimeout = setTimeout(() => {
        root.classList.remove(ACTIVE_CLASS);
      }, FADE_OUT_DELAY_MS);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(fadeOutTimeout);
      root.classList.remove(ACTIVE_CLASS);
    };
  }, []);
};
