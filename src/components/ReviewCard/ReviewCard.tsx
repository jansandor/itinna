import Image from "next/image";
import { GlassBox } from "@/components";

interface ReviewCardProps {
  quote: string;
  name: string;
  meta: string;
  avatarSrc: string;
  avatarAlt: string;
  className?: string;
}

// Testimonial card built on top of GlassBox, sized to stay visually balanced
// across cards with quotes of different lengths (avatar row always pinned
// to the bottom via the flex layout).
export const ReviewCard = ({
  quote,
  name,
  meta,
  avatarSrc,
  avatarAlt,
  className = "",
}: ReviewCardProps) => {
  return (
    <GlassBox
      className={`flex h-full flex-col justify-between gap-10 border-white/35 px-8 py-9 ${className}`}
    >
      <div className="flex flex-col gap-4">
        <span
          aria-hidden
          className="font-heading text-[40px] leading-none font-bold text-white/65"
        >
          “
        </span>
        <p className="text-body font-editorial text-[18px] leading-7 font-normal tracking-wide text-white">
          {quote}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
          <Image
            src={avatarSrc}
            alt={avatarAlt}
            fill
            sizes="56px"
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-body font-body text-[18px] font-semibold text-white">
            {name}
          </p>
          <p className="text-body font-body font-normal text-white/65">
            {meta}
          </p>
        </div>
      </div>
    </GlassBox>
  );
};
