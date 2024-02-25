import { motion } from "framer-motion";
import type { FC } from "react";
import { navItems } from "../nav-items";
import MenuItem from "./menu-item";

const Navigation: FC = () => (
  <motion.ul
    variants={{
      open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
      },
      closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
      },
    }}
    className="h-full flex flex-col gap-3 justify-center text-dark"
  >
    {navItems.map((item, key) => (
      <MenuItem key={key} {...item} />
    ))}
  </motion.ul>
);

export default Navigation;
