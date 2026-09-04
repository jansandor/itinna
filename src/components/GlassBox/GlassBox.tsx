import type { ReactNode } from "react";

interface GlassBoxProps {
  children: ReactNode;
  className?: string;
}

// Reusable glass surface for placing content over photography/video backgrounds.
export const GlassBox = ({ children, className = "" }: GlassBoxProps) => {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-black/5 backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
};
