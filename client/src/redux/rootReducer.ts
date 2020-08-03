import { combineReducers } from "redux";
import userReducer, { UserState } from "./User/user.reducer";
import alertReducer, { AlertState } from "./alert/alert.reducer";

export type MyReducers = {
  userReducer: UserState;
  alertReducer: AlertState;
};

export default combineReducers({
  userReducer,
  alertReducer,
});
