import CardSection from "@/containers/card-section";
import HeroSection from "@/containers/hero-section";
import HighlightSection from "@/containers/highlight-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HighlightSection />
      <CardSection />
    </main>
  );
}
