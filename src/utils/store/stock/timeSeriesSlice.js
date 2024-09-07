import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  status: "idle",
  error: null,
};

export const timeSeriesSlice = createSlice({
  name: "timeSeries",
  initialState,
  reducers: {
    fetchTimeSeriesStart(state) {
      state.status = "loading";
    },
    fetchTimeSeriesSuccess(state, action) {
      state.status = "succeeded";
      const { symbol, timeSeriesType, data } = action.payload;
      state.data[symbol] = {
        ...state.data[symbol],
        [timeSeriesType]: data,
      };
    },
    fetchTimeSeriesFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  fetchTimeSeriesStart,
  fetchTimeSeriesSuccess,
  fetchTimeSeriesFailure,
} = timeSeriesSlice.actions;

export default timeSeriesSlice.reducer;
