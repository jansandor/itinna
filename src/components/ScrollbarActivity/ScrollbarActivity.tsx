"use client";

import { useEffect, useRef } from "react";

const FADE_OUT_DELAY_MS = 1000;
const MIN_THUMB_HEIGHT_PX = 32;

// Visual-only overlay scrollbar: fixed/out-of-flow so it never reserves
// layout space, synced to native scroll position (no custom scrolling).
export const ScrollbarActivity = () => {
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const thumb = thumbRef.current;
    if (!thumb) return;

    let fadeOutTimeout: ReturnType<typeof setTimeout> | undefined;

    const updateThumbGeometry = () => {
      const { scrollHeight, clientHeight, scrollTop } =
        document.documentElement;
      const scrollableHeight = scrollHeight - clientHeight;
      if (scrollableHeight <= 0) {
        thumb.style.opacity = "0";
        return;
      }

      const thumbHeight = Math.max(
        (clientHeight / scrollHeight) * clientHeight,
        MIN_THUMB_HEIGHT_PX,
      );
      const thumbTop =
        (scrollTop / scrollableHeight) * (clientHeight - thumbHeight);

      thumb.style.height = `${thumbHeight}px`;
      thumb.style.transform = `translateY(${thumbTop}px)`;
    };

    const handleScroll = () => {
      updateThumbGeometry();
      thumb.style.opacity = "1";
      clearTimeout(fadeOutTimeout);
      fadeOutTimeout = setTimeout(() => {
        thumb.style.opacity = "0";
      }, FADE_OUT_DELAY_MS);
    };

    updateThumbGeometry();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateThumbGeometry);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateThumbGeometry);
      clearTimeout(fadeOutTimeout);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 right-0 z-30 w-2"
    >
      <div
        ref={thumbRef}
        className="absolute inset-x-0.5 top-0 rounded-full bg-white/35 opacity-0 transition-opacity duration-300 ease-out"
      />
    </div>
  );
};
