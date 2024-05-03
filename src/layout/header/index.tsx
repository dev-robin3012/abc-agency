import logo from "@/assets/Logo.png";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import MobileMenu from "./mobile-menu";
import Navbar from "./navbar";

const Header: FC = () => {
  return (
    <header id="header" className="sticky top-0 right-0 left-0 bg-dark z-10 shadow-2xl">
      <Container className="flex items-center justify-between mx-auto py-5">
        <Link href="/">
          <Image
            src={logo}
            alt="app logo"
            className="border transition-all w-auto h-12 md:h-14 lg:h-16"
          />
        </Link>

        <Navbar />
        <MobileMenu />
      </Container>
    </header>
  );
};

export default Header;
