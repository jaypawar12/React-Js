import { FaBullseye, FaCar, FaHandshake } from "react-icons/fa";

export default function About() {
  return (
    <section className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-red-500">CarZone</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Your ultimate destination for premium cars, amazing deals, and unmatched service.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://media.istockphoto.com/id/1473399467/photo/salesman-showing-cars-to-a-couple-at-the-dealership.jpg?s=2048x2048&w=is&k=20&c=PamTJN0xIL4Na7pWmL1jBKvtqxUjBk_v43-c65-bHoI="
              alt="About Us"
              className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-lg text-gray-700">
              At <span className="font-bold text-red-500">CarZone</span>, we bring you closer to your dream car.  
              Our goal is to combine style, performance, and unbeatable deals — all in one place.
            </p>
            <p className="text-lg text-gray-700">
              We cater to everyone, whether you’re an enthusiast, a daily driver, or simply looking for a reliable ride.  
              Our passion drives us to deliver excellence in every service.
            </p>

            <a
              href="#contact"
              className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <FaBullseye className="mx-auto text-red-500 text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              Deliver the best car buying experience with quality, transparency, and unmatched service.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <FaCar className="mx-auto text-red-500 text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              Be the most trusted destination for premium cars and automotive excellence.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <FaHandshake className="mx-auto text-red-500 text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Trust, transparency, quality, and passion in every interaction we have.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
