
export default function Banner() {
  return (
    <div className="w-full py-16 ">
        <div className="max-w-6xl mx-auto px-8">
          <div className="bg-[#fdfaf4] bg-[url('./Public/img/bg.jpg')] bg-cover bg-center md:px-44 md:py-30 shadow-lg rounded-lg text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Door Are Always Open to More People
              <br />
              Who Want to Support Each Others!
            </h1>

            <p className="text-lg text-gray-600 m-6">
              Through your donations and volunteer work, we spread kindness and
              support to children, families, and communities struggling to find
              stability.
            </p>

            <div className="flex justify-center gap-4 mt-8">
              <a
                href="#!"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-4 px-7 rounded transition"
              >
                Donate Now
              </a>
              <a
                href="#!"
                className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-4 px-7 rounded transition"
              >
                Join Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}
