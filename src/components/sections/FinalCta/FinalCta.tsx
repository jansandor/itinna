"use client";

import { RevealText } from "@/components";
import { useInViewOnce } from "@/hooks";
import { FeedStack } from "./components";

const SWEEP_TRIGGER_ROOT_MARGIN = "0px 0px -75% 0px";

// Placeholder feed content shared by every card for now — each will get
// its own image/video and details once real creator content is wired up.
const FEED_CARD = {
  imageSrc: "/images/for-creators/for-creators.png",
  imageAlt: "Traveler filming a mountain view for a guide",
  creatorName: "Maya Thompson",
  creatorAvatarSrc: "/images/reviews/maya-thompson.png",
  creatorAvatarAlt: "Portrait of Maya Thompson",
  location: "Dolomites · Italy",
  caption: "A place that feels unreal 🏔️",
  hashtags: ["dolomites", "hiking", "nature"],
  likes: "15.2K",
  comments: "301",
  saves: "4.8K",
};

const FEED_CARDS = ["card-1", "card-2", "card-3", "card-4", "card-5"].map(
  (id) => Object.assign({ id }, FEED_CARD),
);

export const FinalCta = () => {
  const [sectionRef, hasEntered] = useInViewOnce<HTMLElement>(
    0,
    SWEEP_TRIGGER_ROOT_MARGIN,
  );

  return (
    <section ref={sectionRef} className="py-16">
      <h2 className="text-display font-heading mb-8 font-semibold">
        Where will you go next?
      </h2>
      <RevealText
        text="Find your next adventure."
        active={hasEntered}
        className="text-title font-body pb-9 pl-6 font-normal tracking-wide"
      />
      <FeedStack cards={FEED_CARDS} />
    </section>
  );
};
