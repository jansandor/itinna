import {
  Explore,
  FinalCta,
  Footer,
  ForCreators,
  Hero,
  HowItWorks,
} from "@/components/sections";

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
