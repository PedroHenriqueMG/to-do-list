import { z } from "zod";

export const taskSchema = z.object({
  title: z.string(),
  task: z.string(),
});

export type TaskProps = z.infer<typeof taskSchema>;
