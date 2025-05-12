import { InMemoryTasksRepository } from '@test/repositories/in-memory-tasks-repository';
import { SendTaskUseCase } from './send-task-use-case';

describe('Send task', () => {
  it('should be able to send a task', async () => {
    const tasksRepository = new InMemoryTasksRepository();
    const sut = new SendTaskUseCase(tasksRepository);

    const { task } = await sut.handle({
      description: 'this is description',
      title: 'this is title',
    });

    expect(tasksRepository.tasks).toHaveLength(1);
    expect(tasksRepository.tasks[0]).toEqual(task);
  });
});
