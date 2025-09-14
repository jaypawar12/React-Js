export default function SideBar() {
  return (
    <aside className="w-64 bg-gradient-to-b from-slate-900 to-gray-900 text-white min-h-screen shadow-xl">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          </div>
          <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            TaskMaster
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-6">
        <ul className="space-y-3">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300"
            >
              <span className="font-medium">Total Task</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200"
            >
              <span className="font-medium">Tasks</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200"
            >
              <span className="font-medium">Pending Task</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200"
            >
              <span className="font-medium">Complete Task</span>
            </a>
          </li>
        </ul>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-700/50">
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200"
              >
                <span className="font-medium">Profile</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200"
              >
                <span className="font-medium">Settings</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-all duration-200"
              >
                <span className="font-medium">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
