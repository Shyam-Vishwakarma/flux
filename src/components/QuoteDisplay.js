import React from "react";
import QuoteDisplayShimmer from "./Shimmer/QuoteDisplayShimmer";
import { useSelector } from "react-redux";

const QuoteDisplay = ({ symbol }) => {
  const data = useSelector((store) => store.quoteData.data);

  if (!data[symbol]) return <QuoteDisplayShimmer />;
  const quoteData = data[symbol];

  if (
    !quoteData.symbol ||
    !quoteData.name ||
    quoteData.price == null ||
    quoteData.change == null ||
    quoteData.changesPercentage == null
  ) {
    return null;
  }

  const { change, changesPercentage, price } = quoteData;
  const isNegative = change < 0;
  return (
    <div
      className={`flex items-center justify-around space-x-2 px-2 rounded-md border border-gray-400 shadow-md md:w-40 md:h-12 h-10 bg-white`}
    >
      <div
        className={`flex items-center md:w-8 w-4 justify-center space-x-1 text-md md:p-0.5 p-0 rounded ${
          isNegative ? "bg-red-100" : "bg-green-100"
        }`}
      >
        <div className={isNegative ? "text-red-500" : "text-green-500"}>
          {isNegative ? "↓" : "↑"}
        </div>
      </div>
      <div className="text-gray-900">
        <div className="md:text-xs text-[0.6rem] font-semibold">{symbol}</div>
        <div className="md:text-xs text-[0.6rem]">{price.toFixed(2)}</div>
      </div>
      <div className="ml-auto text-right">
        <div
          className={`md:text-xs text-[0.6rem] ${
            isNegative ? "text-red-600" : "text-green-600"
          }`}
        >
          {changesPercentage.toFixed(2)}%
        </div>
        <div
          className={`md:text-xs text-[0.6rem] ${
            isNegative ? "text-red-600" : "text-green-600"
          }`}
        >
          {change.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default QuoteDisplay;
