import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';

export type UserDocument = User & Document;
const schemaOptions: SchemaOptions = {
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
  timestamps: true,
};

@Schema(schemaOptions)
export class User {
  @Prop({
    require: true,
    unique: true,
    type: mongoose.Schema.Types.String,
  })
  username: string;
  @Prop({
    require: true,
    type: mongoose.Schema.Types.String,
    select: false,
  })
  password: string;

  @Prop({ type: mongoose.Schema.Types.String, default: '' })
  hashedRt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
