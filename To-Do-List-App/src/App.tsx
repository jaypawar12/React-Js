import { useState } from "react";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskPending from "./components/TaskPending";
import TaskComplete from "./components/TaskComplete";

type Task = {
  text: string;
  completed: boolean;
};

export default function AdminDashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleTaskCompletion = (index: number) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index: number) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-5 min-h-screen">
          <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
          <nav>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Dashboard</a></li>
              <li><a href="#" className="hover:underline">Tasks</a></li>
              <li><a href="#" className="hover:underline">Settings</a></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6">To-Do Management</h1>

          {/* Task Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mb-10">
            <TaskForm addTask={addTask} />
          </div>

          {/* Task Lists */}
          <div className="flex flex-wrap gap-10 justify-center">
            <TaskPending
              tasks={tasks.filter((task) => !task.completed)}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
            />

            <TaskComplete
              tasks={tasks.filter((task) => task.completed)}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
