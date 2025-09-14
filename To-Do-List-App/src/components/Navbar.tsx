export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl fixed w-full z-50 border-b border-gray-700">

      <div className="w-full flex items-center py-4 px-6">

        {/* Logo / Brand */}
        <div className="flex items-center space-x-3 w-72">
          <div className="bg-blue-600 p-2 rounded-lg shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
              To Do Panel
            </h1>
            <p className="text-xs text-gray-400 hidden sm:block font-medium">
              Task Management System
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-2">

          <a
            href="#"
            className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700/50 px-4 py-2 rounded-xl transition-all duration-300 font-medium group"
          >
            <svg
              className="w-5 h-5 group-hover:text-blue-400 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5v4m8-4v4" />
            </svg>
            <span>Dashboard</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700/50 px-4 py-2 rounded-xl transition-all duration-300 font-medium group"
          >
            <svg
              className="w-5 h-5 group-hover:text-blue-400 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>Tasks</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700/50 px-4 py-2 rounded-xl transition-all duration-300 font-medium group"
          >
            <svg
              className="w-5 h-5 group-hover:text-blue-400 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Settings</span>
          </a>

        </div>

        {/* Center Search Bar */}
        <div className="hidden md:flex flex-1 justify-center mx-8">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full py-3 pl-5 pr-12 rounded-2xl bg-gray-800/80 text-gray-200 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-5 h-5 text-gray-500 hover:text-gray-300 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="hidden md:flex items-center space-x-4">

          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300 group">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5.8-5.8a5.9 5.9 0 110-8.4L15 7l5 5v5zM7.07 7.07l5.86 5.86M7 17h5l5-5" />
            </svg>

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
              3
            </span>
          </button>

          {/* Profile Info */}
          <div className="flex items-center space-x-3 hover:bg-gray-700/30 rounded-xl px-3 py-2 transition-all duration-300 cursor-pointer group">
            <div className="hidden md:flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <img
                  src="../public/img/profile.jfif"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </div>

            <div className="hidden lg:block text-left">
              <p className="text-sm font-medium text-white">John Doe</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>

            <svg
              className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}
