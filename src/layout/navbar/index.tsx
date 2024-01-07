import logo from "@/assets/Logo.png";
import Button from "@/components/button";
import Image from "next/image";
import { type FC } from "react";
import MegaMenu from "./mega-menu";
import CategoriesMenu from "./mega-menu/categories";
import ProductsMenu from "./mega-menu/products";
import ServicesMenu from "./mega-menu/services";
import NavLink from "./nav-link";

const megaMenuItems = [
  { label: "Categories", menu: <CategoriesMenu /> },
  { label: "Services", menu: <ServicesMenu /> },
  { label: "Products", menu: <ProductsMenu /> },
];

const NavBar: FC = () => {
  return (
    <header className="sticky top-0 bg-dark z-10">
      <div className="container flex items-center justify-between mx-auto py-5">
        <Image src={logo} alt="" />
        <div className="flex items-center relative">
          <NavLink label="LinkItem1" href="link1" />
          <NavLink label="LinkItem2" href="link2" />
          <NavLink label="LinkItem3" href="link3" />
          <MegaMenu items={megaMenuItems} />
          <Button>Get in Touch</Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
