import type { Task } from '@domain/application/entities/task';

export class PrismaTaskMapper {
  static toPrisma(task: Task) {
    return {
      title: task.title,
      description: task.description,
      createdAt: task.createdAt,
      completedAt: task.completedAt,
      updatedAt: task.updatedAt,
    };
  }
}
