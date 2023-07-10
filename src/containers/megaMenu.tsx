import React, { FC, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import NavItem from "./navItem";
import Typography from "@/components/typography";
import Image from "next/image";
import logo from "@/assets/Logo-black.png";
import Button from "@/components/button";

interface MegaMenuProps {
  label: string;
  isActive: boolean;
  setActiveItem: (label: string) => void;
  data: any;
}

const MegaMenu: FC<MegaMenuProps> = ({ label, isActive, setActiveItem, data }) => {
  const [active, setActive] = useState(data[0]?.id);

  const { services } = data.find((el: any) => el.id === active) || {};

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <NavItem isActive={isActive} label={label} setActiveItem={setActiveItem} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        // @ts-ignore
        as={motion.div}
        initial={{ opacity: 0.5, y: 5, scaleX: 0.9, scaleY: 0.7 }}
        animate={{ opacity: 1, y: 0, scaleX: 1, scaleY: 1 }}
        className="bg-[#1E2A37] p-4 rounded-[20px] grid gap-2 grid-cols-3 shadow-xl max-w-[1050px]"
      >
        <ul className="bg-dark px-4 py-3 rounded-[10px] space-y-2 col-span-1">
          {data.map((item: any) => (
            <li
              key={item.id}
              className={`${
                item.id === active ? "bg-[#D3F699] text-dark " : ""
              } p-4 rounded-lg cursor-default transition-all duration-700`}
              onMouseEnter={() => setActive(item.id)}
            >
              <Typography>{item.title}</Typography>
              <Typography varient="small">{item.metaDesc}</Typography>
            </li>
          ))}
        </ul>

        <div className="bg-dark col-span-2 grid grid-cols-2 gap-10 p-4 rounded-[10px] ">
          <AnimatePresence>
            <ul>
              {services?.map((service: any) => (
                <motion.li
                  key={service.id}
                  className={`py-3 flex items-center gap-4`}
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 5, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                  <div className="flex-1">
                    <Typography>{service.title}</Typography>
                    <Typography varient="small">{service.metaDesc}</Typography>
                  </div>
                </motion.li>
              ))}
            </ul>
          </AnimatePresence>

          <div className="space-y-10">
            <div className="bg-primary p-10 rounded-2xl text-dark text-center space-y-6">
              <Image src={logo} alt="" className="mx-auto" />
              <Typography varient="h4">The Best Design Agency</Typography>
            </div>
            <Button fullWidth>Work With Arrioo</Button>
          </div>
        </div>

        <DropdownMenu.Arrow className="h-3 w-7 fill-[#1E2A37]" />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default MegaMenu;
