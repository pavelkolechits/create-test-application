import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user.slice";
import { testReducer } from "./reducers/test.slice";

export const store = configureStore({
  reducer: {userReducer, testReducer}
});

export type RootState = ReturnType<typeof store.getState>;
