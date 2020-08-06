import { PortTypes } from "./port.interface";

export const SetPort = (port: any): PortTypes => ({
  type: "SetPort",
  payload: port,
});

export const SetPorts = (ports: any): PortTypes => ({
  type: "SetPorts",
  payload: ports,
});
