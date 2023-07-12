import Link from "next/link";
import React from "react";
import styled from "styled-components";

const NavbarItemTitle = styled.button`
  background: transparent;
  border: 0;
  font-weight: bold;
  font-family: inherit;
  font-size: 18px;
  padding: 2rem 1.5rem 1.2rem 1.5rem;
  color: white;
  display: flex;
  justify-content: center;
  transition: opacity 250ms;
  cursor: pointer;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  position: relative;
  z-index: 2;
  &:hover,
  &:focus {
    opacity: 0.7;
    outline: none;
  }
`;

const DropdownSlot = styled.div`
  position: absolute;
  right: 0%;
  margin-top: 30px;
  transform: translateX(-50%);
  perspective: 1500px;
`;

const NavbarItem = ({ title, children, ...rest }: any) => {
  const onMouseEnter = () => rest.onMouseEnter(rest.index);

  return (
    <li onMouseEnter={onMouseEnter} onFocus={onMouseEnter}>
      {/* <NavbarItemTitle className="">{title}</NavbarItemTitle> */}
      <Link
        href="#"
        className={`px-6 text-xl font-medium transition-all hover:text-primary hover:relative after:hover:absolute after:hover:-bottom-3 after:hover:left-[calc(50%-4px)] after:hover:w-2 after:hover:h-2 after:hover:bg-primary after:hover:rounded-full`}
      >
        {title}
      </Link>
      <DropdownSlot>{children}</DropdownSlot>
    </li>
  );
};

export default NavbarItem;
