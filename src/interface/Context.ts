import { Request, Response } from "express";
import { Profile } from "passport-google-oauth20";

export interface MyRequest extends Request {
  profile?: Profile;
}

export interface MyContext {
  req: MyRequest;
  res: Response;
}
