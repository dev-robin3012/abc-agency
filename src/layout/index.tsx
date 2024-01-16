"use client";

import type { FC, PropsWithChildren } from "react";
import Header from "./header";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default AppLayout;
