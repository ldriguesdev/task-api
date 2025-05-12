import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import type { TasksRepository } from '@domain/application/repositories/tasks-repository';
import type { Task } from '@domain/application/entities/task';
import { PrismaTaskMapper } from '@infra/database/mappers/prisma-task-mapper';

@Injectable()
export class PrismaTaskRepository implements TasksRepository {
  constructor(private prisma: PrismaService) {}

  async create(task: Task): Promise<void> {
    const raw = PrismaTaskMapper.toPrisma(task);

    await this.prisma.task.create({
      data: raw,
    });
  }
}
