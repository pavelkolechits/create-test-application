import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { userAction } from "../redux/reducers/user.slice";

const allActions = {
    ...userAction
}

export const useActions = () => {
    const dispatch = useDispatch()
    return {...bindActionCreators(allActions, dispatch)}
}