import { FaTint, FaHospital, FaHandsHelping, FaUtensils, FaSchool, FaHome } from "react-icons/fa";

export default function Service() {
  return (
    <div className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10">

        {/* Left Side Title */}
        <div className="lg:col-span-3 bg-[url('../Public/img/bg.jpg')] bg-cover bg-center p-8 rounded-md shadow">
          <h1 className="text-4xl font-bold leading-snug mb-5 mt-20 text-gray-900">
            What We Do for <br /> Those in Need.
          </h1>
          <p className="text-gray-500 text-xl text-left">
            We work to bring smiles, hope, and a brighter future to those in need.
          </p>
        </div>

        {/* Right Side Grid */}
        <div className="lg:col-span-9 grid sm:grid-cols-2 md:grid-cols-3 gap-5">

          {/* Service Item */}
          <div className="flex flex-col h-full p-4 rounded-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-yellow-100 flex items-center justify-center mb-4 rounded">
              <FaTint className="text-teal-700 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Pure Water</h3>
            <p className="text-gray-600 mb-3">
              We’re creating programs that address urgent needs while fostering
              long-term solutions for sustainable change.
            </p>
            <a
              href="#!"
              className="group inline-flex items-center gap-2 text-yellow-500 font-semibold"
            >
              READ MORE
              <span className="block w-32 h-[2px] bg-yellow-500 transition-all duration-300"></span>
            </a>
          </div>

          {/* Service Item */}
          <div className="flex flex-col h-full p-4 rounded-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-yellow-100 flex items-center justify-center mb-4 rounded">
              <FaHospital className="text-teal-700 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Health Care</h3>
            <p className="text-gray-600 mb-3">
              We’re creating programs that address urgent needs while fostering
              long-term solutions for sustainable change.
            </p>
            <a
              href="#!"
              className="group inline-flex items-center gap-2 text-yellow-500 font-semibold"
            >
              READ MORE
              <span className="block w-32 h-[2px] bg-yellow-500 transition-all duration-300"></span>
            </a>
          </div>

          {/* Service Item */}
          <div className="flex flex-col h-full p-4 rounded-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-yellow-100 flex items-center justify-center mb-4 rounded">
              <FaHandsHelping className="text-teal-700 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Social Care</h3>
            <p className="text-gray-600 mb-3">
              We’re creating programs that address urgent needs while fostering
              long-term solutions for sustainable change.
            </p>
            <a
              href="#!"
              className="group inline-flex items-center gap-2 text-yellow-500 font-semibold"
            >
              READ MORE
              <span className="block w-32 h-[2px] bg-yellow-500 transition-all duration-300"></span>
            </a>
          </div>

          {/* Service Item */}
          <div className="flex flex-col h-full p-4 rounded-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-yellow-100 flex items-center justify-center mb-4 rounded">
              <FaUtensils className="text-teal-700 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Healthy Food</h3>
            <p className="text-gray-600 mb-3">
              We’re creating programs that address urgent needs while fostering
              long-term solutions for sustainable change.
            </p>
            <a
              href="#!"
              className="group inline-flex items-center gap-2 text-yellow-500 font-semibold"
            >
              READ MORE
              <span className="block w-32 h-[2px] bg-yellow-500 transition-all duration-300"></span>
            </a>
          </div>

          {/* Service Item */}
          <div className="flex flex-col h-full p-4 rounded-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-yellow-100 flex items-center justify-center mb-4 rounded">
              <FaSchool className="text-teal-700 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Primary Education</h3>
            <p className="text-gray-600 mb-3">
              We’re creating programs that address urgent needs while fostering
              long-term solutions for sustainable change.
            </p>
            <a
              href="#!"
              className="group inline-flex items-center gap-2 text-yellow-500 font-semibold"
            >
              READ MORE
              <span className="block w-32 h-[2px] bg-yellow-500 transition-all duration-300"></span>
            </a>
          </div>

          {/* Service Item */}
          <div className="flex flex-col h-full p-4 rounded-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-yellow-100 flex items-center justify-center mb-4 rounded">
              <FaHome className="text-teal-700 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Residence Facilities</h3>
            <p className="text-gray-600 mb-3">
              We’re creating programs that address urgent needs while fostering
              long-term solutions for sustainable change.
            </p>
            <a
              href="#!"
              className="group inline-flex items-center gap-2 text-yellow-500 font-semibold"
            >
              READ MORE
              <span className="block w-32 h-[2px] bg-yellow-500 transition-all duration-300"></span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
