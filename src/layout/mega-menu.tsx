import { motion } from "framer-motion";
import { ReactNode, useState, type FC } from "react";

interface Props {
  label: string;
  menu: ReactNode;
}

const MegaMenu: FC<Props> = ({ label, menu }) => {
  const [active, setActive] = useState("");

  return (
    <motion.div
      onMouseEnter={() => setActive(label)}
      onMouseLeave={() => setActive("")}
      className="py-2 font-semibold cursor-pointer"
    >
      <span className="relative px-10 ">
        {label}
        {active === label && (
          <motion.div className="absolute left-0 right-0" layoutId="underline" layout>
            <span className="w-0 h-0 border-x-[14px] border-x-transparent border-b-[28px] border-b-gray block mx-auto"></span>
          </motion.div>
        )}
      </span>
      {active === label && menu}
    </motion.div>
  );
};

export default MegaMenu;
