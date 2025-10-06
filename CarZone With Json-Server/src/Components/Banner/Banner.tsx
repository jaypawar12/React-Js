import { FaCarSide } from "react-icons/fa";

export default function Banner() {
  return (
    <section className="relative w-full h-screen bg-gray-900 text-white flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>

      {/* Dark Gradient Overlay Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent">
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-32">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-xl lg:max-w-lg">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Drive Your Dream <span className="text-red-500">Car</span>
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Find your dream car with best deals
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <a
              href="#models"
              className="group relative w-full md:w-auto bg-gradient-to-r from-red-500 hover:from-black text-white px-5 py-3 rounded-xl font-bold text-lg transition-all duration-500 shadow-lg hover:shadow-red-500/50 hover:scale-105 flex items-center justify-center gap-3"
            >
              <FaCarSide className="text-xl" />
              Explore Cars
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
