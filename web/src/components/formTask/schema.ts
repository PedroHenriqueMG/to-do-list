import { z } from "zod";

export const taskSchema = z.object({
  id: z.number(),
  title: z.string(),
  task: z.string(),
});

const taskSchemaOptional = z.object({
  id: z.number().optional(),
  title: z.string().optional(),
  task: z.string().optional(),
});

export const taskForm = taskSchema.omit({ id: true });

export type TaskProps = z.infer<typeof taskSchemaOptional>;
export type TaskFormProps = z.infer<typeof taskForm>;
