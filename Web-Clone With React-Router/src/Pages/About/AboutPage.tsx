import { FaUsers, FaAward, FaListCheck, FaComments, FaCheck } from "react-icons/fa6";

import About from "./About";

export default function AboutPage() {
    return (
        <>
            <div
                className="w-full py-20 bg-cover bg-center"
                style={{ backgroundImage: "url('../Public/img/bg.jpg')" }}
            >
                <div className="max-w-6xl mx-auto text-center py-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-black">
                        About Us
                    </h1>
                </div>
            </div>
            <About />
            <div className="w-full py-16 ">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-[#fdfaf4] bg-[url('./Public/img/bg.jpg')] bg-cover bg-center md:px-44 md:py-30 shadow-lg rounded-lg text-center">
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
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
            <div className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Box 1 */}
          <div className="text-center bg-yellow-500 py-10 px-6 rounded-lg shadow">
            <FaUsers className="text-teal-700 text-5xl mx-auto mb-3" />
            <h1 className="text-4xl font-bold text-black">500</h1>
            <span className="text-black">Team Members</span>
          </div>

          {/* Box 2 */}
          <div className="text-center bg-teal-700 py-10 px-6 rounded-lg shadow">
            <FaAward className="text-yellow-500 text-5xl mx-auto mb-3" />
            <h1 className="text-4xl font-bold text-white">70</h1>
            <span className="text-white">Award Winning</span>
          </div>

          {/* Box 3 */}
          <div className="text-center bg-teal-700 py-10 px-6 rounded-lg shadow">
            <FaListCheck className="text-yellow-500 text-5xl mx-auto mb-3" />
            <h1 className="text-4xl font-bold text-white">3000</h1>
            <span className="text-white">Total Projects</span>
          </div>

          {/* Box 4 */}
          <div className="text-center bg-yellow-500 py-10 px-6 rounded-lg shadow">
            <FaComments className="text-teal-700 text-5xl mx-auto mb-3" />
            <h1 className="text-4xl font-bold text-black">7000</h1>
            <span className="text-black">Client&apos;s Review</span>
          </div>
        </div>

        {/* Right Text Content */}
        <div>
          <p className="text-yellow-500 font-semibold uppercase tracking-wide flex items-center gap-2">
            Why Us! <span className="w-12 h-[2px] bg-yellow-500 inline-block"></span>
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Few Reasons Why People Choosing Us!
          </h1>
          <p className="text-gray-600 mb-6">
            We believe in creating opportunities and empowering communities through education,
            healthcare, and sustainable development. Your support helps us bring smiles, hope,
            and a brighter future to those in need.
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-gray-800">
              <FaCheck className="text-yellow-500 mr-2" /> Justo magna erat amet
            </li>
            <li className="flex items-center text-gray-800">
              <FaCheck className="text-yellow-500 mr-2" /> Aliqu diam amet diam et eos
            </li>
            <li className="flex items-center text-gray-800">
              <FaCheck className="text-yellow-500 mr-2" /> Clita erat ipsum et lorem et sit
            </li>
          </ul>

          <div className="flex gap-4">
            <a
              href="#!"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded transition"
            >
              Donate Now
            </a>
            <a
              href="#!"
              className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-6 rounded transition"
            >
              Join Us Now
            </a>
          </div>
        </div>
      </div>
    </div>

        </>
    )
}