import { createSlice } from "@reduxjs/toolkit";
import { ITest, IQuestion } from "../../types/test";
import {prepareAnswers} from '../../helpers/resetAnswers'


const initialState: ITest  = {
  testId: null,
  test: [],
  testName: null,
  isPrivate: false,
  createdAt: null,
  description: null,
  author: null
};

export const solveTestSlice = createSlice({
  name: "initial-test",
  initialState,
  reducers: {
    getTest: (state, { payload }) => {
        const test = prepareAnswers(payload.test);
        return {...state,  test: test };
        // return payload
      
    }
  },
});

export const initialTestAction = solveTestSlice.actions;
export const initialTestReducer = solveTestSlice.reducer;