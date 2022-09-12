import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user.slice";
import { testReducer } from "./reducers/create-test.slice";
import { solveTestReducer } from "./reducers/solve-test.slice";
import { initialTestReducer } from "./reducers/initial-test.slice";


export const store = configureStore({
  reducer: {userReducer, testReducer, solveTestReducer, initialTestReducer}
});

export type RootState = ReturnType<typeof store.getState>;
