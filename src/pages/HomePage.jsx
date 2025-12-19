// src/pages/HomePage.jsx
import React from "react";
import VideoHeroBackground from "../component/VideoHeroBackground";

export default function HomePage() {


    return (
        < >
        <VideoHeroBackground />
            <div className="flex flex-col items-center justify-center h-100">
                <h1 className="">Welcome to Kachi Art Gallery</h1>
                <p>Home page....20%</p>
                <p>Powered by AI Movement LTD.</p>
            </div>
        </>
    );
}
