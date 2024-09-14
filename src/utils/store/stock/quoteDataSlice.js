import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  status: "idle",
  error: null,
};

export const quoteDataSlice = createSlice({
  name: "quoteData",
  initialState,
  reducers: {
    fetchQuoteDataStart(state) {
      state.status = "loading";
    },
    fetchQuoteDataSuccess(state, action) {
      state.status = "succeeded";
      const { symbol } = action.payload[0];
      state.data[symbol] = action.payload[0];
    },
    fetchQuoteDataFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  fetchQuoteDataStart,
  fetchQuoteDataSuccess,
  fetchQuoteDataFailure,
} = quoteDataSlice.actions;

export default quoteDataSlice.reducer;
