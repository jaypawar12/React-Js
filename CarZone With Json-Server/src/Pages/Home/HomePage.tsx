import { useLoaderData } from "react-router";
import Banner from "../../Components/Banner/Banner";
import {
  FaCarSide,
  FaBuilding,
  FaRupeeSign,
  FaInfoCircle,
  FaFilter,
} from "react-icons/fa";
import type { CarType } from "../../Service/CarAPIService";
import { useState, useMemo } from "react";

export default function HomePage() {
  const allCars: CarType[] = useLoaderData();
  const [modalData, setModalData] = useState<CarType | null>(null);
  const [showFilter, setShowFilter] = useState(true);

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState("");

  const brands = [...new Set(allCars.map((car) => car.brand))];

  // 🧠 Filter and Sort Logic 
  const filteredCars = useMemo(() => {
    let filtered = [...allCars];

    // Search by name or id
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.id.toString().includes(searchTerm)
      );
    }

    // Filter by brand
    if (selectedBrand !== "") {
      filtered = filtered.filter((car) => car.brand === selectedBrand);
    }

    // Filter by price range
    if (selectedPrice) {
      filtered = filtered.filter((car) => car.price >= selectedPrice);
    }

    // Sorting
    if (sortOrder === "az") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "za") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    return filtered;
  }, [allCars, searchTerm, selectedBrand, selectedPrice, sortOrder]);

  return (
    <>
      <Banner />

      <section className="py-16 bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen relative">
        {/* Mobile Filter Toggle */}
        <div className="flex justify-end px-6 lg:hidden mb-4">
          <button
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition"
            onClick={() => setShowFilter(!showFilter)}
          >
            <FaFilter />
            {showFilter ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        <div className="mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10 relative">
          {/* Sidebar Filter */}
          <aside
            className={`bg-black/80 rounded-xl p-6 shadow-lg space-y-7 border border-red-600/40 h-fit fixed lg:static top-24 left-0 z-40 w-72 lg:w-auto transform transition-all duration-500 ease-in-out
              ${showFilter ? "translate-x-0 opacity-100" : "-translate-x-[85%] opacity-80"}
            `}
          >
            {!showFilter && (
              <button
                onClick={() => setShowFilter(true)}
                className="absolute -right-0 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-3 rounded-r-lg shadow-lg flex items-center justify-center transition"
              >
                <FaFilter />
              </button>
            )}

            {showFilter && (
              <>
                <h3 className="text-xl font-bold flex items-center justify-between text-red-500 border-b border-red-500 pb-3">
                  <span>Search Filters</span>
                  <button
                    className="text-red-400 hover:underline"
                    onClick={() => setShowFilter(false)}
                  >
                    <FaFilter className="inline-block ml-2 text-red-400" />
                  </button>
                </h3>

                {/* Search Input */}
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Enter car name..."
                  className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                />

                {/* Brand Filter */}
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700"
                >
                  <option value="">All Brands</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>

                {/* Sort */}
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700"
                >
                  <option value="">Sort By</option>
                  <option value="az">🔼 Sort: A → Z</option>
                  <option value="za">🔽 Sort: Z → A</option>
                </select>

                {/* Price Filter */}
                <div>
                  <h4 className="text-lg font-semibold text-red-400 border-b border-red-400 mb-2">
                    Price Range
                  </h4>
                  <div className="space-y-2 text-white">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="Prices"
                        checked={selectedPrice === null}
                        onChange={() => setSelectedPrice(null)}
                      />
                      All Prices
                    </label>
                    {[1000000, 2000000, 3000000, 4000000].map((price) => (
                      <label key={price} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="Prices"
                          checked={selectedPrice === price}
                          onChange={() => setSelectedPrice(price)}
                        />
                        ₹{price.toLocaleString()} +
                      </label>
                    ))}
                  </div>
                </div>
              </>
            )}
          </aside>

          {/* Car Listing */}
          <div className="lg:ml-0 ml-0">
            {filteredCars.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredCars.map((car) => (
                  <div
                    key={car.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
                  >
                    <div className="h-56 w-full overflow-hidden relative">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="h-full w-full object-cover hover:scale-110 transition duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-red-500/60 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <FaBuilding /> {car.brand}
                      </span>
                    </div>

                    <div className="p-6 space-y-3 bg-gradient-to-br from-white to-gray-300">
                      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <FaCarSide className="text-red-500" /> {car.name}
                      </h3>
                      <p className="text-gray-700 text-sm flex items-center gap-2">
                        <FaInfoCircle className="text-gray-400 text-xl" />{" "}
                        {car.description}
                      </p>
                      <p className="text-lg font-semibold text-red-600 flex items-center gap-2">
                        <FaRupeeSign /> {car.price.toLocaleString()}
                      </p>

                      <button
                        className="mt-4 w-full cursor-pointer bg-gradient-to-r from-red-600 via-red-50 to-red-500 hover:bg-red-600 text-black py-2 px-4 rounded-lg transition font-medium flex justify-center items-center gap-2"
                        onClick={() => setModalData(car)}
                      >
                        <FaCarSide /> View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-400 text-lg">
                No cars match your filters 🚫
              </p>
            )}
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
      </section>
    </>
  );
}
