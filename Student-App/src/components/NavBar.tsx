function NavBar() {
    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
                {/* Logo */}
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img
                        src="../public/img/logo.png"
                        className="h-10 w-auto rounded-full shadow-sm"
                        alt="Logo"
                    />
                    <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
                        Student Portal
                    </span>
                </a>

                {/* Mobile menu button */}
                <button
                    data-collapse-toggle="navbar-menu"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
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

                {/* Center search bar (hidden on small screens) */}
                <div className="hidden md:flex flex-1 justify-center">
                    <div className="relative w-full max-w-3xs">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full py-2 pl-4 pr-10 text-gray-700 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                        />
                        <svg
                            className="absolute right-3 top-2.5 w-5 h-5 text-gray-500 dark:text-gray-400"
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

                {/* Menu */}
                <div className="hidden w-full md:flex md:w-auto me-16" id="navbar-menu">
                    <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 font-medium">
                        {["Dashboard", "Courses", "Assignments", "Grades", "Profile"].map((item) => (
                            <li key={item}>
                                <a
                                    href="#"
                                    className="block py-2 text-gray-700 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 dark:text-gray-300 dark:hover:text-blue-400"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* User profile dropdown */}
                <div className="relative flex items-center">
                    <button
                        type="button"
                        className="flex text-sm bg-gray-200 rounded-full"
                        id="user-menu-button"
                        aria-expanded="false"
                        data-dropdown-toggle="user-dropdown"
                        data-dropdown-placement="bottom"
                    >
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="w-10 h-10 rounded-b-full border-2 border-white shadow-sm"
                            src="../public/img/profile.jfif"
                            alt="user photo"
                        />
                    </button>
                    <div
                        className="hidden z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-xl shadow-lg dark:bg-gray-800 dark:divide-gray-700 absolute right-0 top-12 min-w-[180px]"
                        id="user-dropdown"
                    >
                        <div className="px-4 py-3">
                            <span className="block text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</span>
                            <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                        </div>
                        <ul className="py-2">
                            {["Dashboard", "Settings", "Earnings", "Sign out"].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
