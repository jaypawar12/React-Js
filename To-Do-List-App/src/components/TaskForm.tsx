import { useState } from "react";

type TaskFormProps = {
  addTask: (text: string) => void;
};

export default function TaskForm({ addTask }: TaskFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new task"
        className="flex-1 p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}
