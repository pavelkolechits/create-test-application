import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "down",
};

export const sortSlise = createSlice({
  name: "search-data",
  initialState,
  reducers: {
    getSortParams: (state, { payload }) => payload,
  },
});

export const sortAction = sortSlise.actions;
export const sortReducer = sortSlise.reducer;
