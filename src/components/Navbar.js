import React from "react";
import { Container } from "./";
import { MenuIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <header className="flex flex-shrink border-b border-primary-light">
      <Container>
        <nav className="py-4 flex items-center justify-between">
          <div className="">
            <span className="font-semibold text-primary-darkest text-lg">
              TheUniList
            </span>
          </div>
          <MenuIcon className="h-6 w-6 hover:text-primary cursor-pointer" />
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
