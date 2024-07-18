import { api } from "../service/api";

export const createTask = async (title: string, taks: string) => {
  const response = await api.post("/tasks", {
    title,
    taks,
  });
  return response.data;
};

export const getAllTasks = async () => {
  const response = await api.get("/tasks");
  return response.data;
};

export const updateTask = async (id: number, title: string, taks: string) => {
  const response = await api.put(`/tasks/${id}`, {
    title,
    taks,
  });
  return response.data;
};

export const deleteTask = async (id: number) => {
  const response = await api.put(`/tasks/${id}`);
  return response.data;
};
