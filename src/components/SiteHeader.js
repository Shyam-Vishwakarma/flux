import React from "react";
import classNames from "classnames";
import MainNav from "./MainNav";
import SearchBar from "./SearchBar";

const SiteHeader = () => {
  return (
    <header
      className={classNames(
        "sticky top-0 z-50 w-full bg-white backdrop-blur-lg"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex-1 flex items-center ml-4 md:ml-14">
          <MainNav />
        </div>

        <div className="flex-1 flex justify-center">
          <SearchBar />
        </div>

        <div className="flex-1 flex justify-end md:-mr-14 mr-2">
          <nav>
            <ul className="flex space-x-4 items-center md:text-sm text-md font-medium text-gray-900 hover:text-gray-700">
              <li>
                <a href="/" aria-label="about">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" />
    </header>
  );
};

export default SiteHeader;
