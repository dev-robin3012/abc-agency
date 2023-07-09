"use client";

import logo from "@/assets/Logo.png";
import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

const navItems = ["Home", "Services", "Projects", "Blog"];

const TopBar: FC = () => {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <header className="py-6 flex items-center justify-between">
      <Image src={logo} alt="" className="h-[60px]" />

      <ul className="flex items-center gap-10">
        {navItems.map((item, idx) => (
          <li
            key={idx}
            onMouseEnter={(e) => setActiveItem(item)}
            className={`px-6 text-xl font-medium transition-all ${
              activeItem === item && "text-primary"
            }`}
          >
            <Link href="#">{item}</Link>
          </li>
        ))}

        <li className="text-xl font-medium">
          <Button>Get in Touch</Button>
        </li>
      </ul>
    </header>
  );
};

export default TopBar;
