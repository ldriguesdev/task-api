import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { TasksRepository } from '@domain/application/repositories/tasks-repository';
import { PrismaTaskRepository } from './prisma/repositories/prisma-tasks.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: TasksRepository,
      useClass: PrismaTaskRepository,
    },
  ],
  exports: [TasksRepository],
})
export class DatabaseModule {}
