"use client";

import { useScrollbarActivity } from "@/hooks";

// Reveals a subtle scrollbar indicator while scrolling, then fades it out.
export const ScrollbarActivity = () => {
  useScrollbarActivity();
  return null;
};
