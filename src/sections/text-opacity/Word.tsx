import { motion, useTransform, type MotionValue } from "framer-motion";
import type { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  range: number[];
  progress: MotionValue;
}

const Word: FC<Props> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative">
      <span className="opacity-10 absolute">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default Word;
