import Image from "next/image";
import { GUIDE_CARD_FEATURES, type GuideCardData } from "../data";

type GuideCardProps = GuideCardData;

export const GuideCard = ({ image, alt }: GuideCardProps) => {
  return (
    <div className="flex w-full max-w-75 flex-col">
      <div className="relative h-100 w-full overflow-hidden rounded-t-3xl">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 300px, 80vw"
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-8 pt-8">
        {GUIDE_CARD_FEATURES.map(({ icon: Icon, title, subtitle }) => (
          <div key={title} className="flex items-start gap-4">
            <Icon className="mt-0.5 h-6 w-6 shrink-0 text-white" />
            <div className="flex flex-col gap-1">
              <p className="text-title font-body font-semibold text-white">
                {title}
              </p>
              <p className="text-small font-body font-normal text-white/60">
                {subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
