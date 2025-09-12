type NavBarProps = {
  theme: string;
  toggleTheme: () => void;
};

function NavBar({ theme, toggleTheme }: NavBarProps) {
  return (
    <nav
      className={`${
        theme === "light" ? "bg-indigo-50" : "bg-gray-900"
      } shadow-md fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/img/logo.png"
            alt="Logo"
            className="h-10 w-auto rounded-full shadow-sm"
          />
          <span className={`self-center text-xl font-bold whitespace-nowrap ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}>
            Student Portal
          </span>
        </a>

        {/* Center Search Bar */}
        <div className="hidden md:flex flex-1 justify-center mx-7">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className={`w-full py-2 pl-4 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                theme === "light"
                  ? "bg-white text-gray-900 border border-gray-300 placeholder-gray-500"
                  : "bg-gray-800 text-gray-200 border border-gray-700 placeholder-gray-400"
              }`}
            />
            <svg
              className="absolute right-3 top-2.5 w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
          </div>
        </div>

        {/* Menu Links */}
        <div className="mx-2 hidden md:flex items-center space-x-5 font-medium">
          {["Dashboard", "Courses", "Assignments", "Grades", "Profile"].map(item => (
            <a
              key={item}
              href="#"
              className={`block py-2 rounded-md ${
                theme === "light"
                  ? "text-gray-900 hover:text-blue-600"
                  : "text-white hover:text-blue-500"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Theme Toggle Button */}
        <button
          type="button"
          onClick={toggleTheme}
          className={`flex items-center justify-center mx-14 px-4 py-2 rounded-lg transition-colors duration-300 ${
            theme === "light"
              ? "bg-gray-300 text-gray-800 hover:bg-gray-300"
              : "bg-gray-800 text-gray-200 hover:bg-gray-700"
          }`}
          aria-label="Toggle Theme"
        >
          {theme === "light" ? "🌙" : "🌞"}
        </button>

        {/* User Profile */}
        <div className="ml-4 relative">
          <button type="button" className="flex items-center bg-gray-200 rounded-full p-1">
            <span className="sr-only">Open user menu</span>
            <img
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
              src="/img/profile.jfif"
              alt="User"
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`inline-flex items-center justify-center p-2 rounded-lg md:hidden ${
            theme === "light"
              ? "text-gray-900 hover:bg-gray-100"
              : "text-gray-400 hover:bg-gray-700"
          }`}
          aria-label="Open main menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      </div>
    </nav>
  );
}

export default NavBar;
