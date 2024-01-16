import { motion } from "framer-motion";
import type { FC } from "react";
import MenuItem from "./menu-item";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation: FC = () => (
  <motion.ul variants={variants} className="h-full flex flex-col justify-center">
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];

export default Navigation;
