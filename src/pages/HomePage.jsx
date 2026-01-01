// src/pages/HomePage.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import exhibitions from "../data/exhibitionsData.json";
import artworks from "../data/galleryData.json"
import VideoHeroBackground from "../component/VideoHeroBackground";
//import EmailSubscriptionForm from "./EmailSubscriptionForm";


const getStatus = (date) =>
    new Date(date) > new Date() ? "Upcoming" : "Closed";
export default function HomePage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4);
    const Artworks = artworks.slice(0, 4)

    // Handle responsiveness
    useEffect(() => {
        const updateSlides = () => {
            if (window.innerWidth < 640) setSlidesToShow(1);
            else if (window.innerWidth < 768) setSlidesToShow(2);
            else if (window.innerWidth < 1024) setSlidesToShow(3);
            else setSlidesToShow(4);
        };

        updateSlides();
        window.addEventListener("resize", updateSlides);
        return () => window.removeEventListener("resize", updateSlides);
    }, []);

    // 👉 AUTO SLIDE
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev + slidesToShow >= exhibitions.length ? 0 : prev + slidesToShow
            );
        }, 10000); // 5 seconds

        return () => clearInterval(interval);
    }, [slidesToShow]);

    const next = () =>
        setCurrentIndex((prev) =>
            prev + slidesToShow >= exhibitions.length ? 0 : prev + slidesToShow
        );

    const prev = () =>
        setCurrentIndex((prev) =>
            prev === 0
                ? Math.max(exhibitions.length - slidesToShow, 0)
                : prev - slidesToShow
        );



    return (
        < >
            <VideoHeroBackground />
            <div className="md:grid-cols-2 gap-3 md:grid lg:flex mx-2 mt-8 lg:gap-60 items-center justify-center  md:mx-8 xl:mx-40  p-4">
                <div>
                    <h1 className="font-extrabold text-3xl md:text-6xl mb-4">Welcome</h1>
                    <p className=" font-bold mb-4">Explore art and ideas at Kachi James Gallery</p>
                </div>
                <div>
                    <p className=" pb-5">The gallery is open 19:30pm - 5:30pm. today</p>
                    <p className="p-2 text-center font-bold bg-black text-white w-[50%]">Plan your visit</p>
                </div>
            </div>
            <div className="border-b-3  mx-4 sm:mx-8 md:mx-14 lg:mx-20 xl:mx-28"></div>

            {/* <div className="border-b-3 mx-6 md:mx-14 lg:mx-20 xl:mx-35"></div> */}



            {/* events */}

            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold">Exhibitions</h2>

                        <div className="space-x-4">
                            <button onClick={prev} className="px-4 py-2 border">‹</button>
                            <button onClick={next} className="px-4 py-2 border">›</button>
                        </div>
                    </div>

                    <div className="overflow-hidden ">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                                transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
                            }}
                        >
                            {exhibitions.map((ex) => (
                                <div
                                    key={ex.id}
                                    className="px-3"
                                    style={{ minWidth: `${100 / slidesToShow}%` }}
                                >
                                    <div className="relative group rounded-xl overflow-hidden shadow-lg">
                                        <img
                                            src={ex.image}
                                            alt={ex.title}
                                            className="h-72 w-full object-cover group-hover:scale-105 transition"
                                        />

                                        <span
                                            className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full ${getStatus(ex.date) === "Upcoming"
                                                ? "bg-green-600 text-white"
                                                : "bg-gray-800 text-white"
                                                }`}
                                        >
                                            {getStatus(ex.date)}
                                        </span>

                                        <div className="p-4 bg-white">
                                            <h3 className="font-semibold text-lg">{ex.title}</h3>
                                            <p className="text-sm text-gray-500">{ex.date}</p>
                                            <Link
                                                to={`/exhibitions/${ex.id}`}
                                                className="inline-block mt-3 text-sm font-semibold text-green-600"
                                            >
                                                View Exhibition →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* events end */}

            <div className="bg-black md:flex justify-center md:px-28 py-16 gap-20">
                <div className="md:w-[35%] px-4 md:px-0">
                    <h1 className="font-extrabold text-3xl md:text-6xl mb-4 text-white">Artist</h1>
                    <p className=" mb-4 text-white md:text-[20px]">Visit our contemporary art gallery in Enugu State Nigeria for boundary-breaking ideas and experimental art.</p>
                </div>
                <div className="mx-4">
                    <img
                        src="https://i.ibb.co/vxSq6zx3/IMG-4375.avif"
                        alt="Artwork"
                        className=" h-100 w-200 object-cover rounded"
                    />
                </div>
            </div>



            {/* artworks */}
            <section className="w-full py-20 flex justify-center flex-col md:flex-row ">

                {/* LEFT SECTION */}
                <div className="py-10 md:py-0 mx-4">
                    <h2 className="text-4xl mb-4 font-extrabold">Art and Artists <br /> In our Collection</h2>


                    <p className="text-gray-600 leading-relaxed text-[19px] mb-6 w-[70%]">
                        Discover artworks that speak to you, from the 1980s to today.

                    </p>

                    <button className="mt-4 px-6 py-3 rounded-md bg-black text-white hover:bg-gray-800 transition">
                        Find your favorites
                    </button>
                </div>

                {/* RIGHT SECTION - GRID OF WORKS */}
                <div className="grid lg:grid-cols-3 gap-6 mx-4">
                    {Artworks.map((art) => (
                        <div key={art.id} className="group relative rounded-lg overflow-hidden shadow-lg">

                            <img
                                src={art.img}
                                alt={art.title}
                                className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
                            />

                            <div className="p-3 bg-white">
                                <h4 className="font-bold">{art.title}</h4>
                                <p className="text-sm text-gray-500">{art.artist}</p>

                                {/* <a href={`/artworks/${art.id}`}>
                                    <button className="mt-2 text-sm px-4 py-1 border rounded-full hover:bg-black hover:text-white transition">
                                        Preview
                                    </button>
                                </a> */}
                                <Link
                                    to={`/artworks/${art.id}`}
                                    className="inline-block mt-3 text-sm font-semibold text-green-600"
                                >
                                    View more →
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>

            </section>


            {/* <section className="bg-[#111] text-white mb-20 py-20 px-6 md:px-20 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Stay Inspired</h2>
                <p className="text-gray-300 md:w-[55%] mx-auto text-[18px] leading-relaxed mb-8">
                    Join thousands of art lovers. Receive exhibition invites, artwork releases,
                    and exclusive gallery updates directly from Kachi James Gallery.
                </p>

                <EmailSubscriptionForm />
            </section> */}


        </>
    );
}
