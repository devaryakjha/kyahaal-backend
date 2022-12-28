import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: { createdAt: 'userId' } })
export class User {
  @Prop()
  userId: number;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  username: string;
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
