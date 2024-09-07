import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const popularStocksSlice = createSlice({
  name: "popularStocks",
  initialState,
  reducers: {
    fetchPopularStocksStart(state) {
      state.status = "loading";
    },
    fetchPopularStocksSuccess(state, action) {
      state.status = "succeeded";
      state.data = action.payload;
    },
    fetchPopularStocksFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  fetchPopularStocksStart,
  fetchPopularStocksSuccess,
  fetchPopularStocksFailure,
} = popularStocksSlice.actions;

export default popularStocksSlice.reducer;
