// src/pages/HomePage.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const featuredExhibitions = [
    { id: 1, title: "Ruth Asawa: A Retrospective", date: "Feb 7, 2026", image: "https://i.ibb.co/bMjYBffW/image1.jpg" },
    { id: 2, title: "Ideas of Africa: Portraiture", date: "Jul 25, 2026", image: "https://i.ibb.co/bMjYBffW/image2.jpg" },
    { id: 3, title: "Wifredo Lam: When I Don’t Sleep, I Dream", date: "Apr 11, 2026", image: "https://i.ibb.co/bMjYBffW/image3.jpg" },
];

const featuredArts = [
    { id: 1, title: "The Starry Night", artist: "Vincent van Gogh", image: "https://i.ibb.co/bMjYBffW/image1.jpg" },
    { id: 2, title: "Dance (I)", artist: "Henri Matisse", image: "https://i.ibb.co/bMjYBffW/image2.jpg" },
    { id: 3, title: "The Dove", artist: "Romare Bearden", image: "https://i.ibb.co/bMjYBffW/image3.jpg" },
];

export default function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto slide carousel every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % featuredExhibitions.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const slideVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    };

    return (
        < >
            <div className="flex flex-col items-center justify-center h-150">
                <h1 className="">Welcome to Kachi Art Gallery</h1>
                <p>Home page....</p>
            </div>
        </>
    );
}
