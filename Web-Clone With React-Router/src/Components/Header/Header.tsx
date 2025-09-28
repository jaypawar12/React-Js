import { FaCaretDown, FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt, FaBars, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router";

export default function Header() {
    return (
        <>
            {/* Topbar */}
            <div className="w-full bg-teal-800 py-6 px-6 fixed top-0 left-0 z-50 shadow-md">
                <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
                    {/* Logo */}
                    <NavLink to="/" className="text-5xl font-bold ml-3 text-yellow-500">
                        Charitize
                    </NavLink>

                    {/* Contact Info */}
                    <div className="hidden lg:flex gap-10 text-white text-sm">
                        {/* Call */}
                        <div className="flex items-center">
                            <div className="bg-yellow-500 p-3 rounded">
                                <FaPhoneAlt className="text-black text-lg" />
                            </div>
                            <div className="ml-2">
                                <h6 className="text-yellow-500 font-semibold text-lg">Call Us</h6>
                                <span className="text-lg">+012 345 6789</span>
                            </div>
                        </div>

                        {/* Mail */}
                        <div className="flex items-center">
                            <div className="bg-yellow-500 p-3 rounded">
                                <FaEnvelopeOpen className="text-black text-lg" />
                            </div>
                            <div className="ml-2">
                                <h6 className="text-yellow-500 font-semibold text-lg">Mail Us</h6>
                                <span className="text-lg">info@domain.com</span>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-center">
                            <div className="bg-yellow-500 p-3 rounded">
                                <FaMapMarkerAlt className="text-black text-lg" />
                            </div>
                            <div className="ml-2">
                                <h6 className="text-yellow-500 font-semibold text-lg">Address</h6>
                                <span className="text-lg">123 Street, NY, USA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <nav className="w-full bg-yellow-500 p-4 mt-3 fixed top-[90px] left-0 z-40 shadow-md border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between">
                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button
                                className="text-white text-2xl focus:outline-none"
                                aria-label="Menu"
                            >
                                <FaBars />
                            </button>
                        </div>

                        {/* Links */}
                        <div className="hidden lg:flex space-x-6">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `text-xl font-bold ${isActive ? "text-white" : "text-black hover:text-white"}`
                                }
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `text-xl font-semibold ${isActive ? "text-white" : "text-black hover:text-white"}`
                                }
                            >
                                About
                            </NavLink>

                            <NavLink
                                to="/service"
                                className={({ isActive }) =>
                                    `text-xl font-semibold ${isActive ? "text-white" : "text-black hover:text-white"}`
                                }
                            >
                                Service
                            </NavLink>

                            <NavLink
                                to="/donation"
                                className={({ isActive }) =>
                                    `text-xl font-semibold ${isActive ? "text-white" : "text-black hover:text-white"}`
                                }
                            >
                                Donation
                            </NavLink>

                            {/* Dropdown */}
                            <div className="relative group z-10">
                                <button className="flex items-center text-black font-semibold hover:text-white text-xl">
                                    Pages <FaCaretDown className="ml-1" />
                                </button>
                                <div className="absolute left-0 fade w-32 p-2 mt-2 hidden group-hover:block bg-white shadow-lg rounded">
                                    <NavLink
                                        to="/event"
                                        className={({ isActive }) =>
                                            `block px-4 py-2 ${isActive ? "bg-yellow-200 font-semibold" : "hover:bg-yellow-100"}`
                                        }
                                    >
                                        Event
                                    </NavLink>
                                    <NavLink
                                        to="/feature"
                                        className={({ isActive }) =>
                                            `block px-4 py-2 ${isActive ? "bg-yellow-200 font-semibold" : "hover:bg-yellow-100"}`
                                        }
                                    >
                                        Feature
                                    </NavLink>
                                    <NavLink
                                        to="/team"
                                        className={({ isActive }) =>
                                            `block px-4 py-2 ${isActive ? "bg-yellow-200 font-semibold" : "hover:bg-yellow-100"}`
                                        }
                                    >
                                        Our Team
                                    </NavLink>
                                    <NavLink
                                        to="/404"
                                        className={({ isActive }) =>
                                            `block px-4 py-2 ${isActive ? "bg-yellow-200 font-semibold" : "hover:bg-yellow-100"}`
                                        }
                                    >
                                        404 Page
                                    </NavLink>
                                </div>
                            </div>

                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `text-xl font-semibold ${isActive ? "text-white" : "text-black hover:text-white"}`
                                }
                            >
                                Contact
                            </NavLink>
                        </div>

                        {/* Socials */}
                        <div className="hidden lg:flex space-x-2">
                            <NavLink to="#!" className="bg-black p-4 rounded text-white hover:bg-gray-700">
                                <FaTwitter />
                            </NavLink>
                            <NavLink to="#!" className="bg-black p-4 rounded text-white hover:bg-gray-700">
                                <FaFacebookF />
                            </NavLink>
                            <NavLink to="#!" className="bg-black p-4 rounded text-white hover:bg-gray-700">
                                <FaYoutube />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Content padding so header doesn’t overlap */}
            <div className="pt-[180px]">
                {/* Page content here */}
            </div>
        </>
    );
}
