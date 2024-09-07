import React from "react";
import { ReactComponent as SearchIcon } from "../utils/icon/search-outline.svg";

const SearchBar = () => {
  return (
    <div className="relative md:w-[35rem] w-[14rem]">
      <input
        type="text"
        placeholder="Search for Stocks, Forex and Crypto"
        className="w-full md:px-10 px-8 py-2 text-gray-700 rounded-lg border border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-100 text-[0.7rem] md:text-[1rem]"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon className="md:w-5 w-4 md:h-5 h-4 text-gray-500" />
      </div>
    </div>
  );
};

export default SearchBar;
