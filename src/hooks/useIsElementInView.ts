import { useEffect, useState } from "react";

// Tracks whether the element with `elementId` is still (at least partially)
// intersecting the viewport, offset by `offsetPx` from the top. Defaults to
// `true` so a target that starts in view (e.g. the Hero) never flashes the
// "out of view" state on first paint, before the observer attaches.
export const useIsElementInView = (elementId: string, offsetPx: number = 0) => {
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const target = document.getElementById(elementId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: `-${offsetPx}px 0px 0px 0px`, threshold: 0 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [elementId, offsetPx]);

  return isInView;
};
