import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../interface/Context";
import { VerifyToken } from "../utils/jwtToken";
import { JwtPayload } from "../interface/auth";
import { UserModel, User } from "../entity/User";

export const isAuth: MiddlewareFn<MyContext> = async (
  { context: { req } },
  next
) => {
  const token = req.cookies[process.env.JWT_TOKEN_NAME!];

  if (!token) {
    throw new Error("Not authenticated.");
  }
  try {
    const payload = VerifyToken(token) as JwtPayload;
    const user = (await UserModel.findById(payload.id)) as User;

    if (payload.tokenVersion !== user?.tokenVersion)
      throw new Error("Not authenticated.");

    req.user = user;
  } catch (err) {
    console.log(err);
    throw new Error("Not authenticated");
  }

  return next();
};
