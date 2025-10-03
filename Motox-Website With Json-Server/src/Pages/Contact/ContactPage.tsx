import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black py-36 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">
              Get in <span className="bg-gradient-to-r from-red-500 to-red-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions or want to know more? Reach out to us, we're here to help!
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-6">
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:border-red-500/50 shadow-xl hover:shadow-red-500/20 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <FaMapMarkerAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Location</h3>
              <p className="text-gray-300">123 CarZone Street, Auto City, USA</p>
            </div>

            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:border-red-500/50 shadow-xl hover:shadow-red-500/20 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <FaPhoneAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+91 98765 43210</p>
            </div>

            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:border-red-500/50 shadow-xl hover:shadow-red-500/20 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <FaEnvelope className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300">info@carzone.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-10 rounded-2xl border border-white/20 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-white font-semibold mb-2 text-sm uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:bg-white/15"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-white font-semibold mb-2 text-sm uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:bg-white/15"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-white font-semibold mb-2 text-sm uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:bg-white/15"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-white font-semibold mb-2 text-sm uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:bg-white/15 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group relative w-full md:w-auto bg-gradient-to-r from-red-500 hover:from-gray-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-500 shadow-lg hover:shadow-red-500/50 hover:scale-105 flex items-center justify-center gap-3"
              >
                <span>Send Message</span>
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 pt-8">
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent to-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <div className="h-0.5 w-24 bg-gradient-to-l from-transparent to-red-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}