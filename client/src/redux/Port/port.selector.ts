import { createSelector } from "reselect";
import { currentPort } from "./port.interface";
import { PortState } from "./port.reducer";

export const selectPort = (state: PortState) => state.currentPort;

export const selectCurrentPort = createSelector(
  [selectPort],
  (port: currentPort) => {
    return port;
  }
);
export const selectWork = (workId: String) =>
  createSelector([selectPort], (port: currentPort) => {
    return port?.works.find((w) => w.id === workId);
  });
