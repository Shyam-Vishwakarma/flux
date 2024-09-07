import NewsCard from "./NewsCard";
import QuoteDisplay from "./QuoteDisplay";
import QuoteListItem from "./QuoteListItem";
import { symbolQuote } from "../utils/rawData/symbolQuote";
import { newsData } from "../utils/rawData/newsData";
const Dashboard = () => {
  // usePopularStocks();
  const entries = Object.entries(symbolQuote);
  const topEntries = entries.slice(0, 5);
  return (
    <>
      <div className="max-w-4xl mx-auto flex md:justify-start justify-center items-center flex-col md:px-0 px-2 overflow-hidden">
        <div className="flex justify-between space-x-1 md:space-x-0 w-full mt-4">
          {topEntries.map(([symbol, quoteData]) => (
            <QuoteDisplay key={symbol} quoteData={quoteData} />
          ))}
        </div>
        <div className="main flex flex-col md:flex-row w-full justify-between mt-8 space-y-4 md:space-y-0 md:space-x-4">
          <div className="watchlist bg-white w-full md:w-[70%]">
            <h3 className="text-lg text-gray-900 font-semibold">
              You may be interested in
            </h3>
            <div className="space-y-2 mt-2 bg-white">
              {entries.map(([symbol, quoteData]) => (
                <QuoteListItem key={symbol} quoteData={quoteData} />
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
