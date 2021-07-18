import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="flex flex-col flex-shrink bg-primary-lightest">
      <div className="py-8 border-t border-primary-light">
        <Container>
          <div className="flex flex-col md:grid grid-cols-2">
            <div className="mb-8 md:mb-0">
              <div className="text-lg font-bold">TheUniList</div>
              <span className="text-sm">
                All universities in a single website
              </span>
            </div>
            <div className="justify-self-end text-left md:text-right">
              <div className="text-xs font-bold uppercase">
                Subscribe to our newsletter
              </div>
              <div className="text-xs mt-1">
                We send latest information about universities all around the
                world weekly
              </div>
              <div className="mt-4 space-x-2">
                <input
                  className="text-xs py-2 px-4"
                  type="text"
                  placeholder="Your email here"
                  defaultValue={""}
                  onChange={(e) => console.log(e)}
                ></input>
                <button className="text-xs font-semibold rounded bg-secondary py-2 px-4">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-4 border-t border-primary-light bg-primary-lightest text-left">
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
