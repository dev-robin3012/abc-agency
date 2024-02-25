import clsx from "clsx";
import { motion } from "framer-motion";
import { useState, type FC } from "react";
import { INavItem } from "../interface";
import CategoriesMenu from "./mega-menu/categories";
import ProductsMenu from "./mega-menu/products";
import ServicesMenu from "./mega-menu/services";

interface Props {
  items: INavItem[];
}

const menus = {
  categories: <CategoriesMenu />,
  services: <ServicesMenu />,
  products: <ProductsMenu />,
};

const MegaItems: FC<Props> = ({ items }) => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [active, setActive] = useState("");

  //   @ts-ignore
  const activeMenu = menus[active.toLowerCase()];

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
                transition={{
                  duration: 0.5,
                }}
                className="absolute left-0 right-0 top-full w-0 h-0 border-x-[14px] border-x-transparent border-b-[28px] border-b-primary-light block mx-auto"
              />
            )}
          </span>
        </motion.div>
      ))}

      {/* THis is the mega menu */}
      <motion.section
        className={clsx("absolute right-0 top-full h-fit w-fit pt-3 z-10")}
        initial="closed"
        animate={showMegaMenu ? "open" : "closed"}
        variants={{
          open: {
            display: "block",
            transform: "perspective(0px) rotateX(0)",
            transformOrigin: "top",
            opacity: 1,
          },
          closed: {
            transform: "perspective(0px) rotateX(-0.02deg)",
            transformOrigin: "top",
            opacity: 0,
            transitionEnd: {
              display: "none",
            },
          },
        }}
        transition={{
          duration: 0.4,
        }}
      >
        {activeMenu}
      </motion.section>
    </div>
  );
};

export default MegaItems;
