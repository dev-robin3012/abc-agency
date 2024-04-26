"use client";

import CaseStudiesSection from "@/sections/case-studies";
import GallarySection from "@/sections/gallary";
import HeroSection from "@/sections/hero-section";
import ParaloxCards from "@/sections/paralox-cards";
import PerspectiveImage from "@/sections/perspective-image";
import TestimonialSection from "@/sections/testimonials";
import type { FC } from "react";

const HomepageContent: FC = () => (
  <main>
    <HeroSection />
    <PerspectiveImage />
    <ParaloxCards />
    <GallarySection />
    <CaseStudiesSection />
    <TestimonialSection />
  </main>
);

export default HomepageContent;
