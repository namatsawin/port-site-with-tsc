export type AlertTypes = {
  type: string;
  payload: alert;
};

export type alert = {
  id: string;
  message: string;
  type: SeverityTypes;
};

export type SeverityTypes = "success" | "info" | "warning" | "error" | undefined;
