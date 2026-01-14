import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* HERO SECTION */}
            <section className="relative bg-black text-white py-28 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        About Kachi James Gallery
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        A contemporary art space dedicated to bold ideas, emerging voices,
                        and meaningful cultural conversations.
                    </p>
                </div>
            </section>

            {/* INTRO */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Kachi James Gallery is a modern art gallery based in Enugu State,
                            Nigeria. We showcase contemporary artworks that challenge norms,
                            tell powerful stories, and celebrate African creativity.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our gallery brings together artists, collectors, and art lovers in
                            a space where ideas are exchanged freely and creativity thrives.
                        </p>
                    </div>

                    <div className="relative">
                        <img
                            src="https://i.ibb.co/nMkW9SDx/IMG-3015.avif"
                            alt="Gallery interior"
                            className="rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                    <div className="p-8 bg-white rounded-2xl shadow">
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-gray-700 leading-relaxed">
                            To support and promote artists by providing a platform for
                            innovative, experimental, and culturally significant artworks
                            while making art accessible to a global audience.
                        </p>
                    </div>

                    <div className="p-8 bg-white rounded-2xl shadow">
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-gray-700 leading-relaxed">
                            To become a leading contemporary art destination in Africa,
                            fostering creativity, collaboration, and cross-cultural dialogue
                            through art.
                        </p>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { title: "Creativity", desc: "Encouraging bold and original artistic expression." },
                            { title: "Integrity", desc: "Honest curation and ethical collaboration." },
                            { title: "Community", desc: "Building strong relationships through art." },
                            { title: "Excellence", desc: "Delivering world‑class artistic experiences." },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="p-6 text-center rounded-2xl border hover:shadow-lg transition"
                            >
                                <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-black text-white py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                        Experience Art Beyond the Ordinary
                    </h2>
                    <p className="text-gray-300 mb-8">
                        Visit our gallery, attend our exhibitions, and be part of a growing
                        creative movement.
                    </p>
                     <Link to="/planyourvisit" className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">  Plan Your Visit</Link>
                </div>
            </section>
        </div>
    );
}
