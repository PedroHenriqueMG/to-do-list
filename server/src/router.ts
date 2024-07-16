import { Router } from "express";
import { TasksController } from "./controller/TasksController";

export const router = Router();

router.get("/", new TasksController().create);
