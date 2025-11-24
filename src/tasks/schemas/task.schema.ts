import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: false })
  codigo?: number;

  @Prop({ required: true })
  description: string;

  completed: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
