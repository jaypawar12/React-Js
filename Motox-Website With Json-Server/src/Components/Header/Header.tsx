import { FaCarSide, FaPhoneAlt, FaBars, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-gray-900/40 backdrop-blur-md text-gray-200 shadow-md rotate-xl fixed top-0 left-0 z-50">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold text-white">
          <FaCarSide className="text-red-500 text-2xl" />
          <Link to="/" className="to-red-500 text-3xl">CarHub</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-red-600" : "hover:text-red-600")}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "text-red-600" : "hover:text-red-600")}>About</NavLink>
          <NavLink to="/addNewCar" className={({ isActive }) => (isActive ? "text-red-600" : "hover:text-red-600")}>Add New Car</NavLink>
          <NavLink to="/viewAllCar" className={({ isActive }) => (isActive ? "text-red-600" : "hover:text-red-600")}>View All Car</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-red-600" : "hover:text-red-600")}>Contact</NavLink>
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
        <div className="group relative w-full md:w-auto bg-gradient-to-r from-red-500 hover:from-black text-white px-5 py-3 rounded-xl font-bold text-lg transition-all duration-500 shadow-lg hover:shadow-red-500/50 hover:scale-105 flex items-center justify-center gap-3">
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
