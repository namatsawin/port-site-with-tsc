import { ObjectType, Field, ID } from "type-graphql";
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
  @Field(() => ID)
  id: string;
  @Field(() => String)
  @prop()
  name: string;
  @Field(() => String)
  @prop()
  previewImage: string;
  @Field(() => String)
  @prop()
  description: string;
  @Field(() => String)
  @prop()
  viewDemo: string;
  @Field(() => String)
  @prop()
  viewGitHup: string;
  @Field(() => [String])
  @prop({ type: Array, items: String })
  skillsUsed: string[];
}
