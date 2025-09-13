export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-md fixed w-full z-10">
      <div className="container  flex items-center justify-between py-4 px-6">
        {/* Logo / Brand */}
        <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                Admin Panel
              </h1>
              <p className="text-xs text-gray-400 hidden sm:block">Task Management</p>
            </div>
          </div>

        <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-lg transition-all duration-200 group"
            >
              <span className="font-medium">Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-lg transition-all duration-200 group"
            >
              <span className="font-medium">Tasks</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-lg transition-all duration-200 group"
            >
              <span className="font-medium">Settings</span>
            </a>
          </div>

        {/* Profile / User Action */}
        <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3 bg-gray-700 bg-opacity-50 rounded-full px-4 py-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">AU</span>
              </div>
            </div>
          </div>
      </div>
    </nav>
  );
}
