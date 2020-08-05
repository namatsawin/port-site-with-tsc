import { prop, getModelForClass } from "@typegoose/typegoose";
import { ObjectType, ID, Field } from "type-graphql";

@ObjectType({ description: "User model" })
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  @prop({
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minlength: 5,
    maxlength: 30,
  })
  username: string;

  @Field()
  @prop({ required: true, unique: true, trim: true, lowercase: true })
  email: string;

  @prop()
  providerId?: string;

  @prop({ required: true })
  password: string;

  @prop({ default: 0, required: true })
  tokenVersion: number;

  @Field()
  @prop({ default: Date.now })
  createdAt: Date;
}

export const UserModel = getModelForClass(User);
