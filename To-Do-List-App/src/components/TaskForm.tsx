import { useState, useEffect } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type TaskFormProps = {
  addTask: (text: string) => void;
  editingTask: Task | null;
};

export default function TaskForm({ addTask, editingTask }: TaskFormProps) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editingTask) {
      setText(editingTask.text);
    } else {
      setText("");
    }
  }, [editingTask]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl w-full">

        {/* Proper conditional rendering */}
        {editingTask && (
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Edit Task
          </h3>
        )}

        <div className="relative">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add new task..."
            className="w-full p-4 pr-16 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 shadow-sm"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <button
            type="submit"
            className="absolute right-2 top-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white p-2 rounded-full transition-all duration-200 disabled:cursor-not-allowed transform hover:scale-110 active:scale-95"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                d="M12 4v16m8-8H4"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}
