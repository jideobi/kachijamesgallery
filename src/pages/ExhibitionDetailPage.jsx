import React from 'react'
import { useParams, Link } from "react-router-dom";
import exhibitions from "../data/exhibitionsData.json";
function ExhibitionDetailPage() {
  const { id } = useParams();
  const exhibition = exhibitions.find((ex) => ex.id === id);

  if (!exhibition) {
    return <div className="p-20 text-center">Exhibition not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <img
        src={exhibition.image}
        alt={exhibition.title}
        className="w-full h-[70vh] object-cover"
      />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">{exhibition.title}</h1>
        <p className="text-gray-500 mb-6">{exhibition.date}</p>
        <p className="text-lg leading-relaxed">
          {exhibition.description}
        </p>

        <Link
          to="/"
          className="inline-block mt-10 text-green-600 font-semibold"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ExhibitionDetailPage