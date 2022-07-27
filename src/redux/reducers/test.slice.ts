import { createSlice } from "@reduxjs/toolkit";
import {ITest, IQuestion} from "../../types/test"

type Test = IQuestion[] | []

const initialState: ITest = {
    testId: null,
    test: [],
    testName: null
}
    
interface IAction {
    type: string;
    payload: IQuestion
}


export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        createQuestion: (state, action) => {
            return {...state, test: [...state.test, action.payload]}
        }
    }

})

export const testAction = testSlice.actions
export const testReducer = testSlice.reducer

