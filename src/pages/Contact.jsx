import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#fafafa] pt-28 pb-20 px-6 md:px-16">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-lg">
          We’d love to hear from you, whether it’s about exhibitions, artworks,
          partnerships, or general enquiries.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* CONTACT INFO */}
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
            <div className="flex items-start gap-4 text-gray-700">
              <FiMapPin className="mt-1" />
              <p>
                Olive Gate Hotel Junction, 1 Snapp Drive,<br /> Independence Layout, Enugu 410001, Enugu
                State, Nigeria
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center gap-4">
                <FiMail />
                <span>info@kachijamesgallery.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FiPhone />
                <span>+234 80 6852 8195</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Opening Hours</h2>
            <p className="text-gray-700">
              Monday – Saturday: 9:30 AM – 5:30 PM <br />
              Sunday: 2:00 AM – 5:30 PM
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Kachi James Gallery Location"
              src="https://www.google.com/maps?q=AI%Movement%20Tech%20Junction,%201%20Snapp%20Drive,%20Independence%20Layout,%20Enugu%20410001,%20Enugu&output=embed"
              className="w-full h-64 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell us how we can help you..."
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
