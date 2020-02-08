import { combineReducers } from "redux";
import { boosterPackReducer } from "./boosterPackReducer";
import { userReducer } from "./userReducer";
import { cardReducer } from "./cardReducer";

export default combineReducers({
  userReducer,
  boosterPackReducer,
  cardReducer
});
