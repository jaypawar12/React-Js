import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar"; 
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
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar />

      <div className="flex">
        <Sidebar />  
        <main className="flex-1 p-10 bg-gray-100 mt-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">To-Do Management</h1>

          {/* Task Form */}
          <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto mb-12">
            <TaskForm addTask={addTask} />
          </div>

          {/* Task Lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pending Tasks</h2>
              <TaskPending
                tasks={tasks.filter((task) => !task.completed)}
                toggleTaskCompletion={toggleTaskCompletion}
                deleteTask={deleteTask}
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
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
