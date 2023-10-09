import { combineReducers } from "redux";
import feedsReducer from "./feedReducer";

const myReducers = combineReducers({
  feeds: feedsReducer,
});

export default myReducers;
