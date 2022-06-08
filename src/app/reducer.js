import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersReducer";

const rootReducer = combineReducers({
    users : usersReducer
})

export default rootReducer;