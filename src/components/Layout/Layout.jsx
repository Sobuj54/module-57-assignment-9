import React from "react";
import Home from "../Home/Home";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
