import { motion, useCycle } from "framer-motion";
import MenuToggle from "./menu-trigger";

const sidebar = {
  open: {
    // clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    height: "100vh",
    width: "50%",
    // right: 0,
    // top: 0,

    transition: {
      type: "spring",
      stiffness: 200,
      restDelta: 2,
    },
  },
  closed: {
    // clipPath: "circle(30px at 40px 40px)",
    height: "3rem",
    width: "3.1rem",
    borderRadius: "50%",
    // top: "1.2rem",
    // right: "1rem",

    transition: {
      //   delay: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
};

const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  //   const containerRef = useRef(null);

  //   const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="flex items-center justify-center"
    >
      <MenuToggle toggle={() => toggleOpen()} />

      <motion.div
        variants={sidebar}
        className="fixed top-[1.2rem] right-[1rem] bg-white"
      ></motion.div>
      {/* <motion.nav
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      //   variants={sidebar}
      //   custom={height}
      //   ref={containerRef}
      className="absolute top-1/2 transform -translate-y-1/2 right-[1rem] rounded-full overflow-hidden bg-white"
    >
      <motion.div className="">
      </motion.div>
      <Navigation />
    </motion.nav> */}
    </motion.nav>
  );
};

export default MobileMenu;
