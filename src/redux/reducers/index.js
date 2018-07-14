import { combineReducers } from "redux";
import Auth from "./AuthReducer";
import Signup from "./RegReducer";
import Images from "./ImagesReducer";

export default combineReducers({
  Auth,
  Signup,
  Images
});
