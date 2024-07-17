import { randomInt } from "crypto";
import { Request, Response } from "express";
import { NotFoundError } from "../helpers/api-errors";
import { TasksRepository } from "../repository/taskRepository";

export class TasksController {
  post(req: Request, res: Response) {
    const { title, task } = req.body;

    const createTask = TasksRepository.create({
      id: randomInt(100),
      title,
      task,
    });

    res.status(201).json(createTask);
  }

  get(req: Request, res: Response) {
    const allTasks = TasksRepository.findAll();

    res.json(allTasks);
  }

  put(req: Request, res: Response) {
    const { ids } = req.params;
    const { title, task } = req.body;
    const id = parseInt(ids);

    const taskFound = TasksRepository.findById(id);

    if (!taskFound) {
      throw new NotFoundError("Tarefa não encontrada");
    }

    const updatedTask = TasksRepository.update({ id, title, task });
    res.json(updatedTask);
  }

  delete(req: Request, res: Response) {
    const { ids } = req.params;
    const id = parseInt(ids);

    const taskFound = TasksRepository.findById(id);

    if (!taskFound) {
      throw new NotFoundError("Tarefa não encontrada");
    }

    TasksRepository.delete(id);
    res.status(204).send();
  }
}
