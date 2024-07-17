import { TasksTable } from "./components/taskTable/taskTable";

export default function App() {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-3xl font-bold underline">Home</h1>
      <TasksTable />
    </section>
  );
}
