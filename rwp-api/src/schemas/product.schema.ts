import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Manufacturer } from './manufacturer.schema';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  category: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Manufacturer' })
  manufacturer: Manufacturer;
  
  @Prop()
  price: BigInteger;

  @Prop()
  serialNumber: string;

  @Prop()
  photoUrl: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);