import logo from "@/assets/Logo.png";
import Button from "@/components/button";
import Container from "@/components/container";
import Icon from "@/components/icons";
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
      <Container className="flex items-center justify-between mx-auto py-5">
        <Image
          src={logo}
          alt="app logo"
          className="border transition-all w-auto h-12 md:h-14 lg:h-16"
        />
        <div className="hidden xl:flex items-center relative">
          <NavLink label="LinkItem1" href="link1" />
          <NavLink label="LinkItem2" href="link2" />
          <MegaMenu items={megaMenuItems} />
          <Button variant="outline" icon={<Icon name="arrowRight" />}>
            Get in Touch
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
