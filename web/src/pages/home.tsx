import { TasksTable } from "../components/taskTable/taskTable";

export function Home() {
  return (
    <section className="flex flex-col items-center">
      <TasksTable />
    </section>
  );
}
