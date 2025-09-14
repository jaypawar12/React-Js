

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
    <div className="p-6 w-full max-h-96 overflow-y-auto space-y-3 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200 shadow-lg">
      {tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-32 text-amber-600">
          <div className="w-12 h-12 mb-3 rounded-full bg-amber-200 flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <p className="text-sm font-medium">All tasks completed!</p>
        </div>
      ) : (
        tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm border border-amber-200 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Empty circle checkbox for pending tasks */}
                <div
                  className="w-5 h-5 border-2 border-amber-500 rounded-full cursor-pointer hover:bg-amber-50 transition-all duration-200"
                  onClick={() => toggleTaskCompletion(index)}
                ></div>
                {/* Task text */}
                <span className="text-gray-700 font-medium">
                  {task.text}
                </span>
              </div>

              <div className="flex space-x-2">

                {/* Edit button */}
                <button
                  onClick={() => { /* Add your edit functionality here */ }}
                  className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-all duration-300"
                  title="Edit task"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Delete button */}
                <button
                  onClick={() => deleteTask(index)}
                  className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-all duration-300"
                  title="Delete task"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1v3M4 7h16" />
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