export interface MyUser {
  id: string;
  tokenVersion: number;
}

export interface JwtPayload {
  id: string;
  tokenVersion: number;
  iat: number;
  exp: number;
}
