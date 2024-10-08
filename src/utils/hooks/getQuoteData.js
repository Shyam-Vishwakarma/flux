import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, useRef } from "react";
import { FLUX } from "../constants";
import { fetchQuoteDataSuccess } from "../store/stock/quoteDataSlice";

const BATCH_SIZE = 1;
const DELAY_BETWEEN_BATCHES = 1000;

export const useQuoteData = (symbols) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.quoteData);
  const fetchedSymbols = useRef(new Set());
  const isMounted = useRef(true);

  const fetchQuoteData = useCallback(
    async (symbol) => {
      if (data[symbol] || fetchedSymbols.current.has(symbol)) return;
      try {
        const response = await fetch(`${FLUX}/api/stocks/${symbol}/quote`);
        const result = await response.json();
        // if (isMounted.current) {
        dispatch(fetchQuoteDataSuccess(result));
        fetchedSymbols.current.add(symbol);
        // }
      } catch (error) {
        // console.error(`Error fetching data for ${symbol}:`, error);
      }
    },
    [dispatch, data]
  );

  useEffect(() => {
    const symbolsToFetch = symbols.filter(
      (symbol) => !data[symbol] && !fetchedSymbols.current.has(symbol)
    );

    const fetchAllData = async () => {
      for (let i = 0; i < symbolsToFetch.length; i += BATCH_SIZE) {
        const batch = symbolsToFetch.slice(i, i + BATCH_SIZE);

        await Promise.all(batch.map((symbol) => fetchQuoteData(symbol)));

        if (i + BATCH_SIZE < symbolsToFetch.length) {
          await new Promise((resolve) =>
            setTimeout(resolve, DELAY_BETWEEN_BATCHES)
          );
        }
      }
    };

    if (symbolsToFetch.length > 0) {
      fetchAllData();
    }

    return () => {
      isMounted.current = false;
    };
  }, [symbols, fetchQuoteData, data]);

  return null;
};
