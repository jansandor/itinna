import type { SVGProps } from "react";

const defaultProps: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const MapIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M9 3 3 5v16l6-2 6 2 6-2V3l-6 2-6-2Z" />
    <path d="M9 3v16" />
    <path d="M15 5v16" />
  </svg>
);

export const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M4 19h16" />
  </svg>
);

export const PinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export const BookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M12 6.5c-1.5-1.3-3.6-2-6.5-2v13c2.9 0 5 .7 6.5 2 1.5-1.3 3.6-2 6.5-2V4.5c-2.9 0-5 .7-6.5 2Z" />
    <path d="M12 6.5v13" />
  </svg>
);

export const PersonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <circle cx="12" cy="7.5" r="3.5" />
    <path d="M4.5 21c0-4.1 3.4-7 7.5-7s7.5 2.9 7.5 7" />
  </svg>
);

export const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="m12 3 2.6 5.6 6.1.6-4.6 4.2 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.2 6.1-.6L12 3Z" />
  </svg>
);

export const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <rect x="3.5" y="5" width="17" height="15" rx="2" />
    <path d="M3.5 9.5h17" />
    <path d="M8 3v4" />
    <path d="M16 3v4" />
  </svg>
);

export const RouteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <circle cx="6" cy="18" r="2" />
    <circle cx="17.5" cy="6.5" r="2.3" />
    <path d="M7.4 16.6 11 13 15.7 13 15.7 8" />
  </svg>
);

export const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M12 20s-7-4.4-9.3-9C1.3 8 2.7 4.8 5.8 4.1c2-.5 3.8.4 6.2 2.7 2.4-2.3 4.2-3.2 6.2-2.7 3.1.7 4.5 3.9 3.1 6.9C19 15.6 12 20 12 20Z" />
  </svg>
);
