import { Request, Response } from "express";
import { TasksProps } from "../@types/tasksSchema";
import { randomUUID } from "crypto";

const tasks: TasksProps[] = [];

export class TasksController {
  async create(req: Request, res: Response) {
    const { title, task } = req.body;

    const createTask = {
      id: randomUUID(),
      title,
      task,
    };

    await tasks.push(createTask);

    res.json(createTask);
  }

  async getAll(req: Request, res: Response) {
    await res.json(tasks);
  }
}
