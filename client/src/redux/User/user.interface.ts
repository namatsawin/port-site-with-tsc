export type UserTypes = {
  type: string;
  payload: currentUser | null;
};

export type currentUser = {
  id: string;
  email: string;
  username: string;
  createdAt: Date;
};
