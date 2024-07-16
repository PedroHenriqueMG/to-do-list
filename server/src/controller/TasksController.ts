import { Request, Response } from "express";
import { TasksProps } from "../@types/tasksSchema";

const tasks: TasksProps[] = [];

export class TasksController {
  create(req: Request, res: Response) {
    res.send("passou");
  }
}
