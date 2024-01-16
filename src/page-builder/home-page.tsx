import HeroSection from "@/sections/hero-section";
import type { FC, PropsWithChildren } from "react";

const HomepageContent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <HeroSection />
    </main>
  );
};

export default HomepageContent;
