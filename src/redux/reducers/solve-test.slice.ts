import { createSlice } from "@reduxjs/toolkit";
import { ITest, IQuestion } from "../../types/test";

const initialState: ITest = {
  test: [],
};

export const solveTestSlice = createSlice({
  name: "solve-test",
  initialState,
  reducers: {
    getInitialTest: (state, { payload }) => {
      return { ...state, test: payload };
    },
  },
});

export const solveTestAction = solveTestSlice.actions;
export const solveTestReducer = solveTestSlice.reducer;
