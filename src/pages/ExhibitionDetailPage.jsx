import { useParams, Link } from "react-router-dom";
import exhibitions from "../data/exhibitionsData.json";

const getStatus = (start, end) => {
  const now = new Date();
  if (now < new Date(start)) return "Upcoming";
  if (now > new Date(end)) return "Closed";
  return "Ongoing";
};

export default function ExhibitionDetailPage() {
  const { id } = useParams();
  const exhibition = exhibitions.find((ex) => ex.id === id);

  if (!exhibition) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Exhibition not found.
      </div>
    );
  }

  const status = getStatus(exhibition.startDate, exhibition.endDate);

  return (
    <main className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[75vh]">
        <img
          src={exhibition.image}
          alt={exhibition.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="absolute bottom-16 left-0 right-0">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <span
              className={`inline-block mb-4 px-4 py-1 text-xs font-semibold rounded-full
                ${
                  status === "Upcoming"
                    ? "bg-green-600"
                    : status === "Ongoing"
                    ? "bg-white text-black"
                    : "bg-gray-500"
                }`}
            >
              {status}
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-3">
              {exhibition.title}
            </h1>

            {exhibition.subtitle && (
              <p className="text-lg md:text-xl italic text-gray-200">
                {exhibition.subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        {/* META */}
        <div className="mb-12 text-gray-600 text-sm space-y-1">
          <p>
            <strong>Dates:</strong>{" "}
            {exhibition.startDate} – {exhibition.endDate}
          </p>
          {exhibition.location && (
            <p>
              <strong>Location:</strong> {exhibition.location}
            </p>
          )}
        </div>

        {/* CURATORIAL TEXT */}
        <article className="prose prose-lg max-w-none">
          <p>{exhibition.description}</p>
        </article>

        {/* CTA */}
        <div className="mt-20 flex justify-between items-center border-t pt-8">
          <Link
            to="/exhibitions"
            className="text-sm font-semibold text-green-700 hover:underline"
          >
            ← Back to Exhibitions
          </Link>

          <span className="text-xs text-gray-400">
            Kachi James Gallery
          </span>
        </div>
      </section>
    </main>
  );
}
