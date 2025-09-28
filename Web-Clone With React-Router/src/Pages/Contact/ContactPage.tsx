import { FaUser, FaEnvelope, FaRegCommentDots } from "react-icons/fa";

export default function ContactPage() {
    return (
        <>
            <div
                className="w-full py-20 bg-cover bg-center"
                style={{ backgroundImage: "url('../Public/img/bg.jpg')" }}
            >
                <div className="max-w-6xl mx-auto text-center py-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-black">
                        Contact
                    </h1>
                </div>
            </div>
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        {/* Left Section */}
                        <div>
                            <p className="text-yellow-500 uppercase font-semibold flex items-center gap-2 mb-3">
                                Contact
                                <div className="ml-1 inline-flex flex-col">
                                    <span className="w-7 h-[2px] mb-2 bg-yellow-500 inline-block"></span>
                                    <span className="w-15 h-[2px] bg-yellow-500 inline-block"></span>
                                </div>
                            </p>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                If You Have Any Query, Please Contact Us
                            </h1>

                            {/* Google Map */}
                            <iframe
                                className="w-full h-[400px] rounded-lg shadow-md"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Right Section */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                                Need a functional contact form?
                            </h3>
                            <p className="text-gray-500 mb-6">
                                The contact form is currently inactive. Get a functional and
                                working contact form with Ajax & PHP in a few minutes. Just copy
                                and paste the files, add a little code and you're done.{" "}
                                <a
                                    href="#"
                                    className="text-yellow-500 font-medium hover:underline"
                                >
                                    Download Now
                                </a>
                                .
                            </p>

                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Name */}
                                    <div className="relative">
                                        <FaUser className="absolute left-3 top-3 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="relative">
                                        <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />

                                {/* Message */}
                                <div className="relative">
                                    <FaRegCommentDots className="absolute left-3 top-3 text-gray-400" />
                                    <textarea
                                        placeholder="Message"
                                        className="w-full pl-10 pr-4 py-3 h-40 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    ></textarea>
                                </div>

                                {/* Button */}
                                <button
                                    type="submit"
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-3 rounded-md shadow-md transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
