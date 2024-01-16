import clsx from "clsx";
import { motion } from "framer-motion";
import { useState, type FC } from "react";
import MegaMenu from ".";

const services = [
  {
    title: "Headless website",
    meta: "Lorem ipsum doller kocurloti habijabi tejpata",
    subItems: [
      { title: "Headless website1", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Headless website2", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Headless website3", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Headless website4", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Headless website5", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
    ],
  },
  {
    title: "Composable commerce",
    meta: "Lorem ipsum doller kocurloti habijabi tejpata",
    subItems: [
      { title: "Composable commerce1", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Composable commerc2", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Composable commerce3", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Composable commerce4", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Composable commerce5", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
    ],
  },
  {
    title: "Apps + PWAs",
    meta: "Lorem ipsum doller kocurloti habijabi tejpata",
    subItems: [
      { title: "Apps + PWAs1", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Apps + PWAs2", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Apps + PWAs3", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Apps + PWAs4", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Apps + PWAs5", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
    ],
  },
  {
    title: "Custom software development",
    meta: "Lorem ipsum doller kocurloti habijabi tejpata",
    subItems: [
      {
        title: "Custom software development1",
        meta: "Lorem ipsum doller kocurloti habijabi tejpata",
      },
      {
        title: "Custom software development2",
        meta: "Lorem ipsum doller kocurloti habijabi tejpata",
      },
      {
        title: "Custom software development3",
        meta: "Lorem ipsum doller kocurloti habijabi tejpata",
      },
      {
        title: "Custom software development4",
        meta: "Lorem ipsum doller kocurloti habijabi tejpata",
      },
      {
        title: "Custom software development5",
        meta: "Lorem ipsum doller kocurloti habijabi tejpata",
      },
    ],
  },
  {
    title: "Lorem Ipsum",
    meta: "Lorem ipsum doller kocurloti habijabi tejpata",
    subItems: [
      { title: "Lorem Ipsum1", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Lorem Ipsum2", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Lorem Ipsum3", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Lorem Ipsum4", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
      { title: "Lorem Ipsum5", meta: "Lorem ipsum doller kocurloti habijabi tejpata" },
    ],
  },
];

const ServicesMenu: FC = () => {
  const [active, setActive] = useState(services[0].title);

  const subItems: { title: string; meta: string }[] =
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
                "p-3 rounded-md relative group transition-all z-10",
                active === title && "text-dark"
              )}
            >
              <span className="block whitespace-nowrap font-semibold">{title}</span>
              <span className="text-xs block font-normal">{meta}</span>
              {active === title && (
                <motion.span
                  layout
                  layoutId="indicator-bg"
                  className="absolute top-0 left-0 w-full h-full bg-primary-light -z-10 rounded-md before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:-right-5 before:h-0 before:w-0 before:border-y-[10px] before:border-y-transparent before:border-l-[20px] before:border-primary-light after:absolute after:top-1/2 after:transform after:-translate-y-1/2 after:-right-11 after:h-0 after:w-0 after:border-y-[10px] after:border-y-transparent after:border-l-[20px] after:border-primary-light"
                />
              )}
            </motion.li>
          ))}
        </motion.ul>

        <motion.ul className="bg-dark p-4 rounded-md">
          {subItems.map(({ title, meta }) => (
            <motion.li
              key={title}
              className={clsx(
                "p-3 rounded-md relative group transition-all animate__animated animate__fadeIn"
              )}
            >
              <span className="block whitespace-nowrap group-hover:text-primary">{title}</span>
              <span className="text-xs leading- block font-normal">{meta}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </MegaMenu>
  );
};

export default ServicesMenu;
