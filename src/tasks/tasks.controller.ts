import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskDTO } from './shared/task';
import { TaskService } from './shared/task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() task: TaskDTO) {
    return await this.taskService.create(task);
  }

  @Get()
  async findAll() {
    return await this.taskService.getAll();
  }

  @Get(':id')
  async getByID(@Param('id') id: string): Promise<TaskDTO> {
    return await this.taskService.getById(id);
  }

  @Put(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() task: TaskDTO,
  ): Promise<TaskDTO> {
    return await this.taskService.update(id, task);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
