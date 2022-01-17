import React from "react";
import Menu from "./menu/menu";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
    </>
  );
};

export default Layout;
