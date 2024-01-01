import clsx from "clsx";
import { motion } from "framer-motion";
import { useState, type FC } from "react";

const services = [
  {
    title: "Headless website",
    meta: "Lorem ipsum doller kocurloti habijabi tejpata",
    subItems: [
      { title: "Headless website", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Headless website", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Headless website", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Headless website", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Headless website", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
    ],
  },
  {
    title: "Composable commerce",
    meta: "Lorem ipsum doller kocurloti habijabi tejpata",
    subItems: [
      { title: "Composable commerce", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Composable commerce", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Composable commerce", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Composable commerce", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Composable commerce", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
    ],
  },
  {
    title: "Apps + PWAs",
    meta: "Lorem ipsum doller kocurloti habijabi tejpata",
    subItems: [
      { title: "Apps + PWAs", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Apps + PWAs", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Apps + PWAs", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Apps + PWAs", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Apps + PWAs", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
    ],
  },
  {
    title: "Custom software development",
    meta: "Lorem ipsum doller kocurloti habijabi tejpata",
    subItems: [
      {
        title: "Custom software development",
        meta: "Lorem ipsum doller kocurloti habijabi tejpata",
      },
      {
        title: "Custom software development",
        meta: "Lorem ipsum doller kocurloti habijabi tejpata",
      },
      {
        title: "Custom software development",
        meta: "Lorem ipsum doller kocurloti habijabi tejpata",
      },
      {
        title: "Custom software development",
        meta: "Lorem ipsum doller kocurloti habijabi tejpata",
      },
      {
        title: "Custom software development",
        meta: "Lorem ipsum doller kocurloti habijabi tejpata",
      },
    ],
  },
  {
    title: "Lorem Ipsum",
    meta: "Lorem ipsum doller kocurloti habijabi tejpata",
    subItems: [
      { title: "Lorem Ipsum", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Lorem Ipsum", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Lorem Ipsum", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Lorem Ipsum", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Lorem Ipsum", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
    ],
  },
];

const ServicesMenu: FC = () => {
  const [active, setActive] = useState(services[0].title);
  const subItems: { title: string; meta: string }[] =
    services.find((item) => item.title === active)?.subItems || [];

  return (
    <motion.div
      layoutId="menu"
      className="absolute right-0 shadow-lg cursor-auto pt-5"
      initial="hidden"
      animate="visible"
    >
      <div className="p-5 bg-gray rounded-lg flex items-stretch gap-3">
        <ul className="bg-dark p-4 rounded-md">
          {services.map(({ title, meta }, key) => (
            <li
              key={key}
              onMouseEnter={() => setActive(title)}
              className={clsx(
                "p-3 rounded-md relative group transition-all",
                active === title &&
                  "bg-gray before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:-right-5 before:h-0 before:w-0 before:border-y-[10px] before:border-y-transparent before:border-l-[20px] before:border-gray after:absolute after:top-1/2 after:transform after:-translate-y-1/2 after:-right-11 after:h-0 after:w-0 after:border-y-[10px] after:border-y-transparent after:border-l-[20px] after:border-gray",

                // hover style
                "hover:bg-gray transition-all"
                // arrow on hover
                // "hover:after:absolute hover:after:top-1/2 hover:after:transform hover:after:-translate-y-1/2 hover:after:-right-5 hover:after:h-0 hover:after:w-0 hover:after:border-y-[10px] hover:after:border-y-transparent hover:after:border-l-[20px] hover:after:border-gray"
              )}
            >
              <span className="block whitespace-nowrap group-hover:text-primary">{title}</span>
              <span className="text-xs leading- block font-normal">{meta}</span>
            </li>
          ))}
        </ul>

        <ul className="bg-dark p-4 rounded-md">
          {subItems.map(({ title, meta }, key) => (
            <li
              key={key}
              onMouseEnter={() => setActive(title)}
              className={clsx(
                "p-3 rounded-md relative group transition-all"

                // arrow on hover
                // title === active &&
                //   "before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:-left-5 before:h-0 hover:before:w-0 before:border-y-[10px] before:border-y-transparent before:border-l-[20px] before:border-gray"
              )}
            >
              <span className="block whitespace-nowrap group-hover:text-primary">{title}</span>
              <span className="text-xs leading- block font-normal">{meta}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServicesMenu;
