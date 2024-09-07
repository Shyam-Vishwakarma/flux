import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchQuoteDataSuccess,
  fetchQuoteDataFailure,
} from "../store/stock/quoteDataSlice";

export const useQuoteData = (symbol) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.quoteData);

  const existingQuoteData = data[symbol];

  useEffect(() => {
    const fetchQuoteData = async () => {
      if (existingQuoteData) {
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:8080/api/stocks/${symbol}/quote`
        );
        const result = await response.json();

        console.log("Fetched quote data:", result);
        dispatch(fetchQuoteDataSuccess(result));
      } catch (error) {
        dispatch(fetchQuoteDataFailure(error.toString()));
      }
    };

    fetchQuoteData();
  }, [dispatch, symbol, existingQuoteData]);
};
