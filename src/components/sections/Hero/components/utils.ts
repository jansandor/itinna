export type LayerIndex = 0 | 1;

export const BASE_CLASS = "absolute inset-0 h-full w-full object-cover";
// The front layer animates its opacity to reveal the back layer beneath it.
export const FRONT_CLASS = `${BASE_CLASS} transition-opacity ease-in-out duration-[1750ms]`;

export const randomDurationMs = ([min, max]: [number, number]) =>
  min + Math.random() * (max - min);

export const otherLayer = (layer: LayerIndex): LayerIndex =>
  layer === 0 ? 1 : 0;
