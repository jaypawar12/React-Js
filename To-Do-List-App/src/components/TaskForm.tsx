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

  const handleInputChange = (e: any) => {
    setText(e.target.value);
  };

  return (
    <div className="relative">
      {/* Floating Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-50"></div>

      <form onSubmit={handleSubmit} className="relative">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">

          {/* Header Section */}
          <div className="bg-gradient-to-r from-slate-50 to-blue-50/80 px-8 py-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className={`w-12 h-12 ${editingTask ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 'bg-gradient-to-br from-blue-500 to-purple-600'} rounded-2xl flex items-center justify-center shadow-lg`}>
                  {editingTask ? (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {editingTask ? "Edit Task" : "Create New Task"}
                </h3>
                <p className="text-gray-600 text-sm font-medium">
                  {editingTask ? "Update your task details" : "Add a new task to your list"}
                </p>
              </div>
            </div>
          </div>

          {/* Input Section */}
          <div className="p-8">
            <div className="relative group">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm"></div>

              <div className="relative">
                <input
                  type="text"
                  value={text}
                  onChange={handleInputChange}
                  placeholder={editingTask ? "Update your task..." : "What needs to be done?"}
                  className="w-full p-6 pr-20 bg-white border-2 border-gray-200 rounded-2xl focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 outline-none transition-all duration-300 shadow-lg text-gray-800 placeholder-gray-400 text-lg font-medium group-focus-within:shadow-xl"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 text-white p-4 rounded-xl transition-all duration-300 disabled:cursor-not-allowed transform hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl group"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                  >
                    <path
                      d="M12 4v16m8-8H4"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Character Counter & Tips */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{text.length}/100 characters</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-400">
                <kbd className="px-2 py-1 bg-gray-100 rounded font-mono">Enter</kbd>
                <span>to save</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}