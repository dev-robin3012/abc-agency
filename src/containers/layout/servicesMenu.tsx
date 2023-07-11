import Typography from "@/components/typography";
import { FC, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/Logo-black.png";
import Button from "@/components/button";

const ProjectsMenu: FC = ({ data }: any) => {
  const [active, setActive] = useState(data[0]?.id);

  const { services } = data.find((el: any) => el.id === active) || {};

  return (
    <DropdownMenu.Content
      // @ts-ignore
      as={motion.div}
      initial={{ opacity: 0.5, y: 5, scaleX: 0.9, scaleY: 0.7 }}
      animate={{ opacity: 1, y: 0, scaleX: 1, scaleY: 1 }}
      className="bg-[#1E2A37] p-4 relative rounded-[20px] grid gap-2 grid-cols-3 shadow-xl max-w-[1050px] mt-5"
    >
      <ul className="bg-dark px-4 py-3 rounded-[10px] space-y-2 col-span-1">
        {data.map((item: any) => (
          <li
            key={item.id}
            className={`${
              item.id === active
                ? "bg-[#D3F699] text-dark relative after:absolute after:-right-3 after:top-1/2 after:-translate-y-1/2  after:h-0 after:w-0 after:border-t-[10px] after:border-y-transparent after:border-b-[10px] after:border-l-[15px] after:border-l-[#D3F699] before:absolute before:-right-9 before:top-1/2 before:-translate-y-1/2  before:h-0 before:w-0 before:border-t-[10px] before:border-y-transparent before:border-b-[10px] before:border-l-[15px] before:border-l-[#1E2A37]"
                : ""
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
                className={`py-3 flex items-center gap-4 `}
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
  );
};

export default ProjectsMenu;
