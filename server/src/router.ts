import { Router } from "express";
import { TasksController } from "./controller/TasksController";
import { validate } from "./middleware/zod-validation";
import { tasksBody } from "./@types/tasksSchema";

export const router = Router();

router.post("/tasks", validate(tasksBody), new TasksController().create);
router.get("/tasks", new TasksController().getAll);
router.put("/tasks/:id", validate(tasksBody), new TasksController().update);
router.delete("/tasks/:id", new TasksController().delete);
