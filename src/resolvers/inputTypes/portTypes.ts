import { InputType, Field } from "type-graphql";

@InputType()
export class LandingInput {
  @Field()
  handlePath: string;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  nickName: string;
  @Field()
  avatar: string;
  @Field()
  background: string;
  @Field()
  linkedIn: string;
  @Field()
  gitHup: string;
  @Field()
  faceBook: string;
  @Field()
  twitter: string;
  @Field()
  email: string;
  @Field()
  tel: string;
}

@InputType()
export class WorkInput {
  @Field(() => String)
  id: string;
  @Field(() => String)
  name: string;
  @Field(() => String)
  previewImage: string;
  @Field(() => String)
  description: string;
  @Field(() => String)
  viewDemo: string;
  @Field(() => String)
  viewGitHup: string;
  @Field(() => [String])
  skillsUsed: [string];
}
