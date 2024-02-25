import icon1 from "@/assets/icon1.svg";
import icon2 from "@/assets/icon2.svg";
import icon3 from "@/assets/icon3.svg";
import icon4 from "@/assets/icon4.svg";
import icon5 from "@/assets/icon5.svg";
import type { INavItem } from "./interface";

export const navItems: INavItem[] = [
  { id: 101, label: "About", href: "/about", hasMegaMenu: false },
  { id: 102, label: "Blogs", href: "/blogs", hasMegaMenu: false },
  { id: 103, label: "Categories", href: "/categories", hasMegaMenu: true },
  { id: 104, label: "Services", href: "/services", hasMegaMenu: true },
  // { id: 105, label: "Products", href: "/products", hasMegaMenu: true },
];

export const megaMenu = {
  categories: [
    {
      title: "Legacy System Integration",
      meta: "Lorem ipsum doller kocurloti habijabi tejpata doller kocurloti habijabi tejpata",
      subItems: [
        {
          title: "Ipsum doller kocurloti",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon1,
        },
        {
          title: "Doller kocurloti habijabi",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon2,
        },
        {
          title: "Headless website",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon3,
        },
        {
          title: "Doller Ipsum ipsum",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon4,
        },
        {
          title: "Headless website Vl",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon5,
        },
        {
          title: "Maxime mollitia aa",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon2,
        },
      ],
    },
    {
      title: "Content Management",
      meta: "Lorem ipsum doller kocurloti habijabi tejpata sit amet consectetur adipisicing elit",
      subItems: [
        {
          title: "Maxime mollitia",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon5,
        },
        {
          title: "Composable commerce",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon4,
        },
        {
          title: "Veritatis obcaecati tenetur",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon2,
        },
        {
          title: "Quo neque error",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon3,
        },
        {
          title: "Impedit sit sunt quaerat",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon1,
        },
        {
          title: "Sunt quaerat Impedit sit ",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon4,
        },
      ],
    },
    {
      title: "Provident similique",
      meta: "Lorem ipsum doller kocurloti habijabi tejpata sint commodi repudiandae consequuntur voluptatum",
      subItems: [
        {
          title: "Accusantium nemo autem",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon2,
        },
        {
          title: "Reprehenderit quia",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon4,
        },
        {
          title: "Ipsa laudantium molestias",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon1,
        },
        {
          title: "Officiis iure rerum",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon5,
        },
        {
          title: "Sit laborum ab eius",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon3,
        },
      ],
    },
    {
      title: "Commodi minima excepturi",
      meta: "Lorem ipsum doller kocurloti habijabi tejpata eveniet aliquid culpa officia aut",
      subItems: [
        {
          title: "Quaerat provident commodi",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon3,
        },
        {
          title: "Dolorum eligendi quam",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon1,
        },
        {
          title: "Voluptatem quaerat",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon2,
        },
        {
          title: "Voluptatem quaerat lorem",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon5,
        },
        {
          title: "Placeat qui corporis!",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon4,
        },
        {
          title: "TeneturW Veritatis obcaecati ",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon2,
        },
      ],
    },
    {
      title: "Lconsectetur veniam similiqu",
      meta: "Lorem ipsum doller kocurloti habijabi tejpata molestias architecto voluptate",
      subItems: [
        {
          title: "Lsed amet tempora",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon2,
        },
        {
          title: "Ivoluptates a cumque",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon5,
        },
        {
          title: "Fuga praesentium optio",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon4,
        },

        {
          title: "TeneturW Veritatis obcaecat",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon2,
        },
        {
          title: "Baliquid culpa officia aut",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon3,
        },
        {
          title: "Nulla placeat Voluptatem",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon1,
        },
      ],
    },
  ],
  services: [
    {
      title: "Headless website",
      meta: "Lorem ipsum doller kocurloti habijabi tejpata",
      subItems: [
        {
          title: "Headless website1",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon1,
        },
        {
          title: "Headless website2",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon2,
        },
        {
          title: "Headless website3",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon3,
        },
        {
          title: "Headless website4",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon4,
        },
        {
          title: "Headless website5",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon5,
        },
      ],
    },
    {
      title: "Composable commerce",
      meta: "Lorem ipsum doller kocurloti habijabi tejpata",
      subItems: [
        {
          title: "Composable commerce1",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon5,
        },
        {
          title: "Composable commerc2",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon3,
        },
        {
          title: "Composable commerce3",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon1,
        },
        {
          title: "Composable commerce4",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon2,
        },
        {
          title: "Composable commerce5",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon4,
        },
      ],
    },
    {
      title: "Apps + PWAs",
      meta: "Lorem ipsum doller kocurloti habijabi tejpata",
      subItems: [
        {
          title: "Apps + PWAs3",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon3,
        },
        {
          title: "Apps + PWAs2",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon2,
        },
        {
          title: "Apps + PWAs1",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon1,
        },
        {
          title: "Apps + PWAs4",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon4,
        },
        {
          title: "Apps + PWAs5",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon2,
        },
      ],
    },
    {
      title: "Custom software development",
      meta: "Lorem ipsum doller kocurloti habijabi tejpata",
      subItems: [
        {
          title: "Custom software development1",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon2,
        },
        {
          title: "Custom software development2",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon5,
        },
        {
          title: "Custom software development3",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon3,
        },
        {
          title: "Custom software development4",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon4,
        },
        {
          title: "Custom software development5",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon1,
        },
      ],
    },
    {
      title: "Lorem Ipsum",
      meta: "Lorem ipsum doller kocurloti habijabi tejpata",
      subItems: [
        {
          title: "Lorem Ipsum1",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon2,
        },
        {
          title: "Lorem Ipsum2",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon4,
        },
        {
          title: "Lorem Ipsum3",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon5,
        },
        {
          title: "Lorem Ipsum4",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon1,
        },
        {
          title: "Lorem Ipsum5",
          meta: "Lorem ipsum doller kocurloti habijabi tejpata",
          icon: icon3,
        },
      ],
    },
  ],
  products: [],
};
