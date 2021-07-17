import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="flex flex-col flex-shrink bg-primary-lightest">
      <div>
        <Container>
          <div className="flex justify-between py-8">
            <div className="">
              <div className="text-lg font-bold">TheUniList</div>
              <span className="text-sm">
                An all in one information center for universities all over the
                world
              </span>
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-xs font-bold mr-2">Mode : </span>
                <select
                  className="text-xs bg-primary-light font-semibold px-4 py-2 rounded focus:outline-none"
                  value="default"
                >
                  <option value="default">Default</option>
                </select>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-4 border-t border-primary-light">
        <Container>
          <span className="text-xs font-semibold">
            Built with<span className="pl-1.5 pr-2">❤️</span>from Malaysia
          </span>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
