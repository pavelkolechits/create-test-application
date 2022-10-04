import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user.slice";
import { testReducer } from "./reducers/create-test.slice";
import { solveTestReducer } from "./reducers/solve-test.slice";
import { compareTestReducer } from "./reducers/compare-test.slice";
import { searchReducer } from "./reducers/search-data.slice";

export const store = configureStore({
  reducer: {
    userReducer,
    testReducer,
    solveTestReducer,
    compareTestReducer,
    searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
