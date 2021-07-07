import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Role } from './role.schema';
export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;
  
  @Prop()
  password: string;

  @Prop()
  enabled: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Role' })
  roles: Role[]

}

export const UserSchema = SchemaFactory.createForClass(User);