import clsx from "clsx";
import { motion } from "framer-motion";
import { useState, type FC } from "react";

const categories = [
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

const CategoriesMenu: FC = () => {
  const [active, setActive] = useState(categories[0].title);

  return (
    <motion.div layoutId="menu" className="shadow-lg cursor-auto">
      <div className="p-5 bg-primary-light rounded-lg flex items-stretch gap-3">
        <motion.ul className="bg-dark p-4 rounded-md">
          {categories.map(({ title, meta }, key) => (
            <motion.li
              key={key}
              onMouseEnter={() => setActive(title)}
              className={clsx(
                "p-3 rounded-md relative group transition-all",
                active === title &&
                  "bg-gray before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:-right-5 before:h-0 before:w-0 before:border-y-[10px] before:border-y-transparent before:border-l-[20px] before:border-gray after:absolute after:top-1/2 after:transform after:-translate-y-1/2 after:-right-11 after:h-0 after:w-0 after:border-y-[10px] after:border-y-transparent after:border-l-[20px] after:border-gray",

                // hover style
                "hover:bg-gray transition-all"
              )}
            >
              <span className="block whitespace-nowrap group-hover:text-primary">{title}</span>
              <span className="text-xs leading- block font-normal">{meta}</span>
            </motion.li>
          ))}
        </motion.ul>
        <div className="w-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et saepe distinctio ad vitae
          mollitia temporibus. Provident officia animi dolorum eum doloremque temporibus, sunt
          voluptates illum, dolorem nihil magni quisquam?
        </div>
      </div>
    </motion.div>
  );
};

export default CategoriesMenu;
