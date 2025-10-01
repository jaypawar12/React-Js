import { useState } from "react";

export default function AddCarForm({ addCar }: { addCar: (car: any) => void }) {
  const [carName, setCarName] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [carImage, setCarImage] = useState("");
  const [carDesc, setCarDesc] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (!carName || !carBrand || !carPrice || !carImage || !carDesc) return;

    addCar({
      name: carName,
      brand: carBrand,
      price: carPrice,
      image: carImage,
      description: carDesc,
    });

    // Reset form
    setCarName("");
    setCarBrand("");
    setCarPrice("");
    setCarImage("");
    setCarDesc("");
  };

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Add New Car
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Car Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Car Name
            </label>
            <input
              type="text"
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
              placeholder="Enter car name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Car Brand */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Car Brand
            </label>
            <input
              type="text"
              value={carBrand}
              onChange={(e) => setCarBrand(e.target.value)}
              placeholder="Enter car brand"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Car Price */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Car Price
            </label>
            <input
              type="number"
              value={carPrice}
              onChange={(e) => setCarPrice(e.target.value)}
              placeholder="Enter car price"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Car Image URL */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Car Image URL
            </label>
            <input
              type="text"
              value={carImage}
              onChange={(e) => setCarImage(e.target.value)}
              placeholder="Enter image URL"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Car Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Car Description
            </label>
            <textarea
              value={carDesc}
              onChange={(e) => setCarDesc(e.target.value)}
              placeholder="Enter description"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition"
            >
              Add Car
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
