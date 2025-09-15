import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import TaskForm from "./components/TaskForm";
import TaskPending from "./components/TaskPending";
import TaskComplete from "./components/TaskComplete";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function AdminDashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const addTask = (text: string) => {
    if (editingTask) {
      const updated = tasks.map((task) =>
        task.id === editingTask.id ? { ...task, text } : task
      );
      setTasks(updated);
      setEditingTask(null);
    } else {
      setTasks([...tasks, { id: Math.floor(Math.random() * 1000), text, completed: false }]);
    }
  };

  const toggleTaskCompletion = (id: number) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const editTask = (task: Task) => {
    setEditingTask(task);
  };

  const deleteTask = (id: number) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar />

      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-14 bg-gray-100 mt-10 ">
          <h1 className="text-3xl font-bold text-gray-800">To-Do Management</h1>

          {/* Task Form */}
          <div className="bg-white p-5 rounded-lg shadow-md max-w-lg mx-auto mb-12">
            <TaskForm addTask={addTask} editingTask={editingTask} />
          </div>

          {/* Task Lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            <div className="bg-amber-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pending Tasks</h2>
              <TaskPending
                tasks={tasks.filter((task) => !task.completed)}
                toggleTaskCompletion={toggleTaskCompletion}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            </div>

            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Completed Tasks</h2>
              <TaskComplete
                tasks={tasks.filter((task) => task.completed)}
                toggleTaskCompletion={toggleTaskCompletion}
                deleteTask={deleteTask}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
