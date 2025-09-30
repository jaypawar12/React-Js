import { FaClock, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Event() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center max-w-lg mx-auto mb-12">
                    <div className="text-yellow-500 font-semibold uppercase tracking-wide flex items-center justify-center gap-2 mb-3">
                        <span className="mr-1 inline-flex flex-col">
                            <span className="w-7 h-[2px] mb-2 ml-8 bg-yellow-500 inline-block"></span>
                            <span className="w-[60px] h-[2px] bg-yellow-500 inline-block"></span>
                        </span>
                        Events
                        <span className="ml-1 inline-flex flex-col">
                            <span className="w-7 h-[2px] mb-2 bg-yellow-500 inline-block"></span>
                            <span className="w-[60px] h-[2px] bg-yellow-500 inline-block"></span>
                        </span>
                    </div>
                    <h1 className="md:text-5xl font-bold text-gray-900">
                        Be a Part of a Global Movement
                    </h1>
                </div>


                {/* Event Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition p-5">
                        <img
                            src="../Public/img/event-1.jpg"
                            alt="Education Program"
                            className="w-full h-52 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Education Program</h3>
                        <p className="text-gray-600 mb-4">
                            Through your donations and volunteer work, we spread kindness and
                            support to children.
                        </p>
                        <div className="bg-yellow-50 p-4 rounded-md">
                            <p className="mb-2 flex items-center text-gray-700">
                                <FaClock className="text-orange-400 mr-2" />
                                10:00 AM - 18:00 PM
                            </p>
                            <p className="mb-2 flex items-center text-gray-700">
                                <FaCalendarAlt className="text-orange-400 mr-2" />
                                Jan 01 - Jan 10
                            </p>
                            <p className="flex items-center text-gray-700">
                                <FaMapMarkerAlt className="text-orange-400 mr-2" />
                                123 Street, New York, USA
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition p-5">
                        <img
                            src="../Public/img/event-2.jpg"
                            alt="Awareness Program"
                            className="w-full h-52 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Awareness Program</h3>
                        <p className="text-gray-600 mb-4">
                            Through your donations and volunteer work, we spread kindness and
                            support to children.
                        </p>
                        <div className="bg-yellow-50 p-4 rounded-md">
                            <p className="mb-2 flex items-center text-gray-700">
                                <FaClock className="text-orange-400 mr-2" />
                                10:00 AM - 18:00 PM
                            </p>
                            <p className="mb-2 flex items-center text-gray-700">
                                <FaCalendarAlt className="text-orange-400 mr-2" />
                                Jan 01 - Jan 10
                            </p>
                            <p className="flex items-center text-gray-700">
                                <FaMapMarkerAlt className="text-orange-400 mr-2" />
                                123 Street, New York, USA
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition p-5">
                        <img
                            src="../Public/img/event-3.jpg"
                            alt="Health Care Program"
                            className="w-full h-52 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Health Care Program</h3>
                        <p className="text-gray-600 mb-4">
                            Through your donations and volunteer work, we spread kindness and
                            support to children.
                        </p>
                        <div className="bg-yellow-50 p-4 rounded-md">
                            <p className="mb-2 flex items-center text-gray-700">
                                <FaClock className="text-orange-400 mr-2" />
                                10:00 AM - 18:00 PM
                            </p>
                            <p className="mb-2 flex items-center text-gray-700">
                                <FaCalendarAlt className="text-orange-400 mr-2" />
                                Jan 01 - Jan 10
                            </p>
                            <p className="flex items-center text-gray-700">
                                <FaMapMarkerAlt className="text-orange-400 mr-2" />
                                123 Street, New York, USA
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
