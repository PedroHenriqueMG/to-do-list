import { Request, Response } from "express";
import { TasksProps } from "../@types/tasksSchema";
import { randomUUID } from "crypto";
import { NotFoundError } from "../helpers/api-errors";

const tasks: TasksProps[] = [];

export class TasksController {
  create(req: Request, res: Response) {
    const { title, task } = req.body;

    const createTask = {
      id: randomUUID(),
      title,
      task,
    };

    tasks.push(createTask);

    res.json(createTask);
  }

  getAll(req: Request, res: Response) {
    res.json(tasks);
  }

  update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, task } = req.body;
    const taskIndex = tasks.findIndex((t) => t.id === id);
    if (taskIndex === -1) {
      throw new NotFoundError("Tarefa não encontrada");
    }
    const updatedUser = { id, title, task };
    tasks[taskIndex] = updatedUser;
    res.json(updatedUser);
  }

  delete(req: Request, res: Response) {
    const { id } = req.params;
    const userIndex = tasks.findIndex((t) => t.id === id);
    if (userIndex === -1) {
      throw new NotFoundError("Tarefa não encontrada");
    }
    tasks.splice(userIndex, 1);

    res.status(204).send();
  }
}
