import { useLoaderData, useNavigate } from "react-router";
import { useState } from "react";
import {FaCarSide,FaBuilding,FaDollarSign,FaImage,FaAlignLeft,FaIdBadge} from "react-icons/fa";
import { carAPIService } from "../../Service/CarAPIService";
import { routerName } from "../../Routes/routes";
import { ToastContainer, toast } from "react-toastify";

export default function EditCarPage() {
    const data = useLoaderData();
    const navigator = useNavigate();

    const [carFormData, setCarFormData] = useState({
        id: data.id,
        name: data.name,
        brand: data.brand,
        price: data.price,
        image: data.image,
        description: data.description,
    });

    const handleEvent = (event: any) => {
        const { name, value } = event.target;
        setCarFormData({ ...carFormData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (await carAPIService.updateCar(data.id, carFormData)) {
            navigator(routerName.viewAllCar);
        } else {
            toast.error("Car update failed...");
        }
    };

    return (
        <>
            <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

                {/* Glass Card */}
                <div className="relative max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-6 px-8">
                        <h2 className="text-2xl font-bold pb-2 flex items-center gap-2">
                            <FaIdBadge /> Edit Car
                        </h2>
                        <p className="text-sm">Update your car details below</p>
                    </div>

                    {/* Form */}
                    <form className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>

                        {/* Car Name */}
                        <div className="relative">
                            <FaCarSide className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                value={carFormData.name}
                                name="name"
                                placeholder=" "
                                onChange={handleEvent}
                                className="peer w-full bg-white/5 text-white border border-gray-400/30 rounded-lg 
                           pl-10 pr-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 
                           outline-none transition"
                            />
                            <label className="absolute left-10 top-3 text-gray-400 text-sm transition-all 
                               peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 
                               peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs 
                               peer-focus:text-red-400">
                                Car Name
                            </label>
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
                                className="peer w-full bg-white/5 text-white border border-gray-400/30 rounded-lg 
                           pl-10 pr-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 
                           outline-none transition"
                            />
                            <label className="absolute left-10 top-3 text-gray-400 text-sm transition-all 
                               peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 
                               peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs 
                               peer-focus:text-red-400">
                                Car Brand
                            </label>
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
                                className="peer w-full bg-white/5 text-white border border-gray-400/30 rounded-lg 
                           pl-10 pr-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 
                           outline-none transition"
                            />
                            <label className="absolute left-10 top-3 text-gray-400 text-sm transition-all 
                               peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 
                               peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs 
                               peer-focus:text-red-400">
                                Car Price
                            </label>
                        </div>

                        {/* Car Image */}
                        <div className="relative">
                            <FaImage className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                value={carFormData.image}
                                name="image"
                                placeholder=" "
                                onChange={handleEvent}
                                className="peer w-full bg-white/5 text-white border border-gray-400/30 rounded-lg 
                           pl-10 pr-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 
                           outline-none transition"
                            />
                            <label className="absolute left-10 top-3 text-gray-400 text-sm transition-all 
                               peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 
                               peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs 
                               peer-focus:text-red-400">
                                Car Image URL
                            </label>
                        </div>

                        {/* Car Description */}
                        <div className="relative md:col-span-2">
                            <FaAlignLeft className="absolute left-3 top-3 text-gray-400" />
                            <textarea
                                value={carFormData.description}
                                name="description"
                                onChange={handleEvent}
                                placeholder=" "
                                rows={4}
                                className="peer w-full bg-white/5 text-white border border-gray-400/30 rounded-lg 
                           pl-10 pr-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 
                           outline-none transition resize-none"
                            ></textarea>
                            <label className="absolute left-10 top-3 text-gray-400 text-sm transition-all 
                               peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 
                               peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs 
                               peer-focus:text-red-400">
                                Car Description
                            </label>
                        </div>

                        {/* Submit */}
                        <div className="md:col-span-2 text-center">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 
                           text-white px-12 py-4 rounded-full text-xl font-bold shadow-lg 
                           transform hover:scale-105 transition flex items-center justify-center gap-2"
                            >
                                <FaCarSide /> Update Car
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <ToastContainer />
        </>
    );
}
