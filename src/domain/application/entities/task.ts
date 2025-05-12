import type { Replace } from 'src/helpers/Replace';

export interface TaskProps {
  title: string;
  description: string;
  createdAt: Date;
  completedAt?: Date | null;
  updatedAt?: Date | null;
}

export class Task {
  private props: TaskProps;

  constructor(props: Replace<TaskProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public set title(title: string) {
    this.props.title = title;
  }

  public get title(): string {
    return this.props.title;
  }

  public set description(description: string) {
    this.props.description = description;
  }

  public get description(): string {
    return this.props.description;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public set completedAt(date: Date | null) {
    this.props.completedAt = date;
  }

  public get completedAt(): Date | null | undefined {
    return this.props.completedAt;
  }

  public set updatedAt(date: Date | null) {
    this.props.updatedAt = date;
  }

  public get updatedAt(): Date | null | undefined {
    return this.props.updatedAt;
  }
}
