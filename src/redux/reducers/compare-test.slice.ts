import { createSlice } from "@reduxjs/toolkit";
import { ITest, IQuestion } from "../../types/test";

interface IInitialState {
  originTest: IQuestion[];
  userVariantTest: IQuestion[];
  wrongAnswers: string[] | []
}

const initialState: IInitialState = {
  originTest: [],
  userVariantTest: [],
  wrongAnswers: []
};

export const compareTestSlice = createSlice({
  name: "compare-test",
  initialState,
  reducers: {
    compareTests: (state) => {
      let result: string[] | [] = [];

      for (let i = 0; i < state.originTest.length; i++) {
        for (let j = 0; j < state.originTest[i].answers.length; j++) {
          if (
            state.originTest[i].answers[j].isCorrect !==
            state.userVariantTest[i].answers[j].isCorrect
          ) {
            result = [...result, state.userVariantTest[i].answers[j].answerId];
          }
        }
      }
      return { ...state, wrongAnswers: result };
    },
    getOriginTest: (state, { payload }) => {
      return { ...state, originTest: payload.test };
    },
    getUserVariantTest: (state, { payload }) => {
      return { ...state, userVariantTest: payload };
    },
  },
});

export const compareTestAction = compareTestSlice.actions;
export const compareTestReducer = compareTestSlice.reducer;
