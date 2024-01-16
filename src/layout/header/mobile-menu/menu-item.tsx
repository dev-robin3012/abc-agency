import { motion } from "framer-motion";
import { FC } from "react";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const MenuItem: FC<any> = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="list-none mb-5 flex items-center cursor-pointer"
    >
      <div className="w-10 h-10 rounded-full mr-5" style={style} />
      <div className="rounded w-[200px] h-5 flex-1" style={style} />
    </motion.li>
  );
};

export default MenuItem;
