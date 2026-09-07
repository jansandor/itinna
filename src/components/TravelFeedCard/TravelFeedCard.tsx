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
  videoSrc?: string;
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

// Portrait, 9:16 social-feed-style card: large full-bleed photo/video kept
// true to its original color, creator identity + caption/hashtags pinned
// to the bottom, action rail on the right, controls top-right.
export const TravelFeedCard = ({
  imageSrc,
  imageAlt,
  videoSrc,
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
      // Width scales with the viewport on every axis: the 800px cap
      // preserves the original size once the viewport is tall enough, and
      // the calc() term caps height at (100vh - 128px) so it never exceeds
      // the viewport at any zoom level (128px covers the slide's own 96px
      // of py-12 padding plus a little extra slack) while staying much
      // closer to full size than a fixed vh fraction would on typical
      // screens.
      className={`relative aspect-9/16 w-[min(800px,calc((100vh_-_128px)*0.5625),100%)] overflow-hidden rounded-[2.5rem] ${className}`}
    >
      {videoSrc ? (
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={videoSrc}
          poster={imageSrc}
          aria-label={imageAlt}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      ) : (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 800px, 90vw"
          className="object-cover object-center"
        />
      )}
      {/* Localized to the bottom third only, so the image itself stays bright and unfiltered */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-b from-transparent to-black/80" />

      <div className="absolute inset-x-0 top-0 flex justify-end p-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/25 backdrop-blur-sm">
          <MoreIcon className="h-5 w-5 shrink-0 text-white" />
        </div>
      </div>

      <div className="absolute right-6 bottom-52 flex flex-col items-center gap-6">
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

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 pr-20">
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
