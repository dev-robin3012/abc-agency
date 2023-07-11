import CardSection from "@/containers/card-section";
import HeroSection from "@/containers/hero-section";
import PartnersSection from "@/containers/partners";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnersSection />
      <CardSection />
    </main>
  );
}
