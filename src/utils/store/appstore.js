// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import popularStocksReducer from "./stock/popularStocksSlice";
import timeSeriesReducer from "./stock/timeSeriesSlice";
import quoteDataReducer from "./stock/quoteDataSlice";

export const appstore = configureStore({
  reducer: {
    popularStocks: popularStocksReducer,
    timeSeries: timeSeriesReducer,
    quoteData: quoteDataReducer,
  },
});

export default appstore;
