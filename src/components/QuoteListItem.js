import React from "react";

const QuoteListItem = ({ quoteData }) => {
  const { symbol, name, change, changePercent, price } = quoteData;
  const isNegative = change < 0;

  return (
    <div className="flex items-center justify-between p-2 border border-gray-300 bg-white rounded shadow-sm">
      <div className="flex items-center space-x-2">
        <div className="bg-slate-300 text-black md:text-xs text-[0.5rem] font-semibold md:py-1 py-0 md:px-2 px-1 rounded border border-gray-500">
          {symbol}
        </div>
        <div className="text-gray-900 md:text-sm text-[0.8rem] font-normal">
          {name}
        </div>
      </div>

      {/* Price */}
      <div className="text-gray-900 md:text-xs text-[0.8rem] font-normal">
        $
        {price.toLocaleString("en-IN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>

      {/* Change */}
      <div
        className={`md:text-xs text-[0.6rem] font-normal ${
          isNegative ? "text-red-600" : "text-green-600"
        }`}
      >
        {isNegative ? "-" : "+"}${Math.abs(change).toFixed(2)}
      </div>

      <div
        className={`flex items-center space-x-1 p-1 rounded ${
          isNegative ? "bg-red-100" : "bg-green-100"
        }`}
      >
        <div className={isNegative ? "text-red-500" : "text-green-500"}>
          {isNegative ? "↓" : "↑"}
        </div>
        <div
          className={`md:text-xs text-[0.6rem] ${
            isNegative ? "text-red-600" : "text-green-600"
          }`}
        >
          {Math.abs(changePercent).toFixed(2)}%
        </div>
      </div>
    </div>
  );
};

export default QuoteListItem;
