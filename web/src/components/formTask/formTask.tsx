import { createTask } from "@/src/api/tasks.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { TaskProps, taskSchema } from "./schema";

export function FormTask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(taskSchema),
  });

  async function handleCreate(data: TaskProps) {
    const request = await createTask(data.title, data.task);
    console.log(request);
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleCreate)}>
      <Input placeholder="Titulo" {...register("title")} />
      {errors.title ? <p>{errors.title.message}</p> : <p></p>}
      <Input placeholder="Nome da tarefa" {...register("task")} />
      {errors.task ? <p>{errors.task.message}</p> : <p></p>}
      <Button type="submit">Enviar</Button>
    </form>
  );
}
