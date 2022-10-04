import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchBy: "all",
    value: ""

}


export const searchSlise = createSlice({
  name: "search-data",
  initialState,
  reducers: {
    getSearchParamsValue: (state, { payload }) => {
        return {...state, value: payload}
    },
    getSearchParamsBy: (state, { payload }) => {
        return {...state, searchBy: payload}
    },
  },
});

export const searchAction = searchSlise.actions;
export const searchReducer = searchSlise.reducer;
