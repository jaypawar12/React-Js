import React, { useEffect, useState } from "react";

const BikeTable = () => {
    // const [bikes, setBikes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Dummy Bike Data
    const dummyBikeData = [
        {
            ownerName: "Jay Pawar",
            brand: "Royal Enfield",
            model: "Classic 350",
            registrationNumber: "GJ05 AB 1234",
            type: "Cruiser"
        },
        {
            ownerName: "Rahul Sharma",
            brand: "Yamaha",
            model: "R15 V4",
            registrationNumber: "MH12 XY 9988",
            type: "Sports"
        },
        {
            ownerName: "Kunal Patel",
            brand: "Honda",
            model: "Activa 6G",
            registrationNumber: "GJ01 HK 1122",
            type: "Scooter"
        },
        {
            ownerName: "Neha Singh",
            brand: "KTM",
            model: "Duke 390",
            registrationNumber: "RJ14 ZP 7766",
            type: "Sports"
        }
    ];

    useEffect(() => {
        // Mock loading effect
        setTimeout(() => {
            // setBikes(dummyBikeData);
            setLoading(false);
        }, 800);
    }, []);

    return (
        <div className="min-h-screen bg-neutral-950 p-10">
            <div className="bg-neutral-900 border border-white/10 rounded-2xl p-8 shadow-xl max-w-5xl mx-auto">

                {/* Header */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                    All Registered Bikes
                </h2>
                <p className="text-neutral-400 text-sm mb-6">
                    Dummy Data Loaded — No API Needed!
                </p>

                {/* Loading */}
                {loading && (
                    <p className="text-neutral-300 text-center py-4">Loading bikes...</p>
                )}

                {/* Table */}
                {!loading && (
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-neutral-800">
                                    <th className="p-3 text-left text-neutral-300 text-sm">Owner</th>
                                    <th className="p-3 text-left text-neutral-300 text-sm">Brand</th>
                                    <th className="p-3 text-left text-neutral-300 text-sm">Model</th>
                                    <th className="p-3 text-left text-neutral-300 text-sm">Reg. No</th>
                                    <th className="p-3 text-left text-neutral-300 text-sm">Type</th>
                                    <th className="p-3 text-center text-neutral-300 text-sm">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {dummyBikeData.map((bike, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-neutral-800 hover:bg-neutral-800/50 transition"
                                    >
                                        <td className="p-3 text-neutral-200">{bike.ownerName}</td>
                                        <td className="p-3 text-neutral-200">{bike.brand}</td>
                                        <td className="p-3 text-neutral-200">{bike.model}</td>
                                        <td className="p-3 text-neutral-200">{bike.registrationNumber}</td>
                                        <td className="p-3 text-neutral-200">{bike.type}</td>

                                        <td className="p-3 text-center flex justify-center gap-2">

                                            <button className="px-3 py-1 text-sm bg-neutral-700 hover:bg-neutral-600 text-white rounded-md transition">
                                                Edit
                                            </button>

                                            <button className="px-3 py-1 text-sm bg-red-600 hover:bg-red-500 text-white rounded-md transition">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BikeTable;
