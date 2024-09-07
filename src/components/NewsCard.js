import React from "react";

const NewsCard = ({ news }) => {
  const { imageUrl, title, summary, source, url } = news;

  return (
    <div className="md:max-w-xs w-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-300">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          className="w-full md:h-48 h-60 object-cover"
          src={imageUrl}
          alt={title}
        />
      </a>

      <div className="md:p-4 p-2">
        <h2 className="md:text-md text-sm font-semibold text-gray-800">
          {title}
        </h2>

        <p className="md:text-sm text-xs text-gray-600 md:mt-2 mt-1">
          {summary}
        </p>

        <p className="md:text-xs text-[0.6rem] text-gray-500 md:mt-4 mt-1">
          Source: {source}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
