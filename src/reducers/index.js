import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    isLogged: loggedReducer
});

export default allReducers;