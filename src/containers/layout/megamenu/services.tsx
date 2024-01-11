import menuContent from "@/assets/megaMenuContent.js";
import Typography from "@/components/typography";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";

const ServicesMenu: FC = () => {
  const [active, setActive] = useState(menuContent.Services[0]?.id);

  const { services } = menuContent.Services.find((el: any) => el.id === active) || {};

  return (
    <div className="bg-[#1E2A37] p-4 relative rounded-[20px] w-[632px] grid gap-2 grid-cols-2 shadow-xl">
      <ul className="bg-dark px-4 py-3 rounded-[10px] space-y-2 col-span-1">
        {menuContent.Services.map((item: any) => (
          <li
            key={item.id}
            className={`${
              item.id === active
                ? "bg-[#D3F699] text-dark relative after:absolute after:-right-3 after:top-1/2 after:-translate-y-1/2  after:h-0 after:w-0 after:border-t-[10px] after:border-y-transparent after:border-b-[10px] after:border-l-[15px] after:border-l-[#D3F699] before:absolute before:-right-9 before:top-1/2 before:-translate-y-1/2  before:h-0 before:w-0 before:border-t-[10px] before:border-y-transparent before:border-b-[10px] before:border-l-[15px] before:border-l-[#1E2A37]"
                : ""
            } p-4 rounded-lg cursor-default transition-all duration-700`}
            onMouseEnter={() => setActive(item.id)}
          >
            <Typography.H5>{item.title}</Typography.H5>
            <Typography.Text variant="small">{item.metaDesc}</Typography.Text>
          </li>
        ))}
      </ul>

      <div className="bg-dark col-span-1 p-4 rounded-[10px] ">
        <AnimatePresence>
          <ul>
            {services?.map((service: any) => (
              <motion.li
                key={service.id}
                className={`py-3 flex items-center gap-4 `}
                initial={{ y: -5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 5, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
                <div className="flex-1">
                  <Typography.H5>{service.title}</Typography.H5>
                  <Typography.Text variant="small">{service.metaDesc}</Typography.Text>
                </div>
              </motion.li>
            ))}
          </ul>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServicesMenu;
