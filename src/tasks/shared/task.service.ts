import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from '../schemas/task.schema';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly TasksModel: Model<Task>) {}

  async getAll() {
    return await this.TasksModel.find().exec();
  }
  async getById(id: string) {
    return await this.TasksModel.findById(id).exec();
  }
  async create(task: Task) {
    const createTask = new this.TasksModel(task);
    return await createTask.save();
  }
  async update(id: string, task: Task) {
    await this.TasksModel.updateOne({ _id: id }, task).exec();
    return this.getById(id);
  }
  async delete(id: string) {
    return await this.TasksModel.deleteOne({ _id: id }).exec();
  }
}
