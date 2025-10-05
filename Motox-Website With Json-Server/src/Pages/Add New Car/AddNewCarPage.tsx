import { useState } from "react";
import {
  FaCarSide,
  FaBuilding,
  FaDollarSign,
  FaImage,
  FaAlignLeft,
  FaPlus,
} from "react-icons/fa";
import { carAPIService } from "../../Service/CarAPIService";
import { ToastContainer, toast } from "react-toastify";

export default function AddCarForm() {
  const [carFormData, setCarFormData] = useState({
    id: Math.floor(Math.random() * 10000).toString(),
    name: "",
    brand: "",
    price: "",
    image: "",
    description: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleEvent = (e: any) => {
    const { name, value } = e.target;
    setCarFormData({ ...carFormData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors: any = {};

    if (!carFormData.name.trim()) {
      newErrors.name = "Car name is required";
    } else if (carFormData.name.trim().length < 2) {
      newErrors.name = "Car name must be at least 2 characters";
    }

    if (!carFormData.brand.trim()) {
      newErrors.brand = "Car brand is required";
    }

    if (!carFormData.price) {
      newErrors.price = "Car price is required";
    } else if (Number(carFormData.price) <= 0) {
      newErrors.price = "Price must be greater than 0";
    }

    if (!carFormData.image) {
      newErrors.image = "Car image URL is required";
    }

    if (!carFormData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (carFormData.description.trim().length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix form errors before submitting.");
      return;
    }

    try {
      const status = await carAPIService.addNewCar(carFormData);
      if (status) {
        toast.success("Car added successfully!");

        setCarFormData({
          id: Math.floor(Math.random() * 10000).toString(),
          name: "",
          brand: "",
          price: "",
          image: "",
          description: "",
        });
      } else {
        toast.error("Failed to add car. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

        <div className="relative max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-t-3xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-black to-red-800 hover:from-red-800 hover:to-black/80 text-white py-6 px-8">
            <h2 className="text-2xl font-bold pb-2">🚗 Add New Car</h2>
            <p>Enter the details below to showcase your premium car</p>
          </div>

          {/* Form */}
          <form
            className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8"
            onSubmit={handleSubmit}
          >
            {/* Car Name */}
            <div className="relative">
              <FaCarSide className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                value={carFormData.name}
                name="name"
                placeholder=" "
                onChange={handleEvent}
                className="peer w-full bg-white/5 text-white border border-gray-400/30 rounded-lg pl-10 pr-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 outline-none transition"
              />
              <label className="absolute left-10 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-red-400">
                Car Name
              </label>
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Car Brand */}
            <div className="relative">
              <FaBuilding className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                value={carFormData.brand}
                name="brand"
                placeholder=" "
                onChange={handleEvent}
                className="peer w-full bg-white/5 text-white border border-gray-400/30 rounded-lg pl-10 pr-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 outline-none transition"
              />
              <label className="absolute left-10 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-red-400">
                Car Brand
              </label>
              {errors.brand && <p className="text-red-400 text-sm mt-1">{errors.brand}</p>}
            </div>

            {/* Car Price */}
            <div className="relative">
              <FaDollarSign className="absolute left-3 top-3 text-gray-400" />
              <input
                type="number"
                value={carFormData.price}
                name="price"
                placeholder=" "
                onChange={handleEvent}
                className="peer w-full bg-white/5 text-white border border-gray-400/30 rounded-lg pl-10 pr-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 outline-none transition"
              />
              <label className="absolute left-10 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-red-400">
                Car Price
              </label>
              {errors.price && <p className="text-red-400 text-sm mt-1">{errors.price}</p>}
            </div>

            {/* Car Image URL */}
            <div className="relative">
              <FaImage className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                value={carFormData.image}
                name="image"
                placeholder=" "
                onChange={handleEvent}
                className="peer w-full bg-white/5 text-white border border-gray-400/30 rounded-lg pl-10 pr-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 outline-none transition"
              />
              <label className="absolute left-10 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-red-400">
                Car Image URL
              </label>
              {errors.image && <p className="text-red-400 text-sm mt-1">{errors.image}</p>}
            </div>

            {/* Car Description */}
            <div className="relative md:col-span-2">
              <FaAlignLeft className="absolute left-3 top-3 text-gray-400" />
              <textarea
                placeholder=" "
                value={carFormData.description}
                name="description"
                onChange={handleEvent}
                rows={4}
                className="peer w-full bg-white/5 text-white border border-gray-400/30 rounded-lg pl-10 pr-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 outline-none transition resize-none"
              ></textarea>
              <label className="absolute left-10 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-red-400">
                Car Description
              </label>
              {errors.description && (
                <p className="text-red-400 text-sm mt-1">{errors.description}</p>
              )}
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="group w-full md:w-auto bg-gradient-to-r from-red-500 to-black/50 hover:from-black hover:to-red-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-500 flex items-center gap-2 justify-center hover:scale-105"
              >
                <FaPlus /> Add Car
              </button>
            </div>
          </form>
        </div>
      </section>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
