export default function Header() {
    return (
        <>
            {/* Topbar */}
            <div className="w-full bg-teal-800 py-3 px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Logo */}
                    <a href="index.html" className="text-3xl font-bold text-yellow-500">
                        Charitize
                    </a>

                    {/* Contact Info */}
                    <div className="hidden lg:flex gap-10 text-white text-sm">
                        {/* Call */}
                        <div className="flex items-center">
                            <div className="bg-yellow-500 p-2 rounded">
                                <i className="fa fa-phone-alt text-black">📞</i>
                            </div>
                            <div className="ml-2">
                                <h6 className="text-yellow-500 font-semibold">Call Us</h6>
                                <span>+012 345 6789</span>
                            </div>
                        </div>

                        {/* Mail */}
                        <div className="flex items-center">
                            <div className="bg-yellow-500 p-2 rounded">
                                <i className="fa fa-envelope-open text-black">📧</i>
                            </div>
                            <div className="ml-2">
                                <h6 className="text-yellow-500 font-semibold">Mail Us</h6>
                                <span>info@domain.com</span>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-center">
                            <div className="bg-yellow-500 p-2 rounded">
                                <i className="fa fa-map-marker-alt text-black">📍</i>
                            </div>
                            <div className="ml-2">
                                <h6 className="text-yellow-500 font-semibold">Address</h6>
                                <span>123 Street, NY, USA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <nav className="w-full bg-yellow-500 p-3">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between">
                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button
                                className="text-white text-2xl focus:outline-none"
                                aria-label="Menu"
                            >
                                <i className="fa fa-bars"></i>
                            </button>
                        </div>

                        {/* Links */}
                        <div className="hidden lg:flex space-x-6">
                            <a href="index.html" className="text-white font-bold">
                                Home
                            </a>
                            <a href="about.html" className="hover:text-white text-black font-semibold">
                                About
                            </a>
                            <a href="service.html" className="hover:text-white text-black font-semibold">
                                Service
                            </a>
                            <a href="donation.html" className="hover:text-white text-black font-semibold">
                                Donation
                            </a>

                            {/* Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center text-black font-semibold hover:text-white">
                                    Pages <i className="fa fa-caret-down ml-1">▼</i>
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

                            <a href="contact.html" className="hover:text-white text-black font-semibold">
                                Contact
                            </a>
                        </div>

                        {/* Socials */}
                        <div className="hidden lg:flex space-x-2">
                            <a href="#!" className="bg-black p-2 rounded text-white hover:bg-gray-700">
                                <i className="fab fa-twitter">❤</i>
                            </a>
                            <a href="#!" className="bg-black p-2 rounded text-white hover:bg-gray-700">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#!" className="bg-black p-2 rounded text-white hover:bg-gray-700">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
