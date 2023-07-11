import React, { FC } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import NavItem from "./navItem";
import ProjectsMenu from "./projectsMenu";
import ServicesMenu from "./servicesMenu";

interface MegaMenuProps {
  label: string;
  isActive: boolean;
  setActiveItem: (label: string) => void;
  data: any;
}

const Menus = { Projects: ProjectsMenu, Services: ServicesMenu };

const MegaMenu: FC<MegaMenuProps> = ({ label, isActive, setActiveItem, data }) => {
  // @ts-ignore
  const Component = Menus[label];

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <NavItem isActive={isActive} label={label} setActiveItem={setActiveItem} />
      </DropdownMenu.Trigger>
      <Component data={data} />
    </DropdownMenu.Root>
  );
};

export default MegaMenu;
