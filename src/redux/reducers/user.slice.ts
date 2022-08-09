import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/user";

const initialState = {
  user: null,
};

export const userSlise = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state: IUser, {payload}) => {
      return { user: payload };
    },
    deleteUser: () => {
      return initialState;
    },
  },
});

export const userAction = userSlise.actions;
export const userReducer = userSlise.reducer;
