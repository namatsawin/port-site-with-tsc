import { Express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

export const useMiddleWares = (app: Express) => {
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
  app.use(cookieParser());
};
