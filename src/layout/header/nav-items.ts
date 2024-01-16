import type { INavItem } from "./interface";

export const navItems: INavItem[] = [
  { id: 101, label: "About", href: "/about", hasMegaMenu: false },
  { id: 102, label: "Blogs", href: "/blogs", hasMegaMenu: false },
  { id: 103, label: "Categories", href: "/categories", hasMegaMenu: true },
  { id: 104, label: "Services", href: "/services", hasMegaMenu: true },
  { id: 105, label: "Products", href: "/products", hasMegaMenu: true },
];
