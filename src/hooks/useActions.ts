import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { userAction } from "../redux/reducers/user.slice";
import {testAction} from '../redux/reducers/test.slice'

const allActions = {
    ...userAction,
    ...testAction
}

export const useActions = () => {
    const dispatch = useDispatch()
    return {...bindActionCreators(allActions, dispatch)}
}