import React from 'react'
import { FaMotorcycle, FaUser, FaPhone, FaRegIdCard } from "react-icons/fa";
import { HiUser, HiPhone, HiClipboardList } from "react-icons/hi";

export default function BikeRegisation() {
    return (

        <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6">

            <div className="w-full max-w-2xl bg-neutral-900 border border-white/10 rounded-2xl shadow-xl p-10">

                {/* Title */}
                <div className="flex items-center gap-3 mb-2">
                    <FaMotorcycle className="text-white text-3xl" />
                    <h2 className="text-3xl font-semibold text-white tracking-tight">
                        Bike Registration Form
                    </h2>
                </div>

                <p className="text-neutral-400 mb-8 text-sm">
                    Enter bike and owner details carefully.
                </p>

                <form className="space-y-6">

                    {/* Owner Name */}
                    <div className="space-y-1">
                        <label className="text-neutral-300 text-sm flex items-center gap-2">
                            <HiUser className="text-neutral-500" /> Owner Name
                        </label>
                        <div className="relative">
                            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-xs" />
                            <input
                                type="text"
                                placeholder="Enter owner name"
                                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-10 py-3 text-white placeholder-neutral-500 focus:border-white outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1">
                        <label className="text-neutral-300 text-sm flex items-center gap-2">
                            <HiPhone className="text-neutral-500" /> Mobile Number
                        </label>
                        <div className="relative">
                            <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-xs" />
                            <input
                                type="tel"
                                placeholder="(+91) 98765 43210"
                                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-10 py-3 text-white placeholder-neutral-500 focus:border-white outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Bike Brand / Model */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Brand */}
                        <div className="space-y-1">
                            <label className="text-neutral-300 text-sm flex items-center gap-2">
                                <FaMotorcycle className="text-neutral-500" /> Bike Brand
                            </label>
                            <select
                                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:border-white outline-none transition-all"
                            >
                                <option className="bg-neutral-800">Select Brand</option>
                                <option className="bg-neutral-800">Honda</option>
                                <option className="bg-neutral-800">Yamaha</option>
                                <option className="bg-neutral-800">Royal Enfield</option>
                                <option className="bg-neutral-800">TVS</option>
                                <option className="bg-neutral-800">Hero</option>
                                <option className="bg-neutral-800">KTM</option>
                            </select>
                        </div>

                        {/* Model */}
                        <div className="space-y-1">
                            <label className="text-neutral-300 text-sm flex items-center gap-2">
                                <HiClipboardList className="text-neutral-500" /> Bike Model
                            </label>
                            <input
                                type="text"
                                placeholder="Ex: Classic 350, R15, etc."
                                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:border-white outline-none transition-all"
                            />
                        </div>

                    </div>

                    {/* Registration Number */}
                    <div className="space-y-1">
                        <label className="text-neutral-300 text-sm flex items-center gap-2">
                            <FaRegIdCard className="text-neutral-500" /> Registration Number
                        </label>
                        <input
                            type="text"
                            placeholder="Ex: GJ05 AB 1234"
                            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:border-white outline-none transition-all"
                        />
                    </div>

                    {/* Bike Type */}
                    <div className="space-y-1">
                        <label className="text-neutral-300 text-sm flex items-center gap-2">
                            <FaMotorcycle className="text-neutral-500" /> Bike Type
                        </label>
                        <select
                            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:border-white outline-none transition-all"
                        >
                            <option className="bg-neutral-800">Select Type</option>
                            <option className="bg-neutral-800">Sports</option>
                            <option className="bg-neutral-800">Cruiser</option>
                            <option className="bg-neutral-800">Scooter</option>
                            <option className="bg-neutral-800">Electric</option>
                            <option className="bg-neutral-800">Dirt</option>
                        </select>
                    </div>

                    {/* Address */}
                    <div className="space-y-1">
                        <label className="text-neutral-300 text-sm flex items-center gap-2">
                            <HiClipboardList className="text-neutral-500" /> Address
                        </label>
                        <textarea
                            placeholder="Enter full address"
                            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 h-24 text-white placeholder-neutral-500 focus:border-white outline-none transition-all resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-300 transition-all shadow-md"
                    >
                        Register Bike
                    </button>

                </form>

            </div>
        </div>
    )
}
