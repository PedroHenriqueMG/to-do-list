import { createTask, updateTask } from "@/src/api/tasks.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { TaskFormProps, TaskProps, taskForm } from "./schema";

export function FormTask({ id, task, title }: TaskProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(taskForm),
    defaultValues: {
      task: task,
      title: title,
    },
  });

  async function handleCreate(data: TaskFormProps) {
    if (id) {
      console.log("update");
      await updateTask(id, data.task, data.title);
      return;
    }
    console.log("create");
    await createTask(data.title, data.task);
    return;
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
