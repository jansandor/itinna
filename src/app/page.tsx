import { Explore, FinalCta, ForCreators, Hero, HowItWorks } from "@/components";
import { Footer } from "@/components/Footer";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <main className="mx-auto flex w-full max-w-7xl flex-col">
        <Explore />
        {/* // TODO tell them */}
        {/* <MeetCreators /> */}
        <HowItWorks />
        <ForCreators />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
