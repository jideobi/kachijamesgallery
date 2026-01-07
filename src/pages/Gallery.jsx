// src/pages/GalleryPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import artworks from "../data/galleryData.json";

export default function GalleryPage() {
  const [activeArtist, setActiveArtist] = useState("All");

  const artists = ["All", ...new Set(artworks.map((art) => art.artist))];

  const filteredArtworks =
    activeArtist === "All"
      ? artworks
      : artworks.filter((art) => art.artist === activeArtist);

  return (
    <main className="min-h-screen bg-[#fafafa] pt-28 pb-20 px-6 md:px-14">
      
      {/* PAGE HEADER */}
      <header className="max-w-7xl mx-auto mb-16">
        <h1 className="text-5xl font-extrabold mb-4">Gallery Collection</h1>
        <p className="text-gray-600 max-w-2xl text-lg">
          Explore a curated selection of contemporary artworks from emerging
          and established artists across Africa and beyond.
        </p>
      </header>

      {/* FILTER BAR */}
      <section className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-3">
          {artists.map((artist) => (
            <button
              key={artist}
              onClick={() => setActiveArtist(artist)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  activeArtist === artist
                    ? "bg-black text-white"
                    : "bg-white border hover:bg-gray-100"
                }`}
            >
              {artist}
            </button>
          ))}
        </div>
      </section>

      {/* ARTWORK GRID */}
      <section className="max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredArtworks.map((art) => (
            <Link
              to={`/artworks/${art.id}`}
              key={art.id}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-md">
                
                {/* IMAGE */}
                <img
                  src={art.img}
                  alt={art.title}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition" />

                {/* INFO */}
                <div className="p-4">
                  <h3 className="font-bold text-lg">{art.title}</h3>
                  <p className="text-sm text-gray-500">{art.artist}</p>
                </div>

                {/* VIEW BUTTON */}
                <span className="absolute bottom-4 right-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition">
                  View Artwork →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredArtworks.length === 0 && (
          <p className="text-center text-gray-500 mt-20">
            No artworks found for this artist.
          </p>
        )}
      </section>
    </main>
  );
}
