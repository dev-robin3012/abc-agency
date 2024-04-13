"use client";

import HeroSection from "@/sections/hero-section";
import PerspectiveImage from "@/sections/perspective-image";
import ReviewSection from "@/sections/reviews-section";
import type { FC } from "react";

const HomepageContent: FC = () => (
  <main>
    <HeroSection />
    <PerspectiveImage />
    {/* <ParaloxCards /> */}
    <ReviewSection />
    <ReviewSection />
  </main>
);

export default HomepageContent;
