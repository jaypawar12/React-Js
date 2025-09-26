export default function Donation() {
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
            Donation
            <span className="ml-1 inline-flex flex-col">
              <span className="w-7 h-[2px] mb-2 bg-yellow-500 inline-block"></span>
              <span className="w-[60px] h-[2px] bg-yellow-500 inline-block"></span>
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Donation Causes Around the World
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="flex bg-white shadow-lg rounded-lg overflow-hidden p-6">
            {/* Progress */}
            <div className="flex flex-col items-center text-center mr-6 w-20">
              <h6 className="text-sm font-semibold">Raised</h6>
              <span className="text-gray-600 mb-2">$8000</span>
              <div className="relative h-72 w-18 bg-gray-200 rounded-lg overflow-hidden mb-2 flex items-end">
                <div className="bg-teal-700 w-full h-[85%] flex items-center justify-center text-white text-sm font-semibold">
                  85%
                </div>
              </div>
              <h6 className="text-sm font-semibold">Goal</h6>
              <span className="text-gray-600">$10000</span>
            </div>

            {/* Details */}
            <div className="flex-1">
              <div className="relative mb-4">
                <img
                  src="../Public/img/donation-1.jpg"
                  alt="Healthy Food"
                  className="w-full rounded-lg object-cover"
                />
                <span className="absolute top-2 right-2 bg-teal-700 text-white text-xs px-3 py-1 rounded">
                  Food
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Healthy Food</h3>
              <p className="text-gray-600 mb-4">
                Through your donations and volunteer work, we spread kindness and support to children.
              </p>
              <a
                href="#!"
                className="block text-center bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-medium transition"
              >
                <i className="fa fa-plus mr-2"></i> Donate Now
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <div className="flex flex-col items-center text-center mr-6 w-20">
              <h6 className="text-sm font-semibold">Raised</h6>
              <span className="text-gray-600 mb-2">$8000</span>
              <div className="relative h-72 w-18 bg-gray-200 rounded-lg overflow-hidden mb-2 flex items-end">
                <div className="bg-teal-700 w-full h-[95%] flex items-center justify-center text-white text-sm font-semibold">
                  95%
                </div>
              </div>
              <h6 className="text-sm font-semibold">Goal</h6>
              <span className="text-gray-600">$10000</span>
            </div>
            <div className="flex-1">
              <div className="relative mb-4">
                <img
                  src="../Public/img/donation-2.jpg"
                  alt="Water Treatment"
                  className="w-full rounded-lg object-cover"
                />
                <span className="absolute top-2 right-2 bg-teal-700 text-white text-xs px-3 py-1 rounded">
                  Health
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Water Treatment</h3>
              <p className="text-gray-600 mb-4">
                Through your donations and volunteer work, we spread kindness and support to children.
              </p>
              <a
                href="#!"
                className="block text-center bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-medium transition"
              >
                <i className="fa fa-plus mr-2"></i> Donate Now
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <div className="flex flex-col items-center text-center mr-6 w-20">
              <h6 className="text-sm font-semibold">Raised</h6>
              <span className="text-gray-600 mb-2">$8000</span>
              <div className="relative h-72 w-18 bg-gray-200 rounded-lg overflow-hidden mb-2 flex items-end">
                <div className="bg-teal-700 w-full h-[75%] flex items-center justify-center text-white text-sm font-semibold">
                  75%
                </div>
              </div>
              <h6 className="text-sm font-semibold">Goal</h6>
              <span className="text-gray-600">$10000</span>
            </div>
            <div className="flex-1">
              <div className="relative mb-4">
                <img
                  src="../Public/img/donation-3.jpg"
                  alt="Education Support"
                  className="w-full rounded-lg object-cover"
                />
                <span className="absolute top-2 right-2 bg-teal-700 text-white text-xs px-3 py-1 rounded">
                  Education
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Education Support</h3>
              <p className="text-gray-600 mb-4">
                Through your donations and volunteer work, we spread kindness and support to children.
              </p>
              <a
                href="#!"
                className="block text-center bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-medium transition"
              >
                <i className="fa fa-plus mr-2"></i> Donate Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
