import clsx from "clsx";
import { motion } from "framer-motion";
import { useState, type FC } from "react";
import MegaMenu from ".";
import { megaMenu } from "../../nav-items";
import IndicatorBg from "./reusable/indicator-bg";
import SubItem from "./reusable/sub-item";

const { services } = megaMenu;

const ServicesMenu: FC = () => {
  const [active, setActive] = useState(services[0].title);

  const subItems: { title: string; meta: string; icon: any }[] =
    services.find((item) => item.title === active)?.subItems || [];

  return (
    <MegaMenu>
      <div className="p-5 bg-primary-light rounded-lg flex items-stretch gap-3">
        <motion.ul className="bg-dark p-4 rounded-md flex-1">
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

              {active === title && <IndicatorBg />}
            </motion.li>
          ))}
        </motion.ul>

        <div className="bg-dark p-4 rounded-md overflow-hidden flex ">
          <motion.ul>
            {subItems.map((item) => (
              <SubItem key={item.title} {...item} />
            ))}
          </motion.ul>

          {/* <div className="h-[100px] w-[200px] border border-primary"></div> */}
        </div>
      </div>
    </MegaMenu>
  );
};

export default ServicesMenu;
