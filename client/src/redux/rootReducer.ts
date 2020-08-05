import { combineReducers } from "redux";
import userReducer, { UserState } from "./User/user.reducer";
import alertReducer, { AlertState } from "./alert/alert.reducer";
import portReducer, { PortState } from "./Port/port.reducer";
import loadReducer, { LoadState } from "./loading/loading.reducer";

export type MyReducers = {
  userReducer: UserState;
  alertReducer: AlertState;
  portReducer: PortState;
  loadReducer: LoadState;
};

export default combineReducers({
  userReducer,
  alertReducer,
  portReducer,
  loadReducer,
});
