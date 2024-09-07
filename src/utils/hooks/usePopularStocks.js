import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularStocksSuccess,
  fetchPopularStocksFailure,
} from "../store/stock/popularStocksSlice";

const usePopularStocks = async () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.popularStocks);

  if (status === "succeeded" && data) {
    return;
  }

  try {
    const response = await fetch("http://localhost:3001/api/data/stocks");
    const result = await response.json();
    dispatch(fetchPopularStocksSuccess(result));
  } catch (error) {
    dispatch(fetchPopularStocksFailure(error.toString()));
  }
};

export default usePopularStocks;
