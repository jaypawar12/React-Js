import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions or want to know more? Reach out to us, we’re here to help!
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <FaMapMarkerAlt className="text-red-500 text-3xl mb-4" />
              <h3 className="text-2xl font-bold mb-2">Location</h3>
              <p className="text-gray-600">123 CarZone Street, Auto City, USA</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <FaPhoneAlt className="text-red-500 text-3xl mb-4" />
              <h3 className="text-2xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <FaEnvelope className="text-red-500 text-3xl mb-4" />
              <h3 className="text-2xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">info@carzone.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
