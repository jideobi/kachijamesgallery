import { Link } from "react-router-dom";
import exhibitions from "../data/exhibitionsData.json";

const getStatus = (start, end) => {
  const now = new Date();
  if (now < new Date(start)) return "Upcoming";
  if (now > new Date(end)) return "Closed";
  return "Ongoing";
};

export default function ExhibitionsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] pt-28 pb-20 px-6 md:px-16">
      
      {/* PAGE HEADER */}
      <header className="max-w-6xl mx-auto mb-20">
        <h1 className="text-5xl font-extrabold mb-6">Exhibitions</h1>
        <p className="text-gray-600 text-lg max-w-2xl">
          Discover curated exhibitions that explore contemporary art,
          cultural narratives, and experimental practices.
        </p>
      </header>

      {/* EXHIBITION GRID */}
      <section className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2">
        {exhibitions.map((ex) => {
          const status = getStatus(ex.startDate, ex.endDate);

          return (
            <article
              key={ex.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={ex.image}
                  alt={ex.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                />

                {/* STATUS BADGE */}
                <span
                  className={`absolute top-6 left-6 px-4 py-1 text-xs font-semibold rounded-full
                    ${
                      status === "Upcoming"
                        ? "bg-green-600 text-white"
                        : status === "Ongoing"
                        ? "bg-black text-white"
                        : "bg-gray-600 text-white"
                    }`}
                >
                  {status}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-1">{ex.title}</h2>
                <p className="italic text-gray-500 mb-4">{ex.subtitle}</p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {ex.description}
                </p>

                <div className="text-sm text-gray-600 mb-6">
                  <p>
                    <strong>Dates:</strong>{" "}
                    {ex.startDate} – {ex.endDate}
                  </p>
                  <p>
                    <strong>Location:</strong> {ex.location}
                  </p>
                </div>

                <Link
                  to={`/exhibitions/${ex.id}`}
                  className="inline-block text-sm font-semibold text-green-700 hover:underline"
                >
                  View Exhibition →
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}