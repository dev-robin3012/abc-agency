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
  { id: 105, label: "Products", href: "/products", hasMegaMenu: true },
];

export const megaMenu = {
  categories: [
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
