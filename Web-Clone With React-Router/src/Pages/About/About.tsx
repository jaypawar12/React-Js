export default function About() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Image Section */}
                    <div className="relative">
                        <img
                            src="../Public/img/about.jpg"
                            alt="About"
                            className="w-full h-min rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Text Section */}
                    <div>
                        <p className="text-sm font-semibold text-yellow-600 uppercase tracking-wide mb-2">
                            About Us
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Join Hands, Change the World
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Every hand extended in kindness brings us closer to a world free
                            from suffering. Be part of a global movement dedicated to building
                            a future where equality and compassion thrive.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Mission Section */}
                            <div>
                                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                                <p className="text-gray-600 mb-4">
                                    Our mission is to uplift underprivileged communities by
                                    providing resources, education, and tools for growth.
                                </p>
                                <ul className="space-y-2 text-gray-800">
                                    <li className="flex items-start">
                                        <span className="text-yellow-500 mr-2">✔</span>
                                        No one should go to bed hungry.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-yellow-500 mr-2">✔</span>
                                        We spread kindness and support.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-yellow-500 mr-2">✔</span>
                                        We can change someone’s life.
                                    </li>
                                </ul>
                            </div>

                            {/* Donation Section */}
                            <div className="bg-yellow-500 text-center p-6 rounded-lg shadow-md flex flex-col justify-center">
                                <p className="text-gray-900 font-medium mb-4">
                                    Through your donations, we spread kindness and support to
                                    children and families.
                                </p>
                                <a
                                    href="#!"
                                    className="inline-block bg-teal-700 text-white px-6 py-2 rounded-md font-medium hover:bg-teal-800 transition"
                                >
                                    Donate Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
