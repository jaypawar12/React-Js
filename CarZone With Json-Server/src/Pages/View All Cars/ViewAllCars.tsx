import { useLoaderData, useNavigate } from "react-router";
import { carAPIService, type CarType } from "../../Service/CarAPIService";
import { FaEdit, FaTrash, FaCarSide, FaSearch, FaSortAmountDown, FaRupeeSign } from "react-icons/fa";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ViewAllCars() {
  const allCars: CarType[] = useLoaderData();
  const [allCar, setAllCar] = useState<CarType[]>(allCars || []);
  const [filteredCars, setFilteredCars] = useState<CarType[]>(allCars || []);
  const [modalData, setModalData] = useState<CarType | null>(null);
  const navigator = useNavigate();

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const brands = [...new Set(allCars.map((car) => car.brand))];

  //  Filtering and Sorting 
  useEffect(() => {
    let filtered = [...allCar];

    // Search by name or id
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(
        (car) =>
          car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.id.toString().includes(searchTerm)
      );
    }

    // Filter by brand
    if (selectedBrand !== "") {
      filtered = filtered.filter((car) => car.brand === selectedBrand);
    }

    // Filter by price 
    if (selectedPrice === "low") {
      filtered = filtered.filter((car) => car.price <= 2000000);
    } else if (selectedPrice === "mid") {
      filtered = filtered.filter((car) => car.price > 2000000 && car.price <= 5000000);
    } else if (selectedPrice === "high") {
      filtered = filtered.filter((car) => car.price > 5000000);
    }

    // Sorting
    if (sortOrder === "az") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "za") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOrder === "lowToHigh") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredCars(filtered);
  }, [searchTerm, selectedBrand, selectedPrice, sortOrder, allCar]);

  // Delete Car Function
  const deleteCar = async (id: string) => {
    if (confirm("Are you sure you want to delete this car?")) {
      if (await carAPIService.deleteCar(id)) {
        const updatedCars = await carAPIService.fetchAllCars();
        setAllCar(updatedCars);
        toast.success("Car deleted successfully!");
      } else {
        toast.error("Car deletion failed!");
      }
    }
  };

  // Reset Filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedBrand("");
    setSelectedPrice("");
    setSortOrder("");
    setFilteredCars(allCar);
  };

  return (
    <>
      <div className="py-28 px-4 md:px-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen">
        {/* Filter Section */}
        <div className="mb-8 bg-gradient-to-r from-black via-gray-900 to-red-500/50 p-6 rounded-2xl shadow-2xl border border-gray-700">
          <h2 className="text-3xl font-extrabold text-white mb-6 flex items-center gap-2">
            🔍 Find Your Car
          </h2>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

            {/* Search */}
            <div className="flex items-center gap-3 bg-white rounded-2xl shadow-lg px-5 py-3 w-full md:w-1/3 transition-all hover:shadow-xl">
              <FaSearch className="text-gray-500 text-lg" />
              <input
                type="text"
                placeholder="Search cars by name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-400 font-medium"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-end w-full md:w-2/3">

              {/* Brand Filter */}
              <div className="flex items-center gap-2 bg-white rounded-2xl shadow-lg px-5 py-2 transition-all hover:shadow-xl cursor-pointer">
                <FaCarSide className="text-blue-500 text-lg" />
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="bg-transparent text-gray-800 font-medium outline-none"
                >
                  <option value="">Filter by Brand</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div className="flex items-center gap-2 bg-white rounded-2xl shadow-lg px-5 py-3 transition-all hover:shadow-xl cursor-pointer">
                <FaRupeeSign className="text-green-500 text-lg" />
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="bg-transparent text-gray-800 font-medium outline-none"
                >
                  <option value="">Filter by Price</option>
                  <option value="low">Below ₹20 Lakh</option>
                  <option value="mid">₹20 Lakh - ₹50 Lakh</option>
                  <option value="high">Above ₹50 Lakh</option>
                </select>
              </div>

              {/* Sort Order */}
              <div className="flex items-center gap-2 bg-white rounded-2xl shadow-lg px-5 py-3 transition-all hover:shadow-xl cursor-pointer">
                <FaSortAmountDown className="text-purple-500 text-lg" />
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="bg-transparent text-gray-800 font-medium outline-none"
                >
                  <option value="">Sort</option>
                  <option value="az">A-Z</option>
                  <option value="za">Z-A</option>
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                </select>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetFilters}
                className="group relative w-full md:w-auto bg-gradient-to-r from-black hover:from-red-600 hover:to-black text-white px-8 py-2 rounded-xl font-bold text-lg transition-all duration-500 shadow-lg hover:shadow-red-500/50 hover:scale-105 flex items-center justify-center"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>


        {/* Table Section */}
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
            {filteredCars && filteredCars.length > 0 ? (
              <tbody className="divide-y divide-gray-300">
                {filteredCars.map((car, index) => (
                  <tr
                    key={car.id}
                    className={`transition hover:bg-red-200 cursor-pointer ${index % 2 === 0 ? "bg-red-50" : "bg-white"
                      }`}
                    onClick={() => setModalData(car)}
                  >
                    <td className="px-6 py-3 text-sm text-gray-800 font-medium">{index + 1}.</td>
                    <td className="px-6 py-3 text-sm text-gray-800 font-medium">{car.id}</td>
                    <td className="px-6 py-3 text-sm font-semibold text-gray-900">{car.name}</td>
                    <td className="px-6 py-3 text-sm text-gray-700">{car.brand}</td>
                    <td className="px-6 py-3 text-sm text-red-600 font-bold">₹{car.price.toLocaleString()}</td>
                    <td className="px-6 py-3 text-center">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="h-20 w-32 object-cover rounded-lg border-2 border-red-400 shadow-md hover:scale-105 transition-transform"
                      />
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-600 line-clamp-2">{car.description}</td>
                    <td className="px-3 py-3 whitespace-nowrap w-48">
                      <div className="flex gap-2 flex-wrap justify-center">
                        <button
                          className="px-3 py-1 rounded-md flex items-center gap-1 text-sm font-medium border-2 border-yellow-500 text-black hover:bg-yellow-500 transition"
                          onClick={() => navigator(`/edit-car/${car.id}`)}
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
          {/* Modal */}
          {modalData && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md animate-fadeIn px-4"
              onClick={() => setModalData(null)}
            >
              <div
                className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-2xl w-full max-w-2xl relative overflow-hidden transform transition-all animate-scaleUp"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute cursor-pointer top-6 right-6 z-10 text-gray-600 hover:text-red-600 transition-all duration-300 hover:rotate-90 hover:scale-110 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg"
                  onClick={() => setModalData(null)}
                >
                  ❌
                </button>

                <div className="relative z-10 p-8">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent mb-6">
                    {modalData.name}
                  </h2>

                  <img
                    src={modalData.image}
                    alt={modalData.name}
                    className="w-full h-72 object-cover rounded-xl shadow-xl mb-6"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/70 rounded-xl p-4 shadow-md">
                      <p className="text-sm text-gray-500">Product ID</p>
                      <p className="text-lg font-semibold">{modalData.id}</p>
                    </div>
                    <div className="bg-white/70 rounded-xl p-4 shadow-md">
                      <p className="text-sm text-gray-500">Brand</p>
                      <p className="text-lg font-semibold">{modalData.brand}</p>
                    </div>
                    <div className="bg-gradient-to-br from-red-600 via-black/90 to-red-500 text-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <p className="text-sm">Price</p>
                      <p className="text-2xl font-bold">
                        ₹{modalData.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/70 rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p>{modalData.description}</p>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <button className="flex-1 bg-gradient-to-r from-red-600 via-black/90 to-red-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-105 transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Toast */}
      <ToastContainer />
    </>
  );
}
