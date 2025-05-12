import { Task } from '@domain/application/entities/task';
import { TasksRepository } from '@domain/application/repositories/tasks-repository';

export class InMemoryTasksRepository implements TasksRepository {
  public tasks: Task[] = [];

  async create(task: Task): Promise<void> {
    this.tasks.push(task);
  }
}
