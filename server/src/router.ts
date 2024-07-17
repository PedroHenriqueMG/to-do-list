import { Router } from "express";
import { TasksController } from "./controller/TasksController";
import { validate } from "./middleware/zod-validation";
import { tasksBody } from "./@types/tasksSchema";
import swaggerUi from "swagger-ui-express";
import { document } from "./swagger/swagger";

export const router = Router();

//swagger
router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(document));

router.post("/tasks", validate(tasksBody), new TasksController().post);
router.get("/tasks", new TasksController().get);
router.put("/tasks/:ids", validate(tasksBody), new TasksController().put);
router.delete("/tasks/:ids", new TasksController().delete);
