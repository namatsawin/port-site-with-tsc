import { v4 as uuidv4 } from "uuid";
import { AlertTypes, alert, SeverityTypes } from "./alert.interface";
import { AlertState } from "./alert.reducer";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

interface SetParams {
  message: string;
  type: SeverityTypes;
}

type MyThunkDispatch = ThunkDispatch<AlertState, AlertTypes, Action>;

export const SetAlert = ({ message, type }: SetParams) => (
  dispatch: MyThunkDispatch
) => {
  const id = uuidv4();
  const payload = { id, message, type };
  dispatch({
    type: "SetAlert",
    payload,
  });

  setTimeout(() => dispatch(RemoveAlert(payload)), 3000);
};

const RemoveAlert = (payload: alert): AlertTypes => ({
  type: "RemoveAlert",
  payload: payload,
});
