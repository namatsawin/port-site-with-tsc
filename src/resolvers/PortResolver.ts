import {
  Query,
  Resolver,
  Arg,
  Mutation,
  UseMiddleware,
  Ctx,
} from "type-graphql";
import { Portfolio, PortfolioModel } from "../entity/Portfolio";
import { LandingInput, WorkInput } from "./inputTypes/portTypes";
import { isAuth } from "../middleWares/Auth";
import { MyContext } from "../interface/Context";
import { User } from "../entity/User";

@Resolver()
export class PortResolver {
  @Query(() => Portfolio, { nullable: true })
  async whoPort(@Arg("id") id: string): Promise<Portfolio | null> {
    const port = await PortfolioModel.findOne({
      user: id,
    });

    if (!port) throw new Error("Not found your portfolio.");

    return port;
  }

  @Mutation(() => Portfolio, { nullable: true })
  @UseMiddleware(isAuth)
  async editLanding(
    @Arg("data", () => LandingInput) data: LandingInput,
    @Ctx() { req }: MyContext
  ): Promise<Portfolio | null> {
    const { id } = req.user as User;
    const port = await PortfolioModel.findOneAndUpdate(
      { user: id },
      {
        $set: {
          name: {
            firstName: data.firstName,
            lastName: data.lastName,
            nickName: data.nickName,
          },
          avatar: data.avatar,
          background: data.background,
          social: {
            faceBook: data.faceBook,
            gitHup: data.gitHup,
            twitter: data.twitter,
            linkedIn: data.linkedIn,
          },
          contact: {
            email: data.email,
            tel: data.tel,
          },
        },
      },
      { new: true }
    );
    return port;
  }

  @Mutation(() => Portfolio, { nullable: true })
  @UseMiddleware(isAuth)
  async editAbout(
    @Arg("about") about: string,
    @Ctx() { req }: MyContext
  ): Promise<Portfolio | null> {
    const { id } = req.user as User;
    const port = await PortfolioModel.findOneAndUpdate(
      { user: id },
      { $set: { about } },
      { new: true }
    );

    return port;
  }

  @Mutation(() => Portfolio)
  @UseMiddleware(isAuth)
  async editResume(
    @Arg("resume") resume: string,
    @Ctx() { req }: MyContext
  ): Promise<Portfolio | null> {
    const { id } = req.user as User;
    const port = await PortfolioModel.findOneAndUpdate(
      { user: id },
      {
        $set: {
          resume,
        },
      },
      { new: true }
    );

    return port;
  }

  @Mutation(() => Portfolio)
  @UseMiddleware(isAuth)
  async editWork(
    @Arg("work", () => WorkInput) myWork: WorkInput,
    @Ctx() { req }: MyContext
  ): Promise<Portfolio | null> {
    const { id } = req.user as User;
    const port = await PortfolioModel.findOne({ user: id });
    if (!port) throw new Error("Portfolio not found.");

    if (myWork.id === "create") {
      delete myWork.id;
      port.works.unshift(myWork);
      await port?.save();
      return port;
    }

    const newWorks = port?.works.map((w) => {
      if (w.id.toString() === myWork.id) {
        return myWork;
      }
      return w;
    });

    port.works = newWorks;
    await port.save();
    return port;
  }

  @Mutation(() => Portfolio)
  @UseMiddleware(isAuth)
  async deleteWork(
    @Arg("workId") workId: string,
    @Ctx() { req }: MyContext
  ): Promise<Portfolio | null> {
    const { id } = req.user as User;
    const port = await PortfolioModel.findOne({ user: id });
    if (!port) throw new Error("Portfolio not found.");

    if (port.works.length < 1) {
      throw new Error("Your works is empty.");
    }

    const removeIndex = port.works.findIndex((w) => w.id === workId);
    if (removeIndex < 0) throw new Error("Work not found.");

    port.works.splice(removeIndex, 1);

    await port.save();
    return port;
  }
}
