import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import classNames from "classnames";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import ModeToggle from "./ModeToggle";
import SearchBar from "./SearchBar";

const buttonVariants = ({ variant }) => {
  return variant === "ghost" ? "bg-transparent hover:bg-gray-100" : "";
};

const SiteHeader = () => {
  return (
    <header
      className={classNames(
        "sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg"
      )}
    >
      <div className="container flex h-16 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <SearchBar />
          </div>
          <nav className="flex items-center gap-1">
            <a
              href="https://github.com/Not-Sarthak/sol-ui"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={classNames(
                  buttonVariants({ variant: "ghost" }),
                  "w-9 px-0"
                )}
              >
                <FaGithub className="size-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <div
                className={classNames(
                  buttonVariants({ variant: "ghost" }),
                  "w-9 px-0"
                )}
              >
                <FaTwitter className="size-4" />
                <span className="sr-only">Twitter</span>
              </div>
            </a>
            <ModeToggle />
          </nav>
        </div>
      </div>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" />
    </header>
  );
};

export default SiteHeader;
