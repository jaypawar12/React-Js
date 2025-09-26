import { FaPaperPlane } from 'react-icons/fa';

export default function NewsletterSection() {
  return (
    <section className="bg-yellow-500 py-16 mt-10">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Subscribe the Newsletter
        </h2>

        <div className="relative w-full mb-3">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full h-[60px] pl-5 pr-14 rounded-md border-none outline-none text-gray-700"
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full text-yellow-500 hover:text-yellow-500"
          >
            <FaPaperPlane size={22} />
          </button>
        </div>

        <p className="text-sm text-gray-700">
          Don't worry, we won't spam you with emails.
        </p>
      </div>
    </section>
  );
};

