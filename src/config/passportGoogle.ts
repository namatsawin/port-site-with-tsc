import { Strategy } from "passport-google-oauth20";
import passport from "passport";
import { MyRequest } from "../interface/Context";

export const PassportGoogle = () => {
  passport.use(
    new Strategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL: "http://localhost:5000/auth/google/callback",
        passReqToCallback: true,
      },
      (req: MyRequest, _accessToken, _refreshToken, profile, cb) => {
        try {
          if (profile) {
            req.profile = profile;
            cb(undefined, profile);
          }
        } catch (error) {
          cb(error);
        }
      }
    )
  );
};
