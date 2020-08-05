import express from "express";
import passport from "passport";
import { randomBytes } from "crypto";
import { MyRequest } from "../interface/Context";
import { UserModel, User } from "../entity/User";
import { SendToken, CreateToken } from "../utils/jwtToken";
import { Portfolio, PortfolioModel } from "../entity/Portfolio";

const router = express.Router();

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
    session: false,
  })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/",
    session: false,
  }),
  async (req: MyRequest, res) => {
    if (!req.profile) return;

    const { id, emails, provider } = req.profile;

    const existUser = await UserModel.findOne({
      providerId: id,
    });

    if (!existUser) {
      const newUser = await UserModel.create<
        Pick<User, "username" | "email" | "password" | "providerId">
      >({
        providerId: id,
        username: `GOOGLE_${id}`,
        email: (emails && emails[0].value) || provider,
        password: randomBytes(50).toString("base64"),
      });

      await PortfolioModel.create<Pick<Portfolio, "user" | "handlePath">>({
        user: newUser,
        handlePath: `GOOGLE_${id}`,
      });

      SendToken(CreateToken(newUser), res);
      return res.redirect("http://localhost:3000/");
    } else {
      SendToken(CreateToken(existUser), res);
      return res.redirect("http://localhost:3000/");
    }
  }
);

export default router;
