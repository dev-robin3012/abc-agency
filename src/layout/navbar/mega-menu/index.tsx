import clsx from "clsx";
import { motion } from "framer-motion";
import { ReactNode, useState, type FC } from "react";

interface Props {
  items: { label: string; menu: ReactNode }[];
}

const MegaMenu: FC<Props> = ({ items }) => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [active, setActive] = useState("");

  const activeItem = items.find((item) => item.label === active);

  return (
    <div
      className="flex items-center"
      onMouseEnter={() => setShowMegaMenu(true)}
      onMouseLeave={() => setShowMegaMenu(false)}
    >
      {items.map((item, key) => (
        <motion.div
          key={key}
          onMouseEnter={() => setActive(item.label)}
          // onMouseLeave={() => setActive("")}
          className="py-2.5 font-semibold cursor-pointer"
        >
          <span className="relative px-10">
            {item.label}

            {showMegaMenu && active === item.label && (
              <motion.span
                layoutId="arrow-up"
                className="absolute left-0 right-0 top-full w-0 h-0 border-x-[14px] border-x-transparent border-b-[28px] border-b-primary-light block mx-auto"
              />
            )}
          </span>
        </motion.div>
      ))}

      <motion.section
        className={clsx("absolute right-0 top-full h-fit w-fit pt-3 z-10")}
        initial="closed"
        animate={showMegaMenu ? "open" : "closed"}
        variants={{
          open: {
            display: "block",
            transform: "scale(1)",
            transformOrigin: "top",
          },
          closed: {
            transform: "scale(0)",
            transformOrigin: "top",
            transitionEnd: {
              display: "none",
            },
          },
        }}
      >
        {activeItem?.menu}
      </motion.section>
    </div>
  );
};

export default MegaMenu;
