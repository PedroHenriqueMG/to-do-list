import { TasksProps } from "../@types/tasksSchema";

const tasks: TasksProps[] = [];

export const TasksRepository = {
  findAll: () => tasks,
  findById: (id: string) => tasks.find((task) => task.id === id),
  create: (task: TasksProps) => {
    tasks.push(task);
    return task;
  },
  update: (updatedTask: TasksProps) => {
    const index = tasks.findIndex((task) => task.id === updatedTask.id);
    if (index === -1) return null;
    tasks[index] = updatedTask;
    return updatedTask;
  },
  delete: (id: string) => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index === -1) return null;
    tasks.splice(index, 1);
  },
};
