import { FaCarSide, FaPhoneAlt, FaBars, FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full  text-white shadow-md absolute top-0 left-0 z-50">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <FaCarSide className="text-red-500 text-2xl" />
          <span>CarZone</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-red-400">Home</a>
          <a href="#about" className="hover:text-red-400">About</a>
          <a href="#addNewCar" className="hover:text-red-400">Add New Car</a>
          <a href="#viewAllCar" className="hover:text-red-400">View All Car</a>
          <a href="#contact" className="hover:text-red-400">Contact</a>
        </nav>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex items-center bg-gray-800 rounded-full px-3 py-3 w-72">
          <input
            type="text"
            placeholder="Search cars..."
            className="bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none flex-1 px-2"
          />
          <FaSearch className="text-gray-400 hover:text-red-400 cursor-pointer" />
        </div>

        {/* Contact / Call */}
        <div className="hidden md:flex items-center gap-2 bg-red-500 px-4 py-2 rounded-lg cursor-pointer hover:bg-red-600 transition">
          <FaPhoneAlt />
          <span>+91 98765 43210</span>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-3">
          <a href="#home" className="block hover:text-red-400">Home</a>
          <a href="#models" className="block hover:text-red-400">Models</a>
          <a href="#services" className="block hover:text-red-400">Services</a>
          <a href="#about" className="block hover:text-red-400">About</a>
          <a href="#contact" className="block hover:text-red-400">Contact</a>

          {/* Mobile Search Bar */}
          <div className="flex items-center bg-gray-700 rounded-full px-3 py-1 mt-3">
            <input
              type="text"
              placeholder="Search cars..."
              className="bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none flex-1 px-2"
            />
            <FaSearch className="text-gray-400 hover:text-red-400 cursor-pointer" />
          </div>

          <div className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded-lg mt-3 cursor-pointer hover:bg-red-600 transition">
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </div>
        </div>
      )}
    </header>
  );
}
