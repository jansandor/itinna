"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks";
import { HERO_VIDEO_TRANSITION_DURATION_MS } from "../const";
import { BASE_CLASS, FRONT_CLASS, LayerIndex, otherLayer } from "./utils";

interface HeroVideoBackgroundProps {
  sources: string[];
}

export const HeroVideoBackground = ({ sources }: HeroVideoBackgroundProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const videoRef0 = useRef<HTMLVideoElement>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const frontLayerRef = useRef<LayerIndex>(0);
  const nextSourceIndexRef = useRef(
    sources.length > 1 ? 2 % sources.length : 0,
  );
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const [layerSrcs, setLayerSrcs] = useState<[string, string]>([
    sources[0] ?? "",
    sources[1 % Math.max(sources.length, 1)] ?? sources[0] ?? "",
  ]);
  // Only the front layer's visibility animates; the back layer is always
  // rendered opaque (just occluded behind the front layer) so the crossfade
  // is a pure opacity reveal rather than a `src` swap.
  const [frontLayer, setFrontLayer] = useState<LayerIndex>(0);
  const [frontVisible, setFrontVisible] = useState(true);

  const canCycle = sources.length > 1 && !prefersReducedMotion;

  // Kick off playback of the initially visible layer.
  useEffect(() => {
    videoRef0.current?.play().catch(() => {});
  }, []);

  useEffect(() => {
    if (!canCycle) return;

    let cancelled = false;

    const scheduleSwap = () => {
      timeoutRef.current = setTimeout(() => {
        if (cancelled) return;

        // Browsers pause invisible/occluded video-only elements to save
        // power, so explicitly resume the back layer right as it's revealed.
        const backLayer = otherLayer(frontLayerRef.current);
        const backLayerRef = backLayer === 0 ? videoRef0 : videoRef1;
        backLayerRef.current?.play().catch(() => {});
        setFrontVisible(false);

        timeoutRef.current = setTimeout(() => {
          if (cancelled) return;

          const revealedLayer = otherLayer(frontLayerRef.current);
          frontLayerRef.current = revealedLayer;
          setFrontLayer(revealedLayer);
          setFrontVisible(true);

          // Recycle the now-occluded layer with the next upcoming source.
          const recycledLayer = otherLayer(revealedLayer);
          const upcomingSrc = sources[nextSourceIndexRef.current];
          nextSourceIndexRef.current =
            (nextSourceIndexRef.current + 1) % sources.length;

          setLayerSrcs((prev) => {
            const updated: [string, string] = [...prev];
            updated[recycledLayer] = upcomingSrc;
            return updated;
          });

          scheduleSwap();
        }, HERO_VIDEO_TRANSITION_DURATION_MS);
      }, 7000);
    };

    scheduleSwap();

    return () => {
      cancelled = true;
      clearTimeout(timeoutRef.current);
    };
  }, [sources, canCycle]);

  if (sources.length === 0) return null;

  if (!canCycle) {
    return (
      <video
        className={BASE_CLASS}
        src={sources[0]}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
    );
  }

  const isFront0 = frontLayer === 0;
  const className0 = isFront0
    ? `${FRONT_CLASS} z-10 ${frontVisible ? "opacity-100" : "opacity-0"}`
    : `${BASE_CLASS} z-0 opacity-100`;
  const className1 = !isFront0
    ? `${FRONT_CLASS} z-10 ${frontVisible ? "opacity-100" : "opacity-0"}`
    : `${BASE_CLASS} z-0 opacity-100`;

  return (
    <>
      <video
        ref={videoRef0}
        className={className0}
        src={layerSrcs[0]}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <video
        ref={videoRef1}
        className={className1}
        src={layerSrcs[1]}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
    </>
  );
};
