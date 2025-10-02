import { useLoaderData } from "react-router";
import type { CarType } from "../../Service/CarAPIService";
import {FaEdit, FaTrash } from "react-icons/fa";

export default function ViewAllCars() {
  const allCars: CarType[] = useLoaderData();

  return (
    <div className="py-24 px-4 md:px-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">
        🚗 View All Cars
      </h1>

      {allCars && allCars.length > 0 ? (
        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-red-600 text-white sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Brand</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Price</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Image</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Description</th>
                <th className="px-6 py-3 text-center text-sm font-semibold w-48">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {allCars.map((car, index) => (
                <tr
                  key={car.id}
                  className={`transition hover:bg-gray-50 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                >
                  <td className="px-6 py-4 text-sm text-gray-800 font-medium whitespace-nowrap">{car.id}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900 whitespace-nowrap">{car.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">{car.brand}</td>
                  <td className="px-6 py-4 text-sm text-red-600 font-bold whitespace-nowrap">
                    ₹{car.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="h-20 w-32 object-cover rounded-lg border-2 border-red-500 shadow hover:scale-105 transition-transform"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 line-clamp-2">
                    {car.description}
                  </td>

                  {/* Actions Column */}
                  <td className="px-3 py-4 whitespace-nowrap w-48">
                    <div className="flex gap-2 flex-wrap">
                      <button
                        className="border-2 border-amber-500 hover:bg-yellow-500 text-black px-3 py-1 rounded-md flex items-center gap-1 text-sm font-medium transition"
                        onClick={() => console.log("Edit", car.id)}
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        className="border-2 border-red-500 hover:bg-red-600 text-black px-3 py-1 rounded-md flex items-center gap-1 text-sm font-medium transition"
                        onClick={() => console.log("Delete", car.id)}
                      >
                        <FaTrash /> Delete
                      </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-300 text-lg mt-10">
          No cars available 🚫
        </p>
      )}
    </div>
  );
}
