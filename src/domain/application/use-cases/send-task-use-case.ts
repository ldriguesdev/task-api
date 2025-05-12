import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../repositories/tasks-repository';
import { Task } from '../entities/task';

interface SendTaskUseCaseRequest {
  title: string;
  description: string;
}

interface SendTaskUseCaseResponse {
  task: Task;
}

@Injectable()
export class SendTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async handle(
    request: SendTaskUseCaseRequest,
  ): Promise<SendTaskUseCaseResponse> {
    const { description, title } = request;

    const task = new Task({
      description,
      title,
    });

    await this.tasksRepository.create(task);

    return {
      task,
    };
  }
}
