"use client";

import type { FC, PropsWithChildren } from "react";
import NavBar from "./navbar";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default AppLayout;
