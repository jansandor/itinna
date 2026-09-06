import type { SVGProps } from "react";

const defaultProps: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M12 20s-7-4.4-9.3-9C1.3 8 2.7 4.8 5.8 4.1c2-.5 3.8.4 6.2 2.7 2.4-2.3 4.2-3.2 6.2-2.7 3.1.7 4.5 3.9 3.1 6.9C19 15.6 12 20 12 20Z" />
  </svg>
);

export const CommentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 3.5V16H6a2 2 0 0 1-2-2V6Z" />
  </svg>
);

export const BookmarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M6 4h12v16l-6-4-6 4V4Z" />
  </svg>
);

export const SendIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22 11 13 2 9 22 2Z" />
  </svg>
);

export const MoreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <circle cx="12" cy="5.5" r="1.6" />
    <circle cx="12" cy="12" r="1.6" />
    <circle cx="12" cy="18.5" r="1.6" />
  </svg>
);
