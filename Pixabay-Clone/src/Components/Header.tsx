import { useState } from 'react';
import { BiBell, BiUser, BiMenu, BiX } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center">
                            <span className="text-3xl font-extrabold text-white bg-clip-text">
                                Pixabay
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-4">
                        <button className="flex items-center text-white gray-900 hover:text-blue-600 hover font-medium text-lg">
                            Explore
                            <IoIosArrowDown className="ml-1 text-md" />
                        </button>
                        <div className="flex items-center space-x-4">

                            {/* Desktop Actions */}
                            <div className="hidden md:flex items-center space-x-4">
                                <button className="relative text-white  hover:text-blue-600">
                                    <BiBell className="text-xl" />
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-3.5 h-3.5 flex items-center justify-center">
                                        3
                                    </span>
                                </button>

                                <button className="flex items-center text-gray-600 hover:text-blue-600">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-400 flex items-center justify-center">
                                        <BiUser className="text-white text-lg" />
                                    </div>
                                </button>

                                <div className="hidden lg:flex items-center space-x-3">
                                    <button className="flex items-center bg-gradient-to-r from-blue-500 to-green-400 text-white font-medium text-sm px-4 py-2 rounded-full hover:opacity-90">
                                        Upload
                                        <IoIosArrowDown className="ml-1 text-xs" />
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden text-gray-600 hover:text-blue-600"
                            >
                                {isMenuOpen ? <BiX className="text-2xl" /> : <BiMenu className="text-2xl text-black" />}
                            </button>
                        </div>

                    </nav>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white border-t py-4">
                        <div className="space-y-3">
                            <button className="w-full flex items-center justify-center text-gray-700 hover:text-blue-600 font-medium py-2 border rounded-lg">
                                Explore
                                <IoIosArrowDown className="ml-1 text-xs" />
                            </button>

                            <button className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-400 text-white font-medium py-2 rounded-lg">
                                Upload
                                <IoIosArrowDown className="ml-1 text-xs" />
                            </button>

                            <div className="flex items-center justify-center space-x-4 pt-2">
                                <button className="relative text-gray-600">
                                    <BiBell className="text-xl" />
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        3
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}