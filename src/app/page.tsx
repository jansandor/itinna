import {
  Explore,
  FinalCta,
  Footer,
  ForCreators,
  Hero,
  HowItWorks,
  Reviews,
} from "@/components/sections";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <main className="mx-auto flex w-full max-w-7xl flex-col">
        <Explore />
        <HowItWorks />
        <ForCreators />
        <Reviews />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
