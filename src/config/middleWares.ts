import { Express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import compression from "compression";

export const useMiddleWares = (app: Express) => {
  if (process.env.NODE_ENV === "production") {
    app.use(compression());
  }
  app.use(
    cors({
      origin: "https://portfolio-easy.herokuapp.com",
      // origin: "http://localhost:3000",
      credentials: true,
    })
  );
  app.use(cookieParser());
};
