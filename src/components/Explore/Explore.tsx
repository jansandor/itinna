import { SECTION } from "@/const";
import { GuideCard } from "./components";
import { GUIDE_CARDS } from "./data";

export const Explore = () => {
  return (
    <section id={SECTION.EXPLORE} className="py-16">
      <h2 className="text-display font-heading mb-8 font-semibold">Explore</h2>
      <p className="text-title font-body pb-9 pl-6 font-normal tracking-wide text-white/80">
        Everything you need for a better trip, in one place.
      </p>
      <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-16">
        {GUIDE_CARDS.map((card) => (
          <GuideCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};
