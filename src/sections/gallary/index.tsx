import Button from "@/components/button";
import Container from "@/components/container";
import Typography from "@/components/typography";
import useDimension from "@/hooks/useDimention";
import { useScroll, useTransform } from "framer-motion";
import { useRef, type FC } from "react";
import Word from "./Word";
import Column from "./column";

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, dolores? Perferendis adipisci maiores laborum? Harum sapiente atque consectet. Odit voluptatibus non magni ab facilis ullam error deserunt laborum, cum dolores!";

const words = text.split(" ");

const GallarySection: FC = () => {
  const { height } = useDimension();
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: textProgress } = useScroll({
    target: textRef,
    offset: ["start 0.9", "start 0.35"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.75]);

  return (
    <section className="py-32">
      <Container ref={containerRef} className="space-y-10">
        <div ref={textRef}>
          <Typography.Text className="text-5xl flex flex-wrap gap-4">
            {words.map((char, index) => {
              const start = index / words.length;
              const end = start + 1 / words.length;

              return (
                <Word key={index} index={index} range={[start, end]} progress={textProgress}>
                  {char}
                </Word>
              );
            })}
          </Typography.Text>
        </div>

        <div className="grid grid-cols-4 gap-4 overflow-hidden">
          <Column y={y} className="-top-[45%]" />
          <Column y={y2} className="-top-[75%]" />
          <Column y={y3} className="-top-[45%]" />
          <Column y={y4} className="-top-[75%]" />
        </div>

        <div className="flex justify-center">
          <Button>See More</Button>
        </div>
      </Container>
    </section>
  );
};

export default GallarySection;
