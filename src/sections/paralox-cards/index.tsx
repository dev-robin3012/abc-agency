import Container from "@/components/container";
import { motion, useScroll } from "framer-motion";
import { useRef, type FC } from "react";
import ParaloxCard from "./card";
import cardsData from "./card-content";

const ParaloxCards: FC = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <motion.section ref={sectionRef} className="mt-36">
      <Container>
        {cardsData.map((card, index) => (
          <ParaloxCard
            key={index}
            index={index}
            range={[0 * 0.25, 1]}
            targetScale={1 - (5 - index) * 0.05}
            progress={scrollYProgress}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </Container>
    </motion.section>
  );
};

export default ParaloxCards;
