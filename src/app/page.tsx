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
      <main className="mx-auto max-w-6xl">
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
