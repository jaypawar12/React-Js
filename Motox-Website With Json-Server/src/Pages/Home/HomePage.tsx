import { useLoaderData } from "react-router";
import Banner from "../../Components/Banner/Banner";
import { FaCarSide, FaBuilding, FaRupeeSign, FaInfoCircle } from "react-icons/fa";
import type { CarType } from "../../Service/CarAPIService";




export default function HomePage() {
  const allCars: CarType[] = useLoaderData();
  console.log("allCars", allCars);

  return (
    <>
      {/* Banner Section */}
      <Banner />

      {/* Car List Section */}
      <section className="py-16 bg-gray-50 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
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
                      className="h-full w-full object-cover hover:scale-110 transition"
                    />
                    {/* Brand Badge */}
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <FaBuilding /> {car.brand}
                    </span>
                  </div>

                  {/* Car Info */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <FaCarSide className="text-red-500" /> {car.name}
                    </h3>

                    <p className="text-gray-700 text-sm flex items-center gap-2">
                      <FaInfoCircle className="text-gray-400" /> {car.description}
                    </p>

                    <p className="text-lg font-semibold text-red-600 flex items-center gap-2">
                      <FaRupeeSign /> {car.price.toLocaleString()}
                    </p>

                    {/* View Button */}
                    <button className="mt-4 w-full bg-gradient-to-r from-red-600 via-red-50 to-red-500 hover:bg-red-600 text-black py-2 px-4 rounded-lg transition font-medium flex justify-center items-center gap-2">
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
        </div>
      </section>
    </>
  );
}
