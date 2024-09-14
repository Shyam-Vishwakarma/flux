import React from "react";

const QlShimmer = () => {
  return (
    <div className="flex items-center justify-between p-2 border border-gray-400 bg-white rounded shadomd:w-sm h-12">
      <div className="flex items-center space-x-2 animate-pulse">
        <div className="bg-gray-200 shimmer md:w-10 w-10 h-4 rounded border border-gray-500"></div>
        <div className="bg-gray-200 shimmer md:w-32 w-24 h-4 rounded"></div>
      </div>

      <div className="bg-gray-200 shimmer md:w-20 w-16 h-4 rounded animate-pulse"></div>

      <div className="bg-gray-200 shimmer md:w-16 w-12 h-4 rounded animate-pulse"></div>

      <div className="flex items-center space-x-2 p-1 rounded animate-pulse">
        <div className="bg-gray-200 shimmer md:w-12 w-10 h-4 rounded"></div>
      </div>
    </div>
  );
};

export default QlShimmer;
