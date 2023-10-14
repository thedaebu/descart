import cartsReducer from "./carts_reducer";
import { Reducer, combineReducers } from "@reduxjs/toolkit";

const entitiesReducer: Reducer = combineReducers({
    carts: cartsReducer
});

export default entitiesReducer;