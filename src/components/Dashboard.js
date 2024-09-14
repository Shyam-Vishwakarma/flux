import NewsCard from "./NewsCard";
import QuoteDisplay from "./QuoteDisplay";
import QuoteListItem from "./QuoteListItem";
import { newsData } from "../utils/rawData/newsData";
import { useQuoteData } from "../utils/hooks/getQuoteData";
import { stockLists } from "../utils/rawData/popularStocks";

const Dashboard = () => {
  const symbols = stockLists.map((st) => st.symbol);
  const topSymbols = symbols.slice(0, 5);
  useQuoteData(symbols);
  return (
    <>
      <div className="max-w-4xl mx-auto flex md:justify-start justify-center items-center flex-col md:px-0 px-2 overflow-hidden">
        <div className="flex justify-between space-x-1 md:space-x-0 w-full mt-4">
          {topSymbols.map((symbol) => (
            <QuoteDisplay key={symbol} symbol={symbol} />
          ))}
        </div>
        <div className="main flex flex-col md:flex-row w-full justify-between mt-8 space-y-4 md:space-y-0 md:space-x-4">
          <div className="watchlist bg-white w-full md:w-[70%]">
            <h3 className="text-lg text-gray-900 font-semibold">
              You may be interested in
            </h3>
            <div className="space-y-2 mt-2 bg-white">
              {symbols.map((symbol) => (
                <QuoteListItem key={symbol} symbol={symbol} />
              ))}
            </div>
          </div>
          <div className="news w-full md:w-[30%]">
            <h3 className="text-lg text-gray-900 font-semibold">
              Today's financial news
            </h3>
            <div className="space-y-2 mt-2 bg-white">
              {newsData.map((news) => (
                <NewsCard news={news} />
              ))}
              <div className="mt-4 w-full flex justify-center">
                <a
                  className="text-sm text-gray-900"
                  href="/"
                  onClick={(e) => e.preventDefault()}
                >
                  See more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
