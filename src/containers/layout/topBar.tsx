"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/Logo.png";
import { Flipper } from "react-flip-toolkit";
import NavbarItem from "./navItem";
import DropdownContainer from "../navbar/dropdownContainer";
import ProjectsMenu from "./megamenu/projects";
import ServicesMenu from "./megamenu/services";
import Button from "@/components/button";

const navbarConfig = [
  { title: "Projects", dropdown: ProjectsMenu },
  { title: "Sevices", dropdown: ServicesMenu },
];

const NavBar = () => {
  const [state, setState] = useState({ activeIndices: [], animatingOut: false });
  const [animatingOutTimeout, setAnimatingOutTimeout] = useState<any>(0);

  let CurrentDropdown: any;
  let PrevDropdown: any;
  let direction: any;

  const currentIndex = state.activeIndices[state.activeIndices.length - 1];
  const prevIndex =
    state.activeIndices.length > 1 && state.activeIndices[state.activeIndices.length - 2];

  if (typeof currentIndex === "number") CurrentDropdown = navbarConfig[currentIndex].dropdown;
  if (typeof prevIndex === "number") {
    PrevDropdown = navbarConfig[prevIndex].dropdown;
    direction = currentIndex > prevIndex ? "right" : "left";
  }

  const resetDropdownState = (i: any) => {
    setState({
      // @ts-ignore
      activeIndices: typeof i === "number" ? [i] : [],
      animatingOut: false,
    });
    setAnimatingOutTimeout(0);
  };

  const onMouseEnter = (i: any) => {
    if (animatingOutTimeout) {
      clearTimeout(animatingOutTimeout);
      resetDropdownState(i);
      return;
    }
    if (state.activeIndices[state.activeIndices.length - 1] === i) return;

    setState((prevState) => ({
      activeIndices: prevState.activeIndices.concat(i),
      animatingOut: false,
    }));
  };

  const onMouseLeave = () => {
    setState({ ...state, animatingOut: true });
    setAnimatingOutTimeout(setTimeout(resetDropdownState, 300));
  };

  return (
    <header className="py-6 flex items-center justify-between">
      <Image src={logo} alt="" className="h-[60px]" />

      <Flipper flipKey={currentIndex} spring="noWobble">
        <nav
          onMouseLeave={onMouseLeave}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            padding: "0px 30px",
          }}
        >
          <ul className="flex items-center justify-end list-none relative">
            {navbarConfig.map((n, index) => {
              return (
                <>
                  <NavbarItem
                    key={n.title}
                    title={n.title}
                    index={index}
                    onMouseEnter={onMouseEnter}
                  >
                    {currentIndex === index && (
                      <DropdownContainer
                        direction={direction}
                        animatingOut={state.animatingOut}
                        duration={300}
                      >
                        <CurrentDropdown />
                        {PrevDropdown && <PrevDropdown />}
                      </DropdownContainer>
                    )}
                  </NavbarItem>
                </>
              );
            })}

            <li className="text-xl font-medium">
              <Button>Get in Touch</Button>
            </li>
          </ul>
        </nav>
      </Flipper>
      {/* <AnimatedNavbar duration={300} /> */}
    </header>
  );
};

export default NavBar;
