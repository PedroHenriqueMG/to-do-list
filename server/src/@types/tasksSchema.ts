import z from "zod";

const tasksSchema = z.object({
  id: z.string(),
  title: z.string(),
  task: z.string(),
});

export const tasksBody = tasksSchema.omit({ id: true });

export type TasksProps = z.infer<typeof tasksSchema>;
export type TasksBodyProps = z.infer<typeof tasksSchema>;
