import { AlertTypes, alert } from "./alert.interface";

export interface AlertState {
  alerts: Array<alert>;
}

const INITIAL_STATE = {
  alerts: [],
};

export default function (
  state: AlertState = INITIAL_STATE,
  action: AlertTypes
): AlertState {
  const { type, payload } = action;
  switch (type) {
    case "SetAlert":
      return {
        ...state,
        alerts: [...state.alerts, payload],
      };
    case "RemoveAlert":
      return {
        ...state,
        alerts: state.alerts.filter((alert) => alert.id !== payload.id),
      };
    default:
      return state;
  }
}
