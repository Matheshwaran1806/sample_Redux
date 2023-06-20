import { combineReducers } from "redux"
import Accountreducers from "./Accountreducers";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers ({
    account: Accountreducers
})
const store = configureStore ({
    reducer : rootReducer
})
export default store



