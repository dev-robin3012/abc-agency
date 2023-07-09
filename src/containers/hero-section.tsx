import heroImage from "@/assets/heroImage.png";
import Button from "@/components/button";
import Typography from "@/components/typography";
import Image from "next/image";
import { FC } from "react";

const HeroSection: FC = () => {
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

      <div className="">
        <Image src={heroImage} alt="" className="mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
