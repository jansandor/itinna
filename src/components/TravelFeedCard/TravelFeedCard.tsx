import Image from "next/image";
import {
  BookmarkIcon,
  CommentIcon,
  HeartIcon,
  MoreIcon,
  SendIcon,
} from "./components";

export interface TravelFeedCardProps {
  imageSrc: string;
  imageAlt: string;
  creatorName: string;
  creatorAvatarSrc: string;
  creatorAvatarAlt: string;
  location: string;
  caption: string;
  hashtags: string[];
  likes: string;
  comments: string;
  saves: string;
  className?: string;
}

// Portrait, 9:16 social-feed-style card: full-bleed photo/video with a
// dark gradient overlay, creator identity up top, action rail on the
// right, and caption/hashtags pinned to the bottom.
export const TravelFeedCard = ({
  imageSrc,
  imageAlt,
  creatorName,
  creatorAvatarSrc,
  creatorAvatarAlt,
  location,
  caption,
  hashtags,
  likes,
  comments,
  saves,
  className = "",
}: TravelFeedCardProps) => {
  return (
    <div
      className={`relative aspect-9/16 w-full max-w-105 overflow-hidden rounded-[2.5rem] ${className}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(min-width: 1024px) 420px, 90vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/5 to-black/85" />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-6">
        <div className="flex items-center gap-3">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white/50">
            <Image
              src={creatorAvatarSrc}
              alt={creatorAvatarAlt}
              fill
              sizes="44px"
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-body font-body font-semibold text-white">
              {creatorName}
            </p>
            <p className="text-small font-body font-normal text-white/70">
              {location}
            </p>
          </div>
        </div>
        <MoreIcon className="h-6 w-6 shrink-0 text-white/80" />
      </div>

      <div className="absolute right-5 bottom-36 flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-1.5">
          <HeartIcon className="h-7 w-7 text-white" />
          <span className="text-small font-body font-medium text-white">
            {likes}
          </span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <CommentIcon className="h-7 w-7 text-white" />
          <span className="text-small font-body font-medium text-white">
            {comments}
          </span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <BookmarkIcon className="h-7 w-7 text-white" />
          <span className="text-small font-body font-medium text-white">
            {saves}
          </span>
        </div>
        <SendIcon className="h-7 w-7 shrink-0 text-white" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 pr-20">
        <p className="text-body font-body font-medium text-white">{caption}</p>
        <div className="flex flex-wrap gap-2">
          {hashtags.map((tag) => (
            <span
              key={tag}
              className="text-small font-body rounded-full bg-white/15 px-3 py-1 text-white backdrop-blur-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
