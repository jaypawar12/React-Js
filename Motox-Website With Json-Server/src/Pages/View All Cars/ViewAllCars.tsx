import { useLoaderData, useNavigate } from "react-router";
import { carAPIService, type CarType } from "../../Service/CarAPIService";
import { FaEdit, FaTrash} from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ViewAllCars() {
  const allCars: CarType[] = useLoaderData();
  const [allCar, setAllCar] = useState(allCars || []);
  const navigator = useNavigate();

  const [modalData, setModalData] = useState<CarType | null>(null);

  const deleteCar = async (id: string) => {
    if (confirm("Are you sure you want to delete this car?")) {
      if (await carAPIService.deleteCar(id)) {
        setAllCar(await carAPIService.fetchAllCars());
        toast.success("Car deleted successfully.");
      } else {
        toast.error("Car deletion failed.");
      }
    }
  };

  return (
    <>
      <div className="py-28 px-4 md:px-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen">
        <div className="overflow-x-auto bg-white rounded-xl shadow-xl">
          <table className="min-w-full table-auto border-2 border-gray-800 rounded-xl">
            {/* Table Head */}
            <thead className="bg-gradient-to-r from-red-700 to-red-500 text-white border-b-2 border-b-gray-900 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 text-left text-md font-semibold">No</th>
                <th className="px-6 py-3 text-left text-md font-semibold">ID</th>
                <th className="px-6 py-3 text-left text-md font-semibold">Name</th>
                <th className="px-6 py-3 text-left text-md font-semibold">Brand</th>
                <th className="px-6 py-3 text-left text-md font-semibold">Price</th>
                <th className="px-6 py-3 text-center text-md font-semibold">Image</th>
                <th className="px-6 py-3 text-left text-md font-semibold">Description</th>
                <th className="px-6 py-3 text-center text-md font-semibold w-48">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            {allCar && allCar.length > 0 ? (
              <tbody className="divide-y divide-gray-300">
                {allCar.map((car, index) => (
                  <tr
                    key={car.id}
                    className={`transition hover:bg-red-200 cursor-pointer ${index % 2 === 0 ? "bg-red-50" : "bg-white"}`}
                    onClick={() => setModalData(car)}
                  >
                    <td className="px-6 py-3 text-sm text-gray-800 font-medium whitespace-nowrap">
                      {index + 1}.
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-800 font-medium whitespace-nowrap">{car.id}</td>
                    <td className="px-6 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">{car.name}</td>
                    <td className="px-6 py-3 text-sm text-gray-700 whitespace-nowrap">{car.brand}</td>
                    <td className="px-6 py-3 text-sm text-red-600 font-bold whitespace-nowrap">₹{car.price.toLocaleString()}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-center">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="h-20 w-32 object-cover rounded-lg border-2 border-red-400 shadow-md hover:scale-105 transition-transform"
                      />
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-600 line-clamp-2">{car.description}</td>

                    {/* Actions */}
                    <td className="px-3 py-3 whitespace-nowrap w-48">
                      <div className="flex gap-2 flex-wrap justify-center">
                        <button
                          className="px-3 py-1 rounded-md flex items-center gap-1 text-sm font-medium border-2 border-yellow-500 text-black hover:bg-yellow-500 transition"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigator(`/edit-car/${car.id}`);
                          }}
                        >
                          <FaEdit /> Edit
                        </button>
                        <button
                          className="px-3 py-1 rounded-md flex items-center gap-1 text-sm font-medium border-2 border-red-500 text-black hover:bg-red-600 transition"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteCar(car.id.toString());
                          }}
                        >
                          <FaTrash /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan={8} className="text-center py-10 text-gray-800 font-medium text-lg">
                    No cars available 🚫
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>

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
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-50 to-red-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <img
                  src={modalData.image}
                  alt={modalData.name}
                  className="relative w-full h-80 object-cover rounded-xl shadow-xl border-4 border-white/50 backdrop-blur-sm transform group-hover:scale-[1.03] transition-transform duration-300"
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


      <ToastContainer />
    </>
  );
}
