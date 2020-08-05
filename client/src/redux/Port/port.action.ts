import { currentPort, PortTypes } from "./port.interface";

export const SetPort = (port: currentPort | null): PortTypes => ({
  type: "SetPort",
  payload: port,
});

export const ClearPort = () => ({
  type: "ClearPort",
});

