"use client";

import heroImage from "@/assets/heroImage.png";
import Button from "@/components/button";
import Typography from "@/components/typography";
import Image from "next/image";
import { FC, useRef, useState } from "react";

const HeroSection: FC = () => {
  const [imageAngle, setImageAngle] = useState(12);
  const testRef = useRef<HTMLDivElement>(null);

  document.addEventListener("scroll", () => {
    const box = testRef.current?.getBoundingClientRect();
    // @ts-ignore
    const angle = Math.floor(box?.y / 150) * 2;

    Math.sign(angle) >= 0 ? setImageAngle(angle) : setImageAngle(0);
  });

  return (
    <section className="text-center pt-[120px]">
      <Typography varient="h1">
        <span className="animate-primaryHighlight">Innovative Solutions</span>
        <br /> for a <span className="animate-secondaryHighlight">Digital World</span> <br />{" "}
        <span className="animate-gradiantHighlight">Trusted Agency</span>
      </Typography>

      <Typography varient="h4" className="mt-10">
        Elevate Your Brand: Powerhouse Agency for Impactful Strategies
      </Typography>

      <div className="flex items-center gap-6 justify-center my-20 ">
        <Button>Our Services</Button>
        <Button>Work With Us</Button>
      </div>

      <div
        className="transition-all duration-700"
        ref={testRef}
        style={{ transform: `perspective(500px) rotateX(${imageAngle}deg)` }}
      >
        <Image src={heroImage} alt="" className="mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
