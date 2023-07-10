import Link from "next/link";
import { FC } from "react";

interface NavItemProps {
  label: string;
  isActive: boolean;
  setActiveItem: (label: string) => void;
}

const NavItem: FC<NavItemProps> = ({ label, isActive, setActiveItem }) => {
  return (
    <li
      onMouseEnter={() => setActiveItem(label)}
      className={`px-6 text-xl font-medium transition-all ${
        isActive &&
        "text-primary relative after:absolute after:-bottom-3 after:left-[calc(50%-4px)] after:w-2 after:h-2 after:bg-primary after:rounded-full"
      }`}
    >
      <Link href="#">{label}</Link>
    </li>
  );
};

export default NavItem;
