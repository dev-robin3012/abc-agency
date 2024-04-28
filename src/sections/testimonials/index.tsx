import Container from "@/components/container";
import Typography from "@/components/typography";
import type { FC } from "react";
import Slider from "./slider";

const TestimonialSection: FC = () => {
  return (
    <section className="py-32">
      <Container className="space-y-5">
        <div className="mb-10">
          <Typography.H2>Testimonials</Typography.H2>
          <Typography.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolore provident
            quae consectetur sunt modi qui! Ab, facere. Doloremque dolorem iusto officiis magni ad
            optio iure nulla provident! Quo, voluptate.
          </Typography.Text>
        </div>

        <Slider moveTo="left" speed={45000} />
        <Slider moveTo="right" speed={50000} />
        <Slider moveTo="left" speed={55000} />
      </Container>
    </section>
  );
};

export default TestimonialSection;
