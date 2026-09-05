import { SECTION } from "@/const";
import { GuideCard } from "./components";
import { GUIDE_CARDS } from "./data";

export const Explore = () => {
  return (
    <section id={SECTION.EXPLORE} className="py-16">
      <h2 className="text-heading font-heading font-semibold">Explore</h2>
      <p className="text-title font-body font-normal tracking-wide">
        Everything you need for a better trip, in one place.
      </p>
      <div className="mt-12 flex flex-wrap items-start justify-center gap-x-8 gap-y-16">
        {GUIDE_CARDS.map((card) => (
          <GuideCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};
