import { combineReducers } from "redux";
import { cartred } from "./reducer.js"; 


const rootred = combineReducers({
    cartred, 
});

export default rootred;
