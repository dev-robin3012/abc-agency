"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect, type FC, type PropsWithChildren } from "react";
import Footer from "./footer";
import Header from "./header";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    /*
     ******* This codes are using for smooth scroll.
     ******* Ref: lenis scroll(https://github.com/darkroomengineering/lenis)
     */
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
