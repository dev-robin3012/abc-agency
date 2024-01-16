import { motion } from "framer-motion";
import type { FC, PropsWithChildren } from "react";

const MegaMenu: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div layoutId="menu" className="shadow-lg cursor-auto">
      {children}
    </motion.div>
  );
};

export default MegaMenu;
