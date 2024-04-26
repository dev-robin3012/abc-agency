import { motion, useTransform, type MotionValue } from "framer-motion";
import type { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  progress: MotionValue;
}

const Character: FC<Props> = ({ children, progress }) => {
  const opacity = useTransform(progress, [1, 0], [0, 1]);

  //   console.log(opacity);

  return <motion.span>{children}</motion.span>;
};

export default Character;
