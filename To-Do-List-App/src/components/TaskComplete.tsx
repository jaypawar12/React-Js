type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type TaskCompleteProps = {
  tasks: Task[];
  toggleTaskCompletion: (index: number) => void;
  deleteTask: (index: number) => void;
};

export default function TaskComplete({
  tasks,
  toggleTaskCompletion,
  deleteTask,
}: TaskCompleteProps) {
  return (
    <div className="p-6 max-h-96 overflow-y-auto space-y-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 shadow-lg relative">

      {/* No Completed Tasks Message */}
      {tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-32 text-green-600">
          <div className="w-12 h-12 mb-3 rounded-full bg-green-200 flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-sm font-medium">No completed tasks yet</p>
        </div>
      ) : (
        tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm border border-green-200 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-between">

              <div
                className="flex items-center space-x-4 cursor-pointer"
                onClick={() => toggleTaskCompletion(task.id)}
              >
                <div className="w-6 h-6 rounded-full bg-white border-2 border-green-500 flex items-center justify-center shadow-sm transition-transform duration-200 hover:scale-105">
                  {task.completed && (
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="text-gray-500 font-medium line-through">
                  {task.text}
                </span>
              </div>

              {/* Undo & Delete Buttons */}
              <div className="flex space-x-2">

                {/* Undo/Restore Button */}
                <button
                  onClick={() => toggleTaskCompletion(task.id)}
                  className="p-2 text-amber-600 hover:bg-amber-100 rounded-lg transition-all duration-300"
                  title="Mark as incomplete"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => deleteTask(task.id)}
                  className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-all duration-300"
                  title="Delete task"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>

              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
