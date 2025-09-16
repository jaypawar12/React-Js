type NavbarProps = {
  themeColor: string;
};

export default function Navbar({ themeColor }: NavbarProps) {
  return (
    <nav className={` bg-gray-300 shadow-2xl fixed w-full z-50 border-b border-black/45 transition-all duration-500 backdrop-blur-lg`}>

      <div className="w-full flex items-center justify-between py-4 px-8">

        {/* Logo / Brand Section */}
        <div className="flex items-center space-x-4 min-w-fit">
          <div className="relative">
            <div className={`${themeColor} backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-black/20 group hover:scale-105 transition-transform duration-200`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white group-hover:rotate-180 transition-transform duration-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-black drop-shadow-lg">
              To Do App
            </h1>
            <p className="text-xs text-black/80 hidden sm:block font-medium tracking-wide">
              Advanced Task Management System
            </p>
          </div>
        </div>

        {/* Navigation Links - Center */}
        <div className="hidden lg:flex items-center space-x-2">
          <a href="#" className="group flex items-center space-x-3 text-black hover:bg-black/20 px-5 py-3 rounded-2xl transition-all duration-300 font-medium backdrop-blur-sm border border-black/10 hover:border-black hover:shadow-lg">
            <div className={`w-8 h-8 ${themeColor} rounded-xl flex items-center text-white justify-center`}>
              <svg className="w-4 h-4 group-hover:text-blue-200 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5v4m8-4v4" />
              </svg>
            </div>
            <span>Dashboard</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
          </a>

          <a href="#" className="group flex items-center space-x-3 text-black hover:bg-black/20 px-5 py-3 rounded-2xl transition-all duration-300 font-medium backdrop-blur-sm hover:border hover:border-black hover:shadow-lg">
            <div className={`w-8 h-8 ${themeColor} rounded-xl flex items-center  text-white justify-center`}>
              <svg className="w-4 h-4 group-hover:text-purple-200 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <span>Tasks</span>
          </a>

          <a href="#" className="group flex items-center space-x-3 text-black hover:bg-black/20 px-5 py-3 rounded-2xl transition-all duration-300 font-medium backdrop-blur-sm hover:border hover:border-black hover:shadow-lg">
            <div className={`w-8 h-8 ${themeColor} rounded-xl flex items-center text-white justify-center`}>
              <svg className="w-4 h-4 group-hover:text-emerald-200 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span>Settings</span>
          </a>
        </div>

        {/* Right Section - Notifications & Profile */}
        <div className="flex items-center space-x-4">

          {/* Search Button */}
          <button className={`hidden md:flex items-center justify-center w-10 h-10 ${themeColor} text-white hover:bg-black/20 rounded-xl transition-all duration-300 group backdrop-blur-sm hover:shadow-lg`}>
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Notifications */}
          <button className="relative p-2.5 text-black hover:bg-gray-700 rounded-xl transition-all duration-300 group backdrop-blur-sm hover:shadow-lg">
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-3.89-3.89a2.28 2.28 0 000-3.22L15 7v10zM9.12 10.12L15 17H9.12a7.49 7.49 0 010-6.88z" />
            </svg>
            <span className={`absolute -top-1 -right-1 bg-gradient-to-r ${themeColor} border text-gray-100 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold`}>
              3
            </span>
          </button>

          {/* Profile Section */}
          <div className="group flex items-center space-x-3 hover:bg-black/20 rounded-2xl px-4 py-2 transition-all duration-300 cursor-pointer backdrop-blur-sm hover:shadow-lg border border-transparent hover:border-black">

            {/* Profile Image */}
            <div className="relative">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-black/30">
                <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center">
                  <img src="../public/img/profile.jfif" alt="Profile" className="rounded-full" />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-black"></div>
            </div>

            {/* Profile Info */}
            <div className="hidden lg:block text-left">
              <p className="text-sm font-semibold text-black leading-tight">
                Jay Pawar
              </p>
              <p className="text-xs text-black/70 font-medium">
                Administrator
              </p>
            </div>

            {/* Dropdown Arrow */}
            <svg className="w-4 h-4 text-black/70 group-hover:text-black group-hover:rotate-180 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden flex items-center justify-center w-10 h-10 text-black hover:bg-black/20 rounded-xl transition-all duration-300 backdrop-blur-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}