// src/pages/SearchResults.jsx
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

// Import local JSON data
import galleryData from "../data/galleryData.json";
import exhibitionData from "../data/exhibitionsData.json";
import eventData from "../data/eventsData.json";

// Helper function to highlight search query
const highlightText = (text, query) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, index) =>
    regex.test(part) ? (
      <span key={index} className="bg-yellow-200">{part}</span>
    ) : (
      part
    )
  );
};

export default function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query")?.toLowerCase() || "";

  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const [filteredExhibitions, setFilteredExhibitions] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

useEffect(() => {
  if (!searchQuery) return;
    if (!searchQuery || searchQuery.length < 2) {
    setFilteredArtworks([]);
    setFilteredExhibitions([]);
    setFilteredEvents([]);
    return;
  }

  setFilteredArtworks(
    galleryData.filter((art) =>
      (art.title || "").toLowerCase().includes(searchQuery) ||
      (art.artist || "").toLowerCase().includes(searchQuery)
    )
  );

  setFilteredExhibitions(
    exhibitionData.filter((ex) =>
      (ex.title || "").toLowerCase().includes(searchQuery)
    )
  );

  setFilteredEvents(
    eventData.filter((ev) =>
      (ev.title || "").toLowerCase().includes(searchQuery)
    )
  );
}, [searchQuery]);


  return (
    <div className="min-h-screen bg-white py-24 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Search Results for: <br /> <span className="text-green-600">{searchQuery}</span>
      </h1>

      {/* Artworks */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Artworks</h2>
        {filteredArtworks.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {filteredArtworks.map((art) => (
              <div key={art.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                <div className="bg-gray-200 h-40 mb-4 flex items-center justify-center rounded">
                  {art.image ? <img src={art.image} alt={art.title} className="h-full w-full object-cover rounded" /> : <span className="opacity-70">Artwork Visual</span>}
                </div>
                <h3 className="font-bold text-lg">{highlightText(art.title, searchQuery)}</h3>
                <p className="text-gray-600">{highlightText(art.artist, searchQuery)}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No artworks found.</p>
        )}
      </section>

      {/* Exhibitions */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Exhibitions</h2>
        {filteredExhibitions.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredExhibitions.map((ex) => (
              <div key={ex.id} className=" rounded-lg p-4 shadow hover:shadow-lg transition">
                <img src={ex.image} alt={ex.title} width={200} height={200}/>
                <h3 className="font-bold text-lg">{highlightText(ex.title, searchQuery)}</h3>
                <p className="text-gray-500">{ex.date}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No exhibitions found.</p>
        )}
      </section>

      {/* Events */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Events</h2>
        {filteredEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredEvents.map((ev) => (
              <div key={ev.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg">{highlightText(ev.title, searchQuery)}</h3>
                <p className="text-gray-500">{ev.type}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No events found.</p>
        )}
      </section>

      <div className="text-center mt-12">
        <Link to="/" className="text-green-600 font-semibold hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
