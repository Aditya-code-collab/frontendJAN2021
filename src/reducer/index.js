import { combineReducers } from "redux";

import users from "./users";
import searchu from "./search_reducer";
import cityu from "./cityname";
import productu from "./live_product";

export default combineReducers({
  users,
  searchu,
  cityu,
  productu,
});
