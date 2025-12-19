import React from "react";
import { motion } from "framer-motion";

export default function VideoHeroBackground() {
    return (
        <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
            {/* YouTube Video Background */}
            <iframe
                className="absolute top-1/2 left-1/2 w-[120%]  h-[170%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                src="https://www.youtube.com/embed/PwYewBMlkJw?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=PwYewBMlkJw"
                title="Background Video"
                frameBorder="0"
                allow="autoplay; fullscreen"
            ></iframe>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-white max-w-3xl"
                >
                    <h1 className="text-2xl md:text-6xl font-bold mb-6">
                        Kachi James Gallery <br />
                        Experience Art Beyond the Canvas
                    </h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-[12px] md:text-xl opacity-90"
                    >
                        Discover exhibitions, artists, and stories that shape culture and
                        creativity.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}
