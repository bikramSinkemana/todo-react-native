import { combineReducers } from "redux";
import { todoCount } from "./todoReducer";

export default combineReducers({
  todo: todoCount
});
