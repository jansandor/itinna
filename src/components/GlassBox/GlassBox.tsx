import type { ReactNode } from "react";

interface GlassBoxProps {
  children: ReactNode;
  className?: string;
}

// Reusable glass surface for placing content over photography/video backgrounds.
export const GlassBox = ({ children, className = "" }: GlassBoxProps) => {
  return (
    <div
      className={`rounded-3xl border border-white/15 bg-white/10 shadow-lg shadow-black/10 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
};
