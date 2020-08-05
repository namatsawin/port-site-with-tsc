import { Query, Resolver, Mutation, Ctx, UseMiddleware } from "type-graphql";
import { UserModel, User } from "../entity/User";
import { isAuth } from "../middleWares/Auth";
import { MyContext } from "../interface/Context";

@Resolver()
export class UserResolver {
  @Query(() => User)
  @UseMiddleware(isAuth)
  async me(@Ctx() { req }: MyContext) {
    return req.user;
  }

  @Query(() => String)
  hello() {
    return "hello";
  }

  @Query(() => [User], { nullable: "items" })
  async users() {
    return UserModel.find().sort({ createdAt: -1 });
  }

  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async logOut(@Ctx() { req, res }: MyContext) {
    const { id, tokenVersion } = req.user as User;
    try {
      await UserModel.findByIdAndUpdate(id, {
        $set: { tokenVersion: tokenVersion + 1 },
      }); 
      res.clearCookie(process.env.JWT_TOKEN_NAME!);
      return "Logout successfully.";
    } catch (error) {
      throw error;
    }
  }
}
