import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { ObjectType, ID, Field } from "type-graphql";
import { User } from "./User";
import { Name, Social, Works, Contact } from "./children/PortChildren";

@ObjectType({ description: "Portfolio model" })
export class Portfolio {
  @Field(() => ID)
  id: string;

  @prop({ ref: User, required: true })
  user: Ref<User>;

  @Field(() => String)
  @prop({ default: "" })
  avatar: string;

  @Field(() => String)
  @prop({ default: "" })
  resume: string;

  @Field(() => String)
  @prop({ default: "" })
  background: string;

  @Field(() => Name)
  @prop({ default: new Name() })
  name: Name;

  @Field(() => Social)
  @prop({ default: new Social() })
  social: Social;

  @Field(() => [Works])
  @prop({ type: Array, items: Works })
  works: Works[];

  @Field(() => Contact)
  @prop({ default: new Contact() })
  contact: Contact;

  @Field(() => String)
  @prop({ default: "" })
  about: string;

  @Field(() => Date)
  @prop({ default: Date.now })
  createdAt: Date;
}

export const PortfolioModel = getModelForClass(Portfolio);
