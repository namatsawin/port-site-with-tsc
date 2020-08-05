export interface LoadState {
  isLoading: Boolean;
}

interface LoaderTypes {
  type: string;
  payload: Boolean;
}

const INITIAL_STATE = {
  isLoading: false,
};

export default function (
  state: LoadState = INITIAL_STATE,
  action: LoaderTypes
): LoadState {
  switch (action.type) {
    case "SetLoading":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}
