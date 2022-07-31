import { createSlice } from "@reduxjs/toolkit";
import { ITest, IQuestion, IAnswer } from "../../types/test";

const initialState: ITest = {
  testId: null,
  test: [],
  testName: null,
};

interface IEditQuestionAction {
  type: string;
  payload: { question: string; questionId: string };
}
interface IAddAnswerAction {
  type: string;
  payload: { answer: string; questionId: string; answerId: string };
}

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    createQuestion: (state: ITest, { payload }) => {
      return { ...state, test: [...state.test, payload] };
    },

    editQuestion: (state, { payload }: IEditQuestionAction) => {
      const updatedQuestion = state.test.map((i) =>
        i.questionId === payload.questionId
          ? { ...i, question: payload.question }
          : i
      );
      return { ...state, test: updatedQuestion };
    },

    addAnswer: (state: ITest, { payload }: IAddAnswerAction) => {
      const updatedQuestion = state.test.map((i) =>
        i.questionId === payload.questionId
          ? {
              ...i,
              answers: [
                ...i.answers,
                {
                  isCorrect: false,
                  answer: payload.answer,
                  answerId: payload.answerId,
                },
              ],
            }
          : i
      );
      return { ...state, test: updatedQuestion };
    },
    deleteQuestion: (state, { payload }) => {
      const updatedQuestion = state.test.filter(
        (i) => i.questionId !== payload.questionId
      );
      return { ...state, test: updatedQuestion };
    },
  },
});

export const testAction = testSlice.actions;
export const testReducer = testSlice.reducer;
