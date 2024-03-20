"use client";

import HeroSection from "@/sections/hero-section";
import ParaloxCards from "@/sections/paralox-cards";
import PerspectiveImage from "@/sections/perspective-image";
import ReviewSection from "@/sections/reviews-section";
import type { FC, PropsWithChildren } from "react";

const HomepageContent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <HeroSection />
      <PerspectiveImage />
      <ParaloxCards />
      <ReviewSection />
      <ReviewSection />
    </main>
  );
};

export default HomepageContent;
