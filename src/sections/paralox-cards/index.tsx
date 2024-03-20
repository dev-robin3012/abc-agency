import Container from "@/components/container";
import { motion, useScroll } from "framer-motion";
import { useRef, type FC } from "react";
import ParaloxCard from "./card";

const colors = ["#1d4ed8", "#7e22ce", "#be185d", "#047857", "#c2410c"];

const ParaloxCards: FC = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <motion.section ref={sectionRef}>
      <Container className="pb-32">
        {colors.map((color, index) => (
          <ParaloxCard
            key={index}
            index={index}
            range={[0 * 0.25, 1]}
            targetScale={1 - (5 - index) * 0.05}
            progress={scrollYProgress}
          />
        ))}
      </Container>
    </motion.section>
  );
};

export default ParaloxCards;
