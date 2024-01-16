import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, type FC } from "react";
import MegaMenu from ".";
import { megaMenu } from "../../nav-items";

const { services } = megaMenu;

const ServicesMenu: FC = () => {
  const [active, setActive] = useState(services[0].title);

  const subItems: { title: string; meta: string; icon: any }[] =
    services.find((item) => item.title === active)?.subItems || [];

  return (
    <MegaMenu>
      <div className="p-5 bg-primary-light rounded-lg flex items-stretch gap-3">
        <motion.ul className="bg-dark p-4 rounded-md">
          {services.map(({ title, meta }, key) => (
            <motion.li
              key={key}
              onMouseEnter={() => setActive(title)}
              className={clsx(
                "p-3 rounded-md relative group transition-colors z-10",
                active === title && "text-dark"
              )}
            >
              <span className="block whitespace-nowrap font-semibold">{title}</span>
              <span className="text-xs block font-normal">{meta}</span>

              {active === title && (
                <motion.span
                  layout
                  layoutId="indicator-bg"
                  className="absolute top-0 left-0 bottom-0 w-full bg-primary-light rounded-md before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:-right-4 before:h-0 before:w-0 before:border-y-[10px] before:border-y-transparent before:border-l-[20px] before:border-primary-light after:absolute after:top-1/2 after:transform after:-translate-y-1/2 after:-right-11 after:h-0 after:w-0 after:border-y-[10px] after:border-y-transparent after:border-l-[20px] after:border-primary-light -z-10"
                />
              )}
            </motion.li>
          ))}
        </motion.ul>

        <motion.ul className="bg-dark p-4 rounded-md">
          {subItems.map(({ title, meta, icon }) => (
            <motion.li
              key={title}
              className={clsx("p-3 rounded-md relative group transition-all flex gap-3")}
            >
              <Image src={icon} alt="" />
              <div>
                <span className="block whitespace-nowrap group-hover:text-primary">{title}</span>
                <span className="text-xs leading- block font-normal">{meta}</span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </MegaMenu>
  );
};

export default ServicesMenu;
