import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  user: {
    uid: string;
    userName: string;
    photo: string;
    email: string;
  } | null;
}

const initialState = {
  user: null,
};

export const userSlise = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state: IUser , action) => {
      return { user: action.payload };
    },
    deleteUser: () => {
      return initialState;
    },
  },
});

export const userAction = userSlise.actions;
export const userReducer = userSlise.reducer;
