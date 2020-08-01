import { ObjectType, Field } from "type-graphql";
import { prop } from "@typegoose/typegoose";

@ObjectType()
export class Name {
  @Field(() => String)
  @prop({ default: "" })
  firstName: string;
  @Field(() => String)
  @prop({ default: "" })
  lastName: string;
  @Field(() => String)
  @prop({ default: "" })
  nickName: string;
}
@ObjectType()
export class Social {
  @Field(() => String)
  @prop({ default: "" })
  gitHup: string;
  @Field(() => String)
  @prop({ default: "" })
  faceBook: string;
  @Field(() => String)
  @prop({ default: "" })
  linkedIn: string;
  @Field(() => String)
  @prop({ default: "" })
  twitter: string;
}
@ObjectType()
export class Contact {
  @Field(() => String)
  @prop({ default: "" })
  email: string;
  @Field(() => String)
  @prop({ default: "" })
  tel: string;
}

@ObjectType()
export class Works {
  @Field(() => String)
  @prop({ default: "" })
  name: string;
  @Field(() => String)
  @prop({ default: "" })
  previewImage: string;
  @Field(() => String)
  @prop({ default: "" })
  description: string;
  @Field(() => String)
  @prop({ default: "" })
  viewDemo: string;
  @Field(() => String)
  @prop({ default: "" })
  viewGitHup: string;
  @Field(() => [String])
  @prop({ default: [] })
  skillsUsed: [string];
}
