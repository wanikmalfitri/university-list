import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, page }) => {
  return (
    <div
      className="h-screen w-screen flex flex-col overflow-auto bg-primary-lightest bg-opacity-30"
      id="Layout"
    >
      <Navbar page={page} />
      <main className="flex flex-1 flex-col">{children}</main>
      {page !== "signup" && page !== "login" ? <Footer /> : null}
    </div>
  );
};

export default Layout;
