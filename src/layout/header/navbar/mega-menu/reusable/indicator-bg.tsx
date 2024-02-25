import { motion } from "framer-motion";
import type { FC } from "react";

const IndicatorBg: FC = () => (
  <motion.span
    layout
    layoutId="indicator-bg"
    className="absolute top-0 left-0 bottom-0 w-full bg-primary-light rounded-md before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:-right-4 before:h-0 before:w-0 before:border-y-[10px] before:border-y-transparent before:border-l-[20px] before:border-primary-light after:absolute after:top-1/2 after:transform after:-translate-y-1/2 after:-right-11 after:h-0 after:w-0 after:border-y-[10px] after:border-y-transparent after:border-l-[20px] after:border-primary-light -z-10"
  />
);

export default IndicatorBg;
