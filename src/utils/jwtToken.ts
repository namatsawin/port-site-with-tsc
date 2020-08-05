import { verify, sign } from "jsonwebtoken";
import { Response } from "express";
import { User } from "../entity/User";

export const CreateToken = (user: User) => {
  return sign(
    { id: user.id, tokenVersion: user.tokenVersion },
    process.env.JWT_TOKEN_SECRET!,
    { expiresIn: "7d" }
  );
};

export const VerifyToken = (token: string) => {
  return verify(token, process.env.JWT_TOKEN_SECRET!);
};

export const SendToken = (token: string, res: Response) => {
  return res.cookie(process.env.JWT_TOKEN_NAME!, token, { httpOnly: true });
};