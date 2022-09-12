import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { userAction } from "../redux/reducers/user.slice";
import {testAction} from '../redux/reducers/create-test.slice'
import { solveTestAction } from "../redux/reducers/solve-test.slice";
import { initialTestAction } from "../redux/reducers/initial-test.slice";

const allActions = {
    ...userAction,
    ...testAction,
    ...solveTestAction,
    ...initialTestAction

}

export const useActions = () => {
    const dispatch = useDispatch()
    return {...bindActionCreators(allActions, dispatch)}
}