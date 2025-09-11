export default function TaskList({ title, bgColor, tasks }) {
  return (
    <div className={`${bgColor} p-5 rounded-lg shadow-lg w-full max-w-md h-96 overflow-y-auto space-y-4`}>
      <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">{title}</h4>

      {tasks.map((task, index) => (
        <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
          <input type="checkbox" checked={task.completed} disabled className="mr-3" />
          <span className={`flex-1 text-gray-800 ${task.completed ? 'line-through' : ''}`}>
            {task.text}
          </span>
          <button className="text-red-500 hover:text-red-700">Delete</button>
        </div>
      ))}
    </div>
  );
}
