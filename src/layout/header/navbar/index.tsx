import Button from "@/components/button";
import Icon from "@/components/icons";
import type { FC } from "react";
import { navItems } from "../nav-items";
import MegaItems from "./mega-items";
import NavLink from "./nav-link";

const Navbar: FC = () => {
  return (
    <nav className="hidden lg:flex items-center relative">
      {navItems
        .filter(({ hasMegaMenu }) => !hasMegaMenu)
        .map((link, key) => (
          <NavLink key={key} {...link} />
        ))}

      <MegaItems items={navItems.filter(({ hasMegaMenu }) => hasMegaMenu)} />

      <Button variant="outline" icon={<Icon name="arrowRight" />}>
        Get in Touch
      </Button>
    </nav>
  );
};

export default Navbar;
