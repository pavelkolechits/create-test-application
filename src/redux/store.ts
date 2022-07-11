import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import { createAnswerReducer } from "./reducers/createAnswerReducer";

export const store = configureStore({
  reducer: { createAnswerReducer },
});

export type RootState = ReturnType<typeof store.getState>;
