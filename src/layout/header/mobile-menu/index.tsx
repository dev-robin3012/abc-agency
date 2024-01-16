import { motion, useCycle } from "framer-motion";
import type { FC } from "react";
import Navigation from "./navigation";
import MenuToggle from "./trigger";

const sidebar = {
  open: {
    display: "block",
    x: 0,
    zIndex: 40,
    transition: {
      ease: "linear",
      type: "tween",
      duration: 0.5,
      delayChildren: 0.5,
    },
  },

  closed: {
    x: "100%",
    transition: {
      delay: 0.5,
      ease: "linear",
      type: "tween",
      duration: 0.5,
    },
    transitionEnd: { display: "none" },
  },
};

const MobileMenu: FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="flex items-center justify-center lg:hidden"
    >
      <MenuToggle toggle={() => toggleOpen()} />

      <motion.nav
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebar}
        className="fixed w-2/3 md:w-1/2 top-0 bottom-0 right-0 bg-white flex items-center justify-center p-10"
      >
        <Navigation />
      </motion.nav>
    </motion.div>
  );
};

export default MobileMenu;
