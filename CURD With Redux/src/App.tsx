import { useState } from "react";
import BikeRegisation from "./Components/BikeRegisation";
import BikeTable from "./Components/BikeTable";

const BikeForm = () => {
    const [activeTab, setActiveTab] = useState("register");

    return (
        <div className="w-full px-6 py-8 bg-black">
            {/* Header Buttons */}
            <div className="flex justify-center gap-4 mb-8">
                <button
                    onClick={() => setActiveTab("register")}
                    className={`px-6 py-2 rounded-lg font-semibold shadow-md transition 
            ${activeTab === "register"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                >
                    Bike Registration Form
                </button>

                <button
                    onClick={() => setActiveTab("table")}
                    className={`px-6 py-2 rounded-lg font-semibold shadow-md transition 
            ${activeTab === "table"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                >
                    All Bikes
                </button>
            </div>

            {/* Content Box */}
            <div
                className="bg-white shadow-xl rounded-xl p-6 border border-gray-200 
        max-w-4xl mx-auto transition-all duration-300"
            >
                {activeTab === "register" ? (
                    <div className="animate-fadeIn">
                        <BikeRegisation />
                    </div>
                ) : (
                    <div className="animate-fadeIn">
                        <BikeTable />
                    </div>
                )}
            </div>
        </div>
    );
};

export default BikeForm;