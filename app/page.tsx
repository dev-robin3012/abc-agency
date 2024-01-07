import CardSection from "@/containers/card-section";
import PartnersSection from "@/containers/partners";
import HeroSection from "@/sections/hero-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnersSection />
      <CardSection />
    </main>
  );
}
