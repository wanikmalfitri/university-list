import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div
      className="h-screen w-screen flex flex-col overflow-auto bg-white"
      id="Layout"
    >
      <Navbar />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
