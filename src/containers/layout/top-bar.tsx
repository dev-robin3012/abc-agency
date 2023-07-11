"use client";

import logo from "@/assets/Logo.png";
import Button from "@/components/button";
import Image from "next/image";
import { FC, useState } from "react";
import NavItem from "./navItem";
import MegaMenu from "./megaMenu";

import megaMenu from "@/assets/megaMenuContent.js";

const navItems = [
  { label: "Home", menuData: null },
  { label: "Services", menuData: megaMenu["Services"], hasPromotion: true },
  { label: "Projects", menuData: megaMenu["Projects"], hasPromotion: false },
  { label: "Blog", menuData: null },
];

const TopBar: FC = () => {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <header className="py-6 flex items-center justify-between">
      <Image src={logo} alt="" className="h-[60px]" />

      <ul className="flex items-center gap-10">
        {navItems.map((item, idx) =>
          item.menuData ? (
            <MegaMenu
              key={idx}
              label={item.label}
              isActive={activeItem === item.label}
              setActiveItem={setActiveItem}
              data={item.menuData}
            />
          ) : (
            <NavItem
              key={idx}
              isActive={activeItem === item.label}
              label={item.label}
              setActiveItem={setActiveItem}
            />
          )
        )}

        <li className="text-xl font-medium">
          <Button>Get in Touch</Button>
        </li>
      </ul>
    </header>
  );
};

export default TopBar;
