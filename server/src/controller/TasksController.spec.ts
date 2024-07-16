import { TasksRepository } from "../repository/taskRepository";

describe("Tasks API", () => {
  it("should create a task", () => {
    const newTask = {
      id: "taskId1",
      title: "teste",
      task: "tetse",
    };

    const createdTask = TasksRepository.create(newTask);

    expect(createdTask).toEqual(newTask);
  });

  it("should get all tasks", () => {
    const allTasks = TasksRepository.findAll();

    expect(allTasks).toHaveLength(1);
  });

  it("should update task", () => {
    const newTask = {
      id: "taskId1",
      title: "teste2",
      task: "tetse2",
    };

    const updatedTask = TasksRepository.update(newTask);

    expect(updatedTask).toEqual(newTask);
  });

  it("should delete task", () => {
    TasksRepository.delete("taskId1");

    const task = TasksRepository.findById("taskId1");

    expect(task).toBeNull;
  });
});
