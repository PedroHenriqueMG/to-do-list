import { createTask, updateTask } from "@/src/api/tasks.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { TaskFormProps, taskCreateSchema } from "./schema";
import { Payment } from "../taskTable/taskTable";

export function FormTask({ payment }: { payment: Payment | undefined }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormProps>({
    resolver: zodResolver(taskCreateSchema),
    defaultValues: payment,
  });

  async function handleCreate(data: TaskFormProps) {
    if (payment?.id) {
      await updateTask(payment.id, data.task, data.title);
      window.location.reload();
      return;
    }
    await createTask(data.title, data.task);
    window.location.reload();
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
