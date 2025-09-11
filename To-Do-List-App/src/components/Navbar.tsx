export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Admin To-Do Panel</div>
        <div>
          <a href="#" className="px-3 hover:underline">Dashboard</a>
          <a href="#" className="px-3 hover:underline">Tasks</a>
          <a href="#" className="px-3 hover:underline">Settings</a>
        </div>
      </div>
    </nav>
  );
}
