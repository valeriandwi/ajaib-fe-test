import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = configureStore({reducer : rootReducer},composedEnhancer);
export default store;
