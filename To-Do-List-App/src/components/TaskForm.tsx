import { useState } from "react";

type TaskFormProps = {
  addTask: (text: string) => void;
};

export default function TaskForm({ addTask }: TaskFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl w-full">
        <h3 className="text-sm font-semibold text-gray-600 mb-3">Compact Version:</h3>
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
            type="button"
            onClick={handleSubmit}
            disabled={!text.trim()}
            className="absolute right-2 top-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white p-2 rounded-full transition-all duration-200 disabled:cursor-not-allowed transform hover:scale-110 active:scale-95"
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
