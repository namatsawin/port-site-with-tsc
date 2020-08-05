import { PortTypes, currentPort } from "./port.interface";

export interface PortState {
  currentPort: currentPort | null;
}

const INITIAL_STATE = {
  currentPort: null,
};

export default function (
  state: PortState = INITIAL_STATE,
  action: PortTypes
): PortState {
  switch (action.type) {
    case "SetPort":
      return {
        ...state,
        currentPort: action.payload,
      };
    case "ClearPort":
      return {
        ...state,
        currentPort: null,
      };

    default:
      return state;
  }
}
