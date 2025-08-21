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

                {/* Menu */}
                <div className="hidden w-full md:flex md:w-auto" id="navbar-menu">
                    <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 font-medium">
                        {["Home", "About", "Services", "Pricing", "Contact"].map((item) => (
                            <li key={item}>
                                <a 
                                    href="#" 
                                    className="block py-2 px-3 text-gray-700 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 dark:text-gray-300 dark:hover:text-blue-400"
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
                        className="flex text-sm bg-gray-200 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        id="user-menu-button" 
                        aria-expanded="false" 
                        data-dropdown-toggle="user-dropdown" 
                        data-dropdown-placement="bottom"
                    >
                        <span className="sr-only">Open user menu</span>
                        <img 
                            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" 
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
