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
<<<<<<< HEAD
      // origin: "http://portfolio-easy.herokuapp.com/",
=======
>>>>>>> efaac09e236f69eadcbf7fb6d185ab1dfac5dd1a
      credentials: true,
    })
  );
  app.use(cookieParser());
};
