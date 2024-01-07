"use client";

import Footer from "@/layout/footer";
import type { FC, PropsWithChildren } from "react";
import NavBar from "./navbar";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;