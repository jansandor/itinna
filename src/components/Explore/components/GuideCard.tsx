import Image from "next/image";
import { GUIDE_CARD_FEATURES, type GuideCardData } from "../data";

type GuideCardProps = GuideCardData;

export const GuideCard = ({ image, alt }: GuideCardProps) => {
  return (
    <div className="flex w-full max-w-90 flex-col">
      <div className="group relative h-150 w-full overflow-hidden rounded-3xl">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 300px, 80vw"
          className="object-cover object-center motion-safe:transition-transform motion-safe:duration-600 motion-safe:ease-out motion-safe:group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-8 pt-8 pl-8">
        {GUIDE_CARD_FEATURES.map(({ icon: Icon, title, subtitle }) => (
          <div key={title} className="flex items-center gap-4">
            <Icon className="h-8 w-8 shrink-0 text-white" />
            <div className="flex flex-col">
              <p className="text-title font-body text-[20px] font-semibold text-white">
                {title}
              </p>
              <p className="text-body font-body font-normal text-white/65">
                {subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
