type SidebarProps = {
  themeColor: string;
};

export default function Sidebar({ themeColor }: SidebarProps) {
  return (
    <aside className={`mt-20 w-72 bg-gray-300 min-h-screen shadow-2xl transition-all duration-500 backdrop-blur-lg border-r border-black/10`}>

      {/* Navigation Section */}
      <nav className="p-6">
        <div className="mb-8">
          <h2 className="text-xs uppercase tracking-wider text-black/60 font-semibold mb-4 px-4">
            Overview
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className={`group flex items-center gap-4 px-4 py-3 rounded-2xl bg-gradient-to-r from-black/20 to-black/10 backdrop-blur-sm border border-black/20 text-black shadow-lg transform hover:scale-105 hover:border-black transition-all duration-200`}>
                <div className={`w-8 h-8 bg-gradient-to-r from-${themeColor} to-black/20 rounded-xl flex items-center justify-center`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="font-semibold">Dashboard</span>
                <div className={`ml-auto ${themeColor} text-white text-xs px-2 py-1 rounded-full font-medium`}>12</div>
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xs uppercase tracking-wider text-black/60 font-semibold mb-4 px-4">
            Task Management
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="group flex items-center gap-4 px-4 py-3 rounded-2xl text-black hover:bg-black/10 hover:backdrop-blur-sm hover:border hover:border-black transition-all duration-200">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-xl flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <span className="font-medium">All Tasks</span>
                <div className="ml-auto bg-blue-500/20 text-black text-xs px-2 py-1 rounded-full font-medium">8</div>
              </a>
            </li>
            <li>
              <a href="#" className="group flex items-center gap-4 px-4 py-3 rounded-2xl text-black hover:bg-black/10 hover:backdrop-blur-sm hover:border hover:border-black transition-all duration-200">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400/30 to-amber-600/30 rounded-xl flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium">Pending Tasks</span>
                <div className="ml-auto bg-amber-500/20 text-black text-xs px-2 py-1 rounded-full font-medium">5</div>
              </a>
            </li>
            <li>
              <a href="#" className="group flex items-center gap-4 px-4 py-3 rounded-2xl text-black hover:bg-black/10 hover:backdrop-blur-sm hover:border hover:border-black transition-all duration-200">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400/30 to-emerald-600/30 rounded-xl flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">Completed Tasks</span>
                <div className="ml-auto bg-emerald-500/20 text-black text-xs px-2 py-1 rounded-full font-medium">3</div>
              </a>
            </li>
          </ul>
        </div>

        {/* Analytics Section */}
        <div className="mb-8">
          <h2 className="text-xs uppercase tracking-wider text-black/60 font-semibold mb-4 px-4">
            Analytics
          </h2>
          <div className="px-4">
            <div className={`${themeColor} backdrop-blur-sm rounded-2xl p-4 border border-black/10`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-sm font-medium">Productivity</span>
                <span className="text-white font-semibold">85%</span>
              </div>
              <div className="w-full bg-black/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-emerald-400 to-blue-500 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-black/20 pt-6 mt-8">
          <h2 className="text-xs uppercase tracking-wider text-black/60 font-semibold mb-4 px-4">
            Account
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="group flex items-center gap-4 px-4 py-3 rounded-2xl text-black hover:bg-black/10 hover:backdrop-blur-sm hover:border hover:border-black transition-all duration-200">
                <div className={`w-8 h-8 bg-gradient-to-br ${themeColor} text-white rounded-xl flex items-center justify-center`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="font-medium">Profile</span>
              </a>
            </li>
            <li>
              <a href="#" className="group flex items-center gap-4 px-4 py-3 rounded-2xl text-black hover:bg-black/10 hover:backdrop-blur-sm hover:border hover:border-black transition-all duration-200">
                <div className={`w-8 h-8 bg-gradient-to-br ${themeColor} text-white rounded-xl flex items-center justify-center`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-medium">Settings</span>
              </a>
            </li>
            <li>
              <a href="#" className="group flex items-center gap-4 px-4 py-3 rounded-2xl text-black hover:bg-red-500/20 hover:backdrop-blur-sm hover:border hover:border-red-400/30 transition-all duration-200">
                <div className="w-8 h-8 bg-gradient-to-br from-red-400/30 to-red-600/30 rounded-xl flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </div>
                <span className="font-medium">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside >
  );
}