export default function Carousel() {
  return (
    <div className="w-full bg-gradient-to-br from-white to-gray-50 py-12 relative text-gray-300 bg-cover bg-center" style={{
                backgroundImage:
                    "url('../Public/img/bg.jpg')",
            }}>
      <div className="container mx-auto p-28 px-5 lg:px-12 "
            >
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-extrabold uppercase text-gray-900 leading-tight">
              Together for a Better Tomorrow
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              We believe in creating opportunities and empowering communities
              through education, healthcare, and sustainable development.
            </p>
            <div className="flex space-x-4">
              <a
                href="#!"
                className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition"
              >
                Donate Now
              </a>
              <a
                href="#!"
                className="bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-emerald-800 transition"
              >
                Join Us Now
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="../Public/img/carousel-1.jpg"
              alt="Slide 1"
              className="rounded-2xl shadow-lg w-full max-w-md lg:max-w-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
