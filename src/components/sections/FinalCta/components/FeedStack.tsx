"use client";

import { useCallback, useEffect, useRef } from "react";
import { TravelFeedCard } from "@/components";
import type { TravelFeedCardProps } from "@/components/TravelFeedCard";
import { usePrefersReducedMotion } from "@/hooks";

export interface FeedStackCard extends TravelFeedCardProps {
  id: string;
}

interface FeedStackProps {
  cards: FeedStackCard[];
}

// A slide only counts as "the current card" once it fills the viewport
// almost exactly — each slide is min-h-screen, so this ratio is only ever
// reached right at its snapped, fully-visible position.
const FULLY_VISIBLE_THRESHOLD = 0.98;
// Ignores the tiny deltaY jitter some trackpads send at rest.
const WHEEL_DELTA_THRESHOLD = 12;
const SWIPE_DISTANCE_THRESHOLD = 40;
// Fallback lock duration for browsers without a `scrollend` event.
const SNAP_FALLBACK_DURATION_MS = 900;

// Full-screen, one-card-per-gesture feed (TikTok/Reels-style): while a
// slide is snapped fully into view, wheel/touch input advances directly to
// the next or previous card instead of scrolling through it. Above the
// first card and below the last, scrolling behaves normally so the feed
// only takes over once the user has actually entered it.
export const FeedStack = ({ cards }: FeedStackProps) => {
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndexRef = useRef(0);
  const isEngagedRef = useRef(false);
  const isSnappingRef = useRef(false);
  const snapTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  const touchStartYRef = useRef<number | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const goToIndex = useCallback((index: number) => {
    const target = slideRefs.current[index];
    if (!target) return;

    activeIndexRef.current = index;
    isSnappingRef.current = true;
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    clearTimeout(snapTimeoutRef.current);
    snapTimeoutRef.current = setTimeout(() => {
      isSnappingRef.current = false;
    }, SNAP_FALLBACK_DURATION_MS);
  }, []);

  // Returns false at the first/last card so the caller can let that one
  // gesture fall through to normal scrolling and release the feed.
  const advance = useCallback(
    (direction: 1 | -1) => {
      const nextIndex = activeIndexRef.current + direction;
      if (nextIndex < 0 || nextIndex > slideRefs.current.length - 1) {
        isEngagedRef.current = false;
        return false;
      }
      goToIndex(nextIndex);
      return true;
    },
    [goToIndex],
  );

  useEffect(() => {
    if (prefersReducedMotion) return;

    const slides = slideRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.intersectionRatio < FULLY_VISIBLE_THRESHOLD) continue;
          if (isSnappingRef.current) continue;

          const index = slides.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            activeIndexRef.current = index;
            isEngagedRef.current = true;
          }
        }
      },
      { threshold: [FULLY_VISIBLE_THRESHOLD] },
    );

    for (const slide of slides) {
      if (slide) observer.observe(slide);
    }

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScrollEnd = () => {
      isSnappingRef.current = false;
    };

    const handleWheel = (event: WheelEvent) => {
      if (!isEngagedRef.current) return;
      if (isSnappingRef.current) {
        event.preventDefault();
        return;
      }
      if (Math.abs(event.deltaY) < WHEEL_DELTA_THRESHOLD) return;

      const handled = advance(event.deltaY > 0 ? 1 : -1);
      if (handled) event.preventDefault();
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartYRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      // Blocks drag-scrolling through the middle of a card once engaged —
      // only a full swipe (handled on touchend) is allowed to move a slide.
      if (isEngagedRef.current) event.preventDefault();
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (!isEngagedRef.current || touchStartYRef.current === null) return;
      if (isSnappingRef.current) return;

      const endY = event.changedTouches[0]?.clientY ?? touchStartYRef.current;
      const distance = touchStartYRef.current - endY;
      touchStartYRef.current = null;

      if (Math.abs(distance) < SWIPE_DISTANCE_THRESHOLD) return;
      advance(distance > 0 ? 1 : -1);
    };

    window.addEventListener("scrollend", handleScrollEnd);
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("scrollend", handleScrollEnd);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      clearTimeout(snapTimeoutRef.current);
    };
  }, [prefersReducedMotion, advance]);

  return (
    <div className="flex flex-col">
      {cards.map(({ id, ...card }, index) => (
        <div
          key={id}
          ref={(node) => {
            slideRefs.current[index] = node;
          }}
          className="flex min-h-screen w-full items-center justify-center py-12"
        >
          <TravelFeedCard {...card} />
        </div>
      ))}
    </div>
  );
};
