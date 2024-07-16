import z from "zod";

export const tasksSchema = z.object({
  id: z.string(),
  title: z.string(),
  task: z.string(),
});

export const tasksBody = tasksSchema.omit({ id: true });
export const tasksGetAll = z.array(tasksSchema);

export type TasksProps = z.infer<typeof tasksSchema>;
export type TasksBodyProps = z.infer<typeof tasksSchema>;
