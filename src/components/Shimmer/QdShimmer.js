import React from "react";

const QdShimmer = () => {
  return (
    <div
      className={`flex items-center justify-around space-x-2 px-2 rounded-md border border-gray-400 shadow-md md:w-40 md:h-12 h-10 bg-white`}
    >
      <div
        className={`flex items-center md:w-8 w-6 justify-center space-x-1 md:p-0.5 p-0 rounded bg-gray-200 animate-pulse`}
      >
        <div className="md:w-8 w-8 md:h-8 h-7 rounded-md bg-gray-200 animate-pulse"></div>
      </div>
      <div className="text-gray-900 animate-pulse">
        <div className="bg-gray-200 md:h-4 md:w-16 w-12 h-3 rounded"></div>
        <div className="bg-gray-200 md:h-4 md:w-12 h-3 w-8 rounded mt-1"></div>
      </div>
      <div className="ml-auto text-right animate-pulse">
        <div className="bg-gray-200 md:h-4 h-3 w-8 rounded"></div>
        <div className="bg-gray-200 md:h-4 h-3 w-6 rounded mt-1"></div>
      </div>
    </div>
  );
};

export default QdShimmer;
