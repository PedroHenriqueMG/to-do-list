import { z } from "zod";

const taskSchema = z.object({
  id: z.number(),
  title: z.string().min(1, "A title is required"),
  task: z.string().min(1, "A task is required"),
});

export const taskCreateSchema = taskSchema.extend({
  id: z.number().optional(),
});

export type TaskFormProps = z.infer<typeof taskCreateSchema>;
