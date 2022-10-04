import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { userAction } from "../redux/reducers/user.slice";
import {testAction} from '../redux/reducers/create-test.slice'
import { solveTestAction } from "../redux/reducers/solve-test.slice";
import { compareTestAction } from "../redux/reducers/compare-test.slice";
import { searchAction } from "../redux/reducers/search-data.slice";

const allActions = {
    ...userAction,
    ...testAction,
    ...solveTestAction,
    ...compareTestAction,
    ...searchAction

}

export const useActions = () => {
    const dispatch = useDispatch()
    return {...bindActionCreators(allActions, dispatch)}
}