import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';

export default function TeamSection() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Title */}
                <div className="text-center max-w-lg mx-auto mb-12">
                    <div className="text-yellow-500 font-medium uppercase tracking-wide flex items-center justify-center gap-2 mb-5">
                        <span className="mr-1 inline-flex flex-col">
                            <span className="w-7 h-[2px] mb-2 ml-8 bg-yellow-500 inline-block"></span>
                            <span className="w-[60px] h-[2px] bg-yellow-500 inline-block"></span>
                        </span>
                        Our Team
                        <span className="ml-1 inline-flex flex-col">
                            <span className="w-7 h-[2px] mb-2 bg-yellow-500 inline-block"></span>
                            <span className="w-[60px] h-[2px] bg-yellow-500 inline-block"></span>
                        </span>
                    </div>
                    <h1 className="md:text-5xl font-bold text-gray-900">
                        Meet Our Dedicated Team Members
                    </h1>
                </div>

                {/* Team Members */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Member 1 */}
                    <div className="flex bg-white shadow-md rounded-lg p-4 h-full">
                        <div className="pr-4">
                            <img src="../Public/img/team-1.jpg" alt="Boris Johnson" className="mb-4 w-full rounded-md" />
                            <h3 className="text-2xl mb-2 font-semibold">Boris Johnson</h3>
                            <p className="text-gray-500 text-lg">Founder & CEO</p>
                        </div>
                        <div className="flex flex-col justify-center bg-yellow-50 p-5">
                            <a href="#!" className="text-black bg-yellow-500 hover:bg-yellow-700 p-3 my-2">
                                <FaFacebookF />
                            </a>
                            <a href="#!" className="text-black bg-yellow-500 hover:bg-yellow-700 p-3 my-2">
                                <FaXTwitter />
                            </a>
                            <a href="#!" className="text-black bg-yellow-500 hover:bg-yellow-700 p-3 my-2">
                                <FaInstagram />
                            </a>
                            <a href="#!" className="text-black bg-yellow-500 hover:bg-yellow-700 p-3 my-2">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Member 2 */}
                    <div className="flex bg-white shadow-md rounded-lg p-4 h-full">
                        <div className="pr-4">
                            <img src="../Public/img/team-2.jpg" alt="Donald Pakura" className="mb-4 w-full rounded-md" />
                            <h3 className="text-2xl mb-2 font-semibold">Donald Pakura</h3>
                            <p className="text-gray-500 text-lg">Project Manager</p>
                        </div>
                        <div className="flex flex-col justify-center bg-yellow-50 p-5">
                            <a href="#!" className="text-black bg-yellow-500 hover:bg-yellow-700 p-3 my-2">
                                <FaFacebookF />
                            </a>
                            <a href="#!" className="text-black bg-yellow-500 hover:bg-yellow-700 p-3 my-2">
                                <FaXTwitter />
                            </a>
                            <a href="#!" className="text-black bg-yellow-500 hover:bg-yellow-700 p-3 my-2">
                                <FaInstagram />
                            </a>
                            <a href="#!" className="text-black bg-yellow-500 hover:bg-yellow-700 p-3 my-2">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Member 3 */}
                    <div className="flex bg-white shadow-md rounded-lg p-4 h-full">
                        <div className="pr-4">
                            <img src="../Public/img/team-3.jpg" alt="Alexander Bell" className="mb-4 w-full rounded-md" />
                            <h3 className="text-2xl mb-2 font-semibold">Alexander Bell</h3>
                            <p className="text-gray-500 text-lg">Volunteer</p>
                        </div>
                        <div className="flex flex-col justify-center bg-yellow-50 p-5">
                            <a href="#!" className="text-black bg-yellow-500 hover:bg-yellow-700 p-3 my-2">
                                <FaFacebookF />
                            </a>
                            <a href="#!" className="text-black bg-yellow-500 hover:bg-yellow-700 p-3 my-2">
                                <FaXTwitter />
                            </a>
                            <a href="#!" className="text-black bg-yellow-500 hover:bg-yellow-700 p-3 my-2">
                                <FaInstagram />
                            </a>
                            <a href="#!" className="text-black bg-yellow-500 hover:bg-yellow-700 p-3 my-2">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

