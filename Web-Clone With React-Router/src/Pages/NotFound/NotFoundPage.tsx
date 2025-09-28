import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFoundPage() {
    return (
        <>
            <div
                className="w-full py-20 bg-cover bg-center"
                style={{ backgroundImage: "url('../Public/img/bg.jpg')" }}
            >
                <div className="max-w-6xl mx-auto text-center py-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-black">
                        404 Not Found
                    </h1>
                </div>
            </div>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-lg mx-auto">
                        {/* Icon */}
                        <FaExclamationTriangle className="text-yellow-500 text-6xl mx-auto mb-6" />

                        {/* 404 Number */}
                        <h1 className="text-7xl font-extrabold text-gray-900 mb-2">404</h1>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                            Page Not Found
                        </h2>

                        {/* Description */}
                        <p className="text-gray-500 mb-6">
                            We’re sorry, the page you have looked for does not exist in our website!
                            Maybe go to our home page or try to use a search?
                        </p>

                        {/* Button */}
                        <a
                            href="/"
                            className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-md font-medium hover:bg-yellow-600 transition"
                        >
                            Go Back To Home
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
