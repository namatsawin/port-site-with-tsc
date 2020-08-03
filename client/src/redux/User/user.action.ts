import { currentUser, UserTypes } from "./user.interface";

export const SetUser = (user: currentUser | null): UserTypes => ({
  type: "SetUser",
  payload: user,
});
