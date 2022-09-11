import { createSlice } from "@reduxjs/toolkit";
import { ITest, IQuestion } from "../../types/test";
import { resetAnswers } from "../../helpers/resetAnswers";




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
  name: "solve-test",
  initialState,
  reducers: {
    getInitialTest: (state, { payload }) => {
      
      return payload
    },
    resetTest: (state) => {
      const test = resetAnswers(state.test);
      return {...state,  test: test };
    },
    selectAnswer: (state, {payload}) => {
      const updatedQuestion = state.test.map((i) =>
      i.questionId === payload.questionId
        ? {
            ...i,
            answers: [
              ...i.answers.map((i) =>
                i.answerId === payload.answerId
                  ? { ...i, isCorrect: !i.isCorrect }
                  : i
              ),
            ],
          }
        : i
    );
    return { ...state, test: updatedQuestion };
    }
  },
});

export const solveTestAction = solveTestSlice.actions;
export const solveTestReducer = solveTestSlice.reducer;
