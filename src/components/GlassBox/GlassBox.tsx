import type { ReactNode } from "react";

interface GlassBoxProps {
  children: ReactNode;
  className?: string;
}

const style = "rounded-3xl border border-white/10 bg-black/5 backdrop-blur-sm";
// const style = "rounded-3xl border border-white/10 bg-black/10 backdrop-blur-sm";

// Reusable glass surface for placing content over photography/video backgrounds.
export const GlassBox = ({ children, className = "" }: GlassBoxProps) => {
  return <div className={`${style} ${className}`}>{children}</div>;
};
