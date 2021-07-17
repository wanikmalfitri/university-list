import React from "react";
import { Container } from "./";
import { Link } from "react-router-dom";

const Navbar = ({ page }) => {
  return (
    <header className="flex flex-shrink bg-primary">
      <Container>
        <nav className="py-4 flex items-center justify-between">
          <div className="">
            <Link to="/" className="font-semibold text-white text-lg">
              TheUniList
            </Link>
          </div>
          <div className="space-x-2">
            {page !== "signup" ? (
              <Link
                to="/signup"
                className="text-xs px-4 py-2 rounded bg-secondary font-semibold"
              >
                Sign up
              </Link>
            ) : null}
            {page !== "login" ? (
              <Link
                to="/login"
                className="text-xs px-4 py-2 rounded bg-primary-darkest text-white font-semibold"
              >
                Login
              </Link>
            ) : null}
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
