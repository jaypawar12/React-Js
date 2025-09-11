import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([
    { text: "Sample Task 1", completed: false },
    { text: "Sample Task 2", completed: false },
    { text: "Sample Task 3", completed: false },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          To-Do List
        </h3>

        <TaskForm />
      </div>

      <div className="flex flex-wrap gap-10 justify-center mt-10 px-5">

        <TaskList
          title="Pending Tasks"
          bgColor="bg-amber-100"
          tasks={[
            { text: "Sample Task 1", completed: false },
            { text: "Sample Task 2", completed: false },
            { text: "Sample Task 3", completed: false },
          ]}
        />

        <TaskList
          title="Completed Tasks"
          bgColor="bg-green-100"
          tasks={[
            { text: "Sample Task 1", completed: true },
            { text: "Sample Task 2", completed: true },
            { text: "Sample Task 3", completed: true },
          ]}
        />

      </div>

    </div>
  );
}
