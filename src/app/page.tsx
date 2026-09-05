import {
  Explore,
  FinalCta,
  ForCreators,
  Hero,
  HowItWorks,
  MeetCreators,
} from "@/components";
import { Footer } from "@/components/Footer";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <main className="mx-auto flex w-full max-w-6xl flex-col">
        <Explore />
        <MeetCreators />
        <HowItWorks />
        <ForCreators />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
