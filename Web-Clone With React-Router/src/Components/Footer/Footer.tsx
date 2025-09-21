export default function Footer() {
    return (
        <footer
            className="relative text-gray-300 py-12 bg-cover bg-center"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(5,19,17,0.95), rgba(5,19,17,0.95)), url('/img/bg-footer.jpg')",
            }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Our Office */}
                    <div>
                        <h4 className="text-white text-xl font-semibold mb-4">Our Office</h4>
                        <p className="flex items-center mb-2">
                            123 Street, New York, USA
                        </p>
                        <p className="flex items-center mb-2">
                            +012 345 67890
                        </p>
                        <p className="flex items-center mb-2">
                            info@example.com
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-2 pt-3">
                            <a href="#!" className="bg-yellow-500 text-black p-2 rounded hover:bg-yellow-400">
                                {/* Icon here */}
                            </a>
                            <a href="#!" className="bg-yellow-500 text-black p-2 rounded hover:bg-yellow-400">
                                {/* Icon here */}
                            </a>
                            <a href="#!" className="bg-yellow-500 text-black p-2 rounded hover:bg-yellow-400">
                                {/* Icon here */}
                            </a>
                            <a href="#!" className="bg-yellow-500 text-black p-2 rounded hover:bg-yellow-400">
                                {/* Icon here */}
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-xl font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#!" className="hover:text-yellow-500">About Us</a></li>
                            <li><a href="#!" className="hover:text-yellow-500">Contact Us</a></li>
                            <li><a href="#!" className="hover:text-yellow-500">Our Services</a></li>
                            <li><a href="#!" className="hover:text-yellow-500">Terms &amp; Condition</a></li>
                            <li><a href="#!" className="hover:text-yellow-500">Support</a></li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h4 className="text-white text-xl font-semibold mb-4">Business Hours</h4>
                        <p>Monday - Friday</p>
                        <p className="font-semibold text-white">09:00 am - 07:00 pm</p>
                        <p className="mt-2">Saturday</p>
                        <p className="font-semibold text-white">09:00 am - 12:00 pm</p>
                        <p className="mt-2">Sunday</p>
                        <p className="font-semibold text-white">Closed</p>
                    </div>

                    {/* Gallery */}
                    <div>
                        <h4 className="text-white text-xl font-semibold mb-4">Gallery</h4>
                        <div className="grid grid-cols-3 gap-2">
                            <img src="/img/gallery-1.jpg" alt="" className="w-full h-auto" />
                            <img src="/img/gallery-2.jpg" alt="" className="w-full h-auto" />
                            <img src="/img/gallery-3.jpg" alt="" className="w-full h-auto" />
                            <img src="/img/gallery-4.jpg" alt="" className="w-full h-auto" />
                            <img src="/img/gallery-5.jpg" alt="" className="w-full h-auto" />
                            <img src="/img/gallery-6.jpg" alt="" className="w-full h-auto" />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
                    <p>
                        &copy;{" "}
                        <a href="#!" className="text-yellow-500 font-semibold">
                            Your Site Name
                        </a>
                        , All Rights Reserved.
                    </p>
                    <p className="mt-2 md:mt-0">
                        Designed By{" "}
                        <a href="https://htmlcodex.com" className="text-yellow-500 font-semibold">
                            HTML Codex
                        </a>{" "}
                        | Distributed By{" "}
                        <a href="https://themewagon.com" className="text-yellow-500 font-semibold">
                            ThemeWagon
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
