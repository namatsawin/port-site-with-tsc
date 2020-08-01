import { Query, Resolver, Ctx, UseMiddleware } from "type-graphql";
import { Portfolio, PortfolioModel } from "../entity/Portfolio";
import { isAuth } from "../middleWares/Auth";
import { MyContext } from "../interface/Context";
import { User } from "../entity/User";

@Resolver()
export class PortResolver {
  @Query(() => Portfolio, { nullable: true })
  @UseMiddleware(isAuth)
  async myPort(@Ctx() { req }: MyContext): Promise<Portfolio | null> {
    const { id } = req.user as User;

    const port = await PortfolioModel.findOne({
      user: id,
    }); 

    if (!port) throw new Error("Not found your portfolio.");

    return port;
  }
}
