import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/SideBar";
import TaskForm from "./Components/TaskForm";
import TaskPending from "./Components/TaskPending";
import TaskComplete from "./Components/TaskComplete";
import { ToastContainer, toast } from 'react-toastify';

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function AdminDashboard() {
  const [tasks, setTasks] = useState<Task[]>(JSON.parse(localStorage.getItem("tasks") || "[]"));
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [themeOpen, setThemeOpen] = useState(false);
  const [themeColor, setThemeColor] = useState(localStorage.getItem("themeColor") || "bg-black");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("themeColor", themeColor);
  }, [themeColor]);

  const addTask = (text: string) => {
    if (editingTask !== null) {
      const updated = tasks.map((task) =>
        task.id === editingTask.id ? { ...task, text } : task
      );
      toast.success("Task updated successfully!");
      setTasks(updated);
      setEditingTask(null);
    } else {
      setTasks([...tasks, { id: Math.floor(Math.random() * 1000), text, completed: false }]);
      toast.success("Task added successfully!");
    }
  };

  const toggleTaskCompletion = (id: number) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
    toast.info("Task status updated!");
  };

  const editTask = (task: Task) => {
    setEditingTask(task);
  };

  const deleteTask = (id: number) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
    toast.success("Task deleted successfully!");
  };

  const colors = [
    // Red shades
    "bg-red-800", "bg-red-900",

    // Yellow shades
    "bg-yellow-800", "bg-yellow-900",

    // Green shades
    "bg-green-700", "bg-green-800", "bg-green-900",

    // Cyan shades
    "bg-cyan-800", "bg-cyan-900",

    // Blue shades
    "bg-blue-800", "bg-blue-900",

    // Orange shades
    "bg-orange-700", "bg-orange-800", "bg-orange-900",

    // Teal shades
    "bg-teal-800", "bg-teal-900",

    // Gray shades
    "bg-gray-500", "bg-gray-600", "bg-gray-700",

    // Black
    "bg-black"
  ];


  const handleThemeChange = (colorClass: string) => {
    setThemeColor(colorClass);
    setThemeOpen(false);
  };

  return (
    <div className={`min-h-screen font-sans bg-gray-300 text-white transition-colors duration-500`}>
      <Navbar themeColor={themeColor} />

      <div className="flex">
        <Sidebar themeColor={themeColor} />

        <main className="flex-1 p-14 mt-16">

          <div className={`${themeColor} p-5 rounded-lg shadow-md max-w-lg mx-auto mb-12 text-black`}>
            <TaskForm addTask={addTask} editingTask={editingTask} themeColor={themeColor} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-amber-50 p-6 rounded-lg shadow-md text-black">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4 ">Pending Tasks</h2>
              <TaskPending
                tasks={tasks.filter((task) => !task.completed)}
                themeColor={themeColor}
                toggleTaskCompletion={toggleTaskCompletion}
                deleteTask={deleteTask}
                editTask={editTask}
              />

            </div>

            <div className="bg-green-100 p-6 rounded-lg shadow-md text-black">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Completed Tasks</h2>
              <TaskComplete
                tasks={tasks.filter((task) => task.completed)}
                toggleTaskCompletion={toggleTaskCompletion}
                deleteTask={deleteTask}
                themeColor={themeColor}
              />
            </div>
          </div>

          {/* Theme Changer Button */}
          <div className="fixed bottom-10 right-5 flex items-end z-50">

            {themeOpen && (
              <div className="flex flex-col items-center p-4 bg-gray-800 rounded-2xl shadow-2xl space-y-4 mr-4">
                <div className="grid grid-cols-4 gap-3">
                  {colors.map((color, idx) => (
                    <button
                      key={idx}
                      className={`w-10 h-10 rounded-full ${color} border-2 border-white shadow-lg cursor-pointer transition-transform hover:scale-110`}
                      onClick={() => handleThemeChange(color)}
                    />
                  ))}
                </div>

                <button
                  className="w-10 h-10 rounded-full bg-gray-600 text-white shadow-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  onClick={() => setThemeOpen(false)}
                  title="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}

            <button
              className={`${themeColor} text-white p-4 rounded-full shadow-lg cursor-pointer transition-all`}
              onClick={() => setThemeOpen(!themeOpen)}
              title="Toggle Theme Panel"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m8.66-10h1M3.34 12h1m15.364 5.364l.707.707M4.929 4.929l.707.707M16.95 7.05l.707-.707M7.05 16.95l.707-.707M12 5a7 7 0 000 14 7 7 0 000-14z"
                />
              </svg>
            </button>

          </div>
        </main>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>

  );
}
