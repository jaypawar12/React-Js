import { useLoaderData } from "react-router";
import Banner from "../../Components/Banner/Banner";
import { FaCarSide, FaBuilding, FaRupeeSign, FaInfoCircle } from "react-icons/fa";
import type { CarType } from "../../Service/CarAPIService";
import { useState } from "react";

export default function HomePage() {
  const allCars: CarType[] = useLoaderData();

  const [modalData, setModalData] = useState<CarType | null>(null);

  return (
    <>
      {/* Banner Section */}
      <Banner />

      {/* Car List Section */}
      <section className="py-16 bg-gray-100 bg-gradient-to-br from-gray-800 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-red-50 mb-10 text-center">
            Explore Our Cars
          </h2>

          {allCars && allCars.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {allCars.map((car) => (
                <div
                  key={car.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  {/* Car Image */}
                  <div className="h-56 w-full overflow-hidden relative">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="h-full w-full object-cover hover:scale-110 transition duration-500"
                    />
                    {/* Brand Badge */}
                    <span className="absolute top-3 left-3 bg-red-500/60 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <FaBuilding /> {car.brand}
                    </span>
                  </div>

                  {/* Car Info */}
                  <div className="p-6 space-y-3 bg-gradient-to-br from-white to-gray-300">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <FaCarSide className="text-red-500" /> {car.name}
                    </h3>

                    <p className="text-gray-700 text-sm flex items-center gap-2">
                      <FaInfoCircle className="text-gray-400 text-xl" /> {car.description}
                    </p>

                    <p className="text-lg font-semibold text-red-600 flex items-center gap-2">
                      <FaRupeeSign /> {car.price.toLocaleString()}
                    </p>

                    {/* View Button */}
                    <button className="mt-4 w-full cursor-pointer bg-gradient-to-r from-red-600 via-red-50 to-red-500 hover:bg-red-600 text-black py-2 px-4 rounded-lg transition font-medium flex justify-center items-center gap-2"
                      onClick={() => setModalData(car)}
                    >
                      <FaCarSide /> View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 text-lg">
              No cars available 🚫
            </p>
          )}

          {/* Modal */}
          {modalData && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md animate-fadeIn px-4"
              onClick={() => setModalData(null)}
            >
              <div
                className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-2xl w-full max-w-2xl relative overflow-hidden transform transition-all animate-scaleUp"

              >
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                {/* Close Button */}
                <button
                  className="absolute cursor-pointer top-6 right-6 z-10 text-gray-600 hover:text-red-600 transition-all duration-300 hover:rotate-90 hover:scale-110 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  onClick={() => setModalData(null)}
                  aria-label="Close Modal"
                >
                  ❌
                </button>


                {/* Modal Content */}
                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent mb-2">
                      {modalData.name}
                    </h2>
                    <div className="h-1 w-24 bg-red-500 rounded-full"></div>
                  </div>

                  {/* Image */}
                  <div className="mb-6 relative group">
                    <div className="absolute inset-0 border-2 border-red-500 bg-gradient-to-r from-red-600 via-red-50 to-red-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <img
                      src={modalData.image}
                      alt={modalData.name}
                      className="relative w-full h-72 object-cover rounded-xl shadow-xl border-4 border-white/50 backdrop-blur-sm transform group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-200/50 hover:shadow-lg transition-shadow duration-300">
                      <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Product ID</p>
                      <p className="text-lg font-semibold text-gray-800">{modalData.id}</p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-200/50 hover:shadow-lg transition-shadow duration-300">
                      <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Brand</p>
                      <p className="text-lg font-semibold text-gray-800">{modalData.brand}</p>
                    </div>

                    <div className="bg-gradient-to-br from-red-600 via-black/90 to-red-500 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <p className="text-sm text-white/90 uppercase tracking-wider mb-1">Price</p>
                      <p className="text-2xl font-bold text-white">₹{modalData.price.toLocaleString()}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-200/50">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="w-1 h-6 bg-red-600 rounded-full mr-3"></span>
                      Description
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{modalData.description}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 mt-6">
                    <button className="flex-1 bg-gradient-to-r from-red-600 via-black/90 to-red-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
