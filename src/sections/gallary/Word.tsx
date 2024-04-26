import { motion, useTransform, type MotionValue } from "framer-motion";
import type { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  range: number[];
  progress: MotionValue;
  index: number;
}

const Word: FC<Props> = ({ children, progress, range, index }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <motion.span
      className="relative"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          delay: 0.06 * index,
          duration: 1,
          type: "spring",
          stiffness: 100,
        },
      }}
      viewport={{ once: true }}
    >
      <span className="opacity-10 absolute">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </motion.span>
  );
};

export default Word;
