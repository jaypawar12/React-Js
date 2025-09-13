type Task = {
  text: string;
  completed: boolean;
};

type TaskPendingProps = {
  tasks: Task[];
  toggleTaskCompletion: (index: number) => void;
  deleteTask: (index: number) => void;
};

export default function TaskPending({
  tasks,
  toggleTaskCompletion,
  deleteTask,
}: TaskPendingProps) {
  return (
    <div className="p-5 rounded-lg shadow-lg w-full h-96 bg-amber-100 overflow-y-auto space-y-4">
      <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Pending Tasks
      </h4>

      {tasks.map((task, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-white p-3 rounded-lg shadow"
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(index)}
            className="mr-3"
          />

          <span className="flex-1 text-gray-800">{task.text}</span>

          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => deleteTask(index)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                fill="#0F1729"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
