import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="flex flex-col flex-shrink bg-primary-lightest">
      <div>
        <Container>
          <div className="flex flex-col md:grid grid-cols-2 justify-between pt-12 pb-8">
            <div className="">
              <div className="text-lg font-bold">TheUniList</div>
              <span className="text-sm">
                All university informations in one place
              </span>
            </div>
            <div className="mt-4 md:mt-0 justify-self-end">
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

      <div className="pt-8 pb-12 border-t border-primary-light">
        <Container>
          <div className="flex flex-col md:grid grid-cols-2">
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase">
                Subscribe to our newsletter
              </div>
              <div className="text-xs">
                We send latest information about universities all around the
                world weekly
              </div>
            </div>
            <div className="mt-4 md:mt-0 space-x-2 justify-self-end">
              <input
                className="text-xs py-2 px-4"
                type="text"
                placeholder="Your email here"
              ></input>
              <button className="text-xs font-semibold rounded bg-secondary py-2 px-4">
                Subscribe
              </button>
            </div>
          </div>
        </Container>
      </div>

      <div className="pt-4 pb-6 border-t border-primary-light bg-primary-darkest text-white text-center">
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
