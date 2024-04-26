import Button from "@/components/button";
import Container from "@/components/container";
import Icon from "@/components/icons";
import Typography from "@/components/typography";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type FC } from "react";

interface Props {
  title: string;
  subTitle: string;
}

const StudyContent: FC<Props> = ({ title, subTitle }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);

  return (
    <motion.article ref={targetRef} className="absolute inset-0 flex items-center justify-center">
      <Container>
        <motion.div style={{ y, opacity }}>
          <Typography.H3>{subTitle}</Typography.H3>
          <Typography.H2 className="text-6xl font-bold text-primary">{title}</Typography.H2>
          <Typography.Text className="text-2xl my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius
            quam modi aliquam quaerat odit deleniti minima maiores voluptate est ut saepe
            accusantium maxime doloremque nulla consectetur possimus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Accusantium reiciendis blanditiis aliquam aut fugit sint.
            consectetur adipisicing elit. Accusantium reiciendis blanditiis aliquam aut fugit sint.
            consectetur adipisicing elit. Accusantium reiciendis blanditiis aliquam aut fugit sint.
            consectetur adipisicing elit. Accusantium reiciendis blanditiis aliquam aut fugit sint.
            consectetur adipisicing elit. Accusantium reiciendis blanditiis aliquam aut fugit sint.
            consectetur adipisicing elit. Accusantium reiciendis blanditiis aliquam aut fugit sint.
            consectetur adipisicing elit. Accusantium reiciendis blanditiis aliquam aut fugit sint.
          </Typography.Text>
          <Button variant="outline" icon={<Icon name="arrowRight" />}>
            Learn More
          </Button>
        </motion.div>
      </Container>
    </motion.article>
  );
};

export default StudyContent;
