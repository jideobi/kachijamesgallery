// src/pages/ArtPreview.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Artworks from "../data/galleryData.json"

export default function GalleryDetailPage() {
    const { id } = useParams();
    const artwork = Artworks.find((item) => item.id === Number(id));

    if (!artwork) return <h2 className="text-center py-20">Artwork Not Found</h2>;
    // Load likes from localStorage
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const likedItems = JSON.parse(localStorage.getItem("likedArtworks")) || [];
        setLiked(likedItems.includes(artwork.id));
    }, [artwork.id]);

    // Toggle like function
    const handleLike = () => {
        let likedItems = JSON.parse(localStorage.getItem("likedArtworks")) || [];

        if (liked) {
            likedItems = likedItems.filter(item => item !== artwork.id); // remove like
        } else {
            likedItems.push(artwork.id); // add like
        }

        localStorage.setItem("likedArtworks", JSON.stringify(likedItems));
        setLiked(!liked);
    };

    return (
        <div className="min-h-screen bg-[#fafafa]  pt-24 pb-16 px-6 md:px-16">

            {/* Back button */}
            <Link to="/" className="text-gray-700 hover:text-black underline mb-8 inline-block">
                ← Back to Gallery
            </Link>

            <div className="grid md:grid-cols-2 gap-10 items-start">

                {/* ART IMAGE */}
                <div className="w-full">
                    <img
                        src={artwork.img}
                        alt={artwork.title}
                        className="rounded-xl shadow-lg w-full max-h-[550px] object-cover"
                    />
                </div>

                {/* DETAILS */}
                <div>
                    <h1 className="text-4xl font-bold mb-3">{artwork.title}</h1>
                    <h3 className="text-xl text-gray-600 mb-5">By {artwork.artist}</h3>

                    <p className="leading-relaxed text-gray-700 mb-6">
                        {artwork.description ||
                            "This artwork expresses layers of emotions and deep creative perspective. It embodies culture, beauty, and modern artistic vision, capturing the soul of contemporary art."}
                    </p>

                    <div className="space-y-2 mb-8">
                        <p><span className="font-semibold">Year:</span> {artwork.year || "2024"}</p>
                        <p><span className="font-semibold">Medium:</span> {artwork.medium || "Oil on Canvas"}</p>
                        <p><span className="font-semibold">Size:</span> {artwork.size || "120cm × 90cm"}</p>
                    </div>

                    <button
                        onClick={handleLike}
                        className={`px-6 py-3 rounded-md border transition flex items-center gap-2
    ${liked ? "bg-green-500 text-white border-green-500" : "bg-white text-black border-gray-400 hover:bg-black hover:text-white"}`}
                    >
                        {liked ? "♥ Liked" : "♡ Like"}
                    </button>
                </div>
            </div>

            {/* RELATED ARTWORKS */}
            <div className="mt-20">
                <h2 className="text-3xl font-extrabold mb-6">More Works You May Like</h2>

                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
                    {Artworks.slice(0, 4).map((item) => (
                        <Link key={item.id} to={`/preview/${item.id}`}>
                            <div className="group">
                                <img
                                    src={item.img}
                                    className="w-full h-48 rounded-lg object-cover group-hover:scale-105 duration-300"
                                />
                                <h4 className="font-semibold mt-2">{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.artist}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
}
