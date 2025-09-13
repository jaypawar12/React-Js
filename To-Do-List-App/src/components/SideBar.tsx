export default function SideBar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-8 text-left">Admin Panel</h1>
      
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
              Tasks
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
