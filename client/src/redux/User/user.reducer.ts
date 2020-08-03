import { UserTypes, currentUser } from "./user.interface";

export interface UserState {
  currentUser: currentUser | null;
}

const INITIAL_STATE = {
  currentUser: null,
};

export default function (
  state: UserState = INITIAL_STATE,
  action: UserTypes
): UserState {
  switch (action.type) {
    case "SetUser":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
}
