import React from "react";
import { Container } from "../components";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-primary justify-center">
      <Container>
        <div className="text-center text-white">
          <div className="text-xs font-semibold mb-2">404 Error</div>
          <div className="text-4xl font-bold mb-2">Page Not Found</div>
          <div className="text-sm mb-8">
            Sorry, the page you are looking for not exist
          </div>
          <Link
            to="/"
            className="text-xs px-4 py-2 font-semibold rounded bg-primary-darkest mt-4"
          >
            Go to home
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
