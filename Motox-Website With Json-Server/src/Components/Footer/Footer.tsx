import { FaFacebookF, FaTwitter, FaInstagram, FaCarSide } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
      {/* Gradient Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-95"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 text-white text-3xl font-bold">
            <FaCarSide className="text-red-500 animate-pulse" />
            <span>CarHub</span>
          </div>
          <p className="mt-4 text-gray-400">
            Discover the latest cars, exclusive offers & premium services. Drive your dream today!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4 border-b-2 border-red-500 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {["Home", "About Us", "Cars", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={"#" + item.toLowerCase().replace(" ", "")}
                  className="hover:text-red-400 transition duration-300 hover:pl-2 inline-block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4 border-b-2 border-red-500 inline-block">
            Newsletter
          </h3>
          <p className="text-gray-400 mb-4">
            Subscribe for updates & exclusive offers.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-red-600 hover:bg-red-700 rounded-r-lg text-white font-medium transition"
            >
              Join
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4 border-b-2 border-red-500 inline-block">
            Follow Us
          </h3>
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 hover:scale-110 transition transform shadow-lg"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-gray-700 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} <span className="text-red-500 font-semibold">CarHub</span>. All rights reserved.
      </div>
    </footer>
  );
}
