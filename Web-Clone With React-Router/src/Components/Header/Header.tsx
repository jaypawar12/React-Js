import { FaCaretDown, FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt, FaBars, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Header() {
    return (
        <>
            {/* Topbar */}
            <div className="w-full bg-teal-800 py-7 px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Logo */}
                    <a href="index.html" className="text-5xl font-bold ml-3 text-yellow-500">
                        Charitize
                    </a>

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
            <nav className="w-full bg-yellow-500 p-5">
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
                            <a href="index.html" className="text-white text-xl font-bold">
                                Home
                            </a>
                            <a href="about.html" className="hover:text-white text-xl text-black font-semibold">
                                About
                            </a>
                            <a href="service.html" className="hover:text-white text-xl text-black font-semibold">
                                Service
                            </a>
                            <a href="donation.html" className="hover:text-white text-xl text-black font-semibold">
                                Donation
                            </a>

                            {/* Dropdown */}
                            <div className="relative group z-10">
                                <button className="flex items-center text-black font-semibold hover:text-white text-xl">
                                    Pages <FaCaretDown className="ml-1" />
                                </button>
                                <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded">
                                    <a href="event.html" className="block px-4 py-2 hover:bg-yellow-100">
                                        Event
                                    </a>
                                    <a href="feature.html" className="block px-4 py-2 hover:bg-yellow-100">
                                        Feature
                                    </a>
                                    <a href="team.html" className="block px-4 py-2 hover:bg-yellow-100">
                                        Our Team
                                    </a>
                                    <a href="testimonial.html" className="block px-4 py-2 hover:bg-yellow-100">
                                        Testimonial
                                    </a>
                                    <a href="404.html" className="block px-4 py-2 hover:bg-yellow-100">
                                        404 Page
                                    </a>
                                </div>
                            </div>

                            <a href="contact.html" className="hover:text-white text-black font-semibold text-xl">
                                Contact
                            </a>
                        </div>

                        {/* Socials */}
                        <div className="hidden lg:flex space-x-2">
                            <a href="#!" className="bg-black p-4 rounded text-white hover:bg-gray-700">
                                <FaTwitter />
                            </a>
                            <a href="#!" className="bg-black p-4 rounded text-white hover:bg-gray-700">
                                <FaFacebookF />
                            </a>
                            <a href="#!" className="bg-black p-4 rounded text-white hover:bg-gray-700">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
