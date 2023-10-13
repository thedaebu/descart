import entitiesReducer from "./entities_reducer";
import { Reducer, combineReducers } from "@reduxjs/toolkit";

const rootReducer: Reducer = combineReducers({
    entities: entitiesReducer
});

export default rootReducer;