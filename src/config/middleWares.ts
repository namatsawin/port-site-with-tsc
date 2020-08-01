import { Express } from "express";
import cookieParser from "cookie-parser";

export const useMiddleWares = (app: Express) => {
  app.use(cookieParser());
};
