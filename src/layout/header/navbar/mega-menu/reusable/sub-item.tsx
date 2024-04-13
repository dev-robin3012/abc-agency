import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import type { FC } from "react";

interface Props {
  icon: string;
  title: string;
  meta: string;
}

const SubItem: FC<Props> = ({ icon, meta, title }) => {
  return (
    <motion.li
      className={clsx("p-3 rounded-md relative group transition-all flex gap-3 origin-left w-max")}
      initial={{ transform: "scale(0.5)", opacity: 0 }}
      animate={{ transform: "scale(1)", opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
    >
      <Image src={icon} alt="" />
      <div>
        <span className="block whitespace-nowrap group-hover:text-primary">{title}</span>
        <span className="text-xs leading- block font-normal whitespace-nowrap">{meta}</span>
      </div>
    </motion.li>
  );
};

export default SubItem;
