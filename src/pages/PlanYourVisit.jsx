import { MapPin, Clock, Ticket, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function PlanYourVisit() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-black">
        <img
          src="https://i.ibb.co/xZT1s9K/IMG-1280.avif"
          alt="Gallery Interior"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 px-6">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4">
            Plan Your Visit
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Experience contemporary African art in a serene, inspiring space at
            Kachi James Gallery.
          </p>
        </div>
      </section>

      {/* INFO GRID */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14">
        {/* LEFT */}
        <div className="space-y-10">
          <div className="flex gap-5">
            <MapPin className="w-7 h-7 text-black" />
            <div>
              <h3 className="font-bold text-xl mb-1">Location</h3>
              <p className="text-gray-600">
                Kachi James Gallery<br />
                Enugu State, Nigeria
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <Clock className="w-7 h-7 text-black" />
            <div>
              <h3 className="font-bold text-xl mb-1">Opening Hours</h3>
              <p className="text-gray-600">
                Monday – Saturday<br />
                9:30 AM – 5:30 PM
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <Ticket className="w-7 h-7 text-black" />
            <div>
              <h3 className="font-bold text-xl mb-1">Admission</h3>
              <p className="text-gray-600">
                Free entry<br />
                Special exhibitions may require booking
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <Phone className="w-7 h-7 text-black" />
            <div>
              <h3 className="font-bold text-xl mb-1">Contact</h3>
              <p className="text-gray-600">+234 80 6852 8195</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl font-extrabold mb-6">Visitor Tips</h2>
          <ul className="space-y-4 text-gray-700">
            <li>• Arrive early for a quieter, more immersive experience</li>
            <li>• Photography allowed (no flash)</li>
            <li>• Guided tours available on request</li>
            <li>• Comfortable attire recommended</li>
          </ul>

          <button className="mt-10 w-full bg-black text-white py-4 rounded-md hover:bg-gray-800 transition">
            Book a Guided Tour
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className=" py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          We Look Forward to Welcoming You
        </h2>
        <p className="max-w-2xl mx-auto  mb-8">
          Discover powerful stories, bold expressions, and unforgettable
          artworks curated with passion.
        </p>
        <Link to="/exhibitions" className="px-8 py-4 bg-black text-white font-semibold rounded-md hover:bg-gray-200 transition">
          View Current Exhibitions
        </Link>
      </section>
    </div>
  );
}
