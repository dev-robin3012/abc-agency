import { motion } from "framer-motion";
import type { FC } from "react";

const CategoriesMenu: FC = () => {
  return (
    <motion.div
      layoutId="menu"
      className="absolute right-0 shadow-lg cursor-auto pt-5"
      initial="hidden"
      animate="visible"
    >
      <div className="w-[700px] p-5 bg-gray rounded-lg">
        <p className="p-5 bg-dark rounded-md">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid non aperiam asperiores
          fugiat a officiis quos dolorum! Pariatur saepe quam dicta quia quo vel dignissimos illo,
          aliquid minus, officia consequatur. fugiat a officiis quos dolorum! Pariatur saepe quam
          dicta quia quo vel dignissimos illo, aliquid minus, officia consequatur.
        </p>
      </div>
    </motion.div>
  );
};

export default CategoriesMenu;
