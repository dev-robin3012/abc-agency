import logo from "@/assets/Logo.png";
import Button from "@/components/button";
import Image from "next/image";
import MegaMenu from "./mega-menu";
import CategoriesMenu from "./megamenu/categories";
import ProductsMenu from "./megamenu/products";
import ServicesMenu from "./megamenu/services";

const NavBar = () => {
  return (
    <header className="py-6 flex items-center justify-between container mx-auto">
      <Image src={logo} alt="" />
      <div className="flex items-center relative">
        <MegaMenu label="Categories" menu={<CategoriesMenu />} />
        <MegaMenu label="Services" menu={<ServicesMenu />} />
        <MegaMenu label="Products" menu={<ProductsMenu />} />
        <Button>Get in Touch</Button>
      </div>
    </header>
  );
};

export default NavBar;
