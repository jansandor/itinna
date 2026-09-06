import type { SVGProps } from "react";

const defaultProps: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m20 20-4.8-4.8" />
  </svg>
);

export const MapFoldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M9 3 3 5v16l6-2 6 2 6-2V3l-6 2-6-2Z" />
    <path d="M9 3v16" />
    <path d="M15 5v16" />
  </svg>
);

export const BookmarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M6 3.5h12v17l-6-4-6 4v-17Z" />
  </svg>
);

export const CompassIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M12 2.5 20 21l-8-4.5L4 21l8-18.5Z" />
  </svg>
);

export const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M12 20s-7-4.4-9.3-9C1.3 8 2.7 4.8 5.8 4.1c2-.5 3.8.4 6.2 2.7 2.4-2.3 4.2-3.2 6.2-2.7 3.1.7 4.5 3.9 3.1 6.9C19 15.6 12 20 12 20Z" />
  </svg>
);

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
  </svg>
);

export const PeopleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <circle cx="9" cy="8.5" r="3.2" />
    <path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6" />
    <path d="M15.5 6.2c1.6.3 2.8 1.7 2.8 3.3 0 1.5-1 2.8-2.3 3.2" />
    <path d="M16 14.3c2.3.5 4 2.6 4 5.2" />
  </svg>
);

export const ChartBarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M5 20V13" />
    <path d="M12 20V7" />
    <path d="M19 20v-6" />
  </svg>
);

export const TrophyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
    <path d="M7 5H4v1.5A3.5 3.5 0 0 0 7.5 10" />
    <path d="M17 5h3v1.5A3.5 3.5 0 0 1 16.5 10" />
    <path d="M12 14v3" />
    <path d="M8.5 20.5h7" />
    <path d="M9.5 17.5h5l1 3h-7l1-3Z" />
  </svg>
);

export const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="m12 3 2.6 5.6 6.1.6-4.6 4.2 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.2 6.1-.6L12 3Z" />
  </svg>
);
