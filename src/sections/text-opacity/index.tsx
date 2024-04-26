import Container from "@/components/container";
import Typography from "@/components/typography";
import { motion, useScroll } from "framer-motion";
import { useRef, type FC } from "react";
import Word from "./Word";

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, dolores? Perferendis adipisci maiores laborum? Harum sapiente atque consectet. Odit voluptatibus non magni ab facilis ullam error deserunt laborum, cum dolores!";

const TextOpacity: FC = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <motion.section className="pt-32 pb-16" ref={ref}>
      <Container>
        <Typography.Text className="text-5xl flex flex-wrap gap-4">
          {words.map((char, index) => {
            const start = index / words.length;
            const end = start + 1 / words.length;

            return (
              <Word key={index} range={[start, end]} progress={scrollYProgress}>
                {char}
              </Word>
            );
          })}
        </Typography.Text>
      </Container>
    </motion.section>
  );
};

export default TextOpacity;
