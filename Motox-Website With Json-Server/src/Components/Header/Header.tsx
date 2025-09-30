import React from 'react';
import { ChevronDown, Heart, ShoppingCart, Menu } from 'lucide-react';

export default function Header() {
  const cartCount = 2;
  const wishlistCount = 0;

  return (
    <header className="bg-slate-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 rounded-full p-2 w-10 h-10 flex items-center justify-center">
              <div className="text-white font-bold text-sm">M</div>
            </div>
            <span className="text-xl font-bold">Motoz</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavItem label="Home" hasDropdown />
          <NavItem label="Inventory" hasDropdown />
          <NavItem label="Pages" hasDropdown active />
          <NavItem label="Shop" hasDropdown />
          <NavItem label="Blog" hasDropdown />
          <NavItem label="Contact" />
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Compare */}
          <button className="hidden md:flex items-center gap-2 text-sm text-gray-300 hover:text-white transition">
            <span>Compare</span>
            <div className="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {wishlistCount}
            </div>
          </button>

          {/* Wishlist */}
          <button className="relative p-2 hover:bg-slate-800 rounded-lg transition">
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart */}
          <button className="relative p-2 hover:bg-slate-800 rounded-lg transition">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Add Listing Button */}
          <button className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition">
            Add Listing
          </button>

          {/* Mobile Menu */}
          <button className="lg:hidden p-2 hover:bg-slate-800 rounded-lg transition">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

function NavItem({ label, hasDropdown, active }) {
  return (
    <button
      className={`flex items-center gap-1 text-sm font-medium transition ${
        active ? 'text-red-500' : 'text-gray-300 hover:text-white'
      }`}
    >
      {label}
      {hasDropdown && <ChevronDown className="w-4 h-4" />}
    </button>
  );
}