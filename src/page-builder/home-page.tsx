"use client";

import HeroSection from "@/sections/hero-section";
import PerspectiveImage from "@/sections/perspective-image";
import ReviewSection from "@/sections/reviews-section";
import Showcase from "@/sections/show-case";
import type { FC, PropsWithChildren } from "react";

const HomepageContent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <HeroSection />
      <PerspectiveImage />
      <Showcase />
      <ReviewSection />
      <ReviewSection />
    </main>
  );
};

export default HomepageContent;
