import { PortTypes } from "./port.interface";
import { Portfolio } from "src/generated/graphql";

export interface PortState {
  currentPort: Portfolio | null;
  ports: Array<Portfolio> | [];
}

const INITIAL_STATE = {
  currentPort: null,
  ports: [],
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
    case "SetPorts":
      return {
        ...state,
        ports: action.payload,
      };

    default:
      return state;
  }
}
