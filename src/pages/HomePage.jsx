// src/pages/HomePage.jsx
import React from "react";
import VideoHeroBackground from "../component/VideoHeroBackground";

export default function HomePage() {


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

            <div className="flex flex-col items-center justify-center h-100">
                <h1 className="">Welcome to Kachi Art Gallery</h1>
                <p>Home page....20%</p>
                <p>Powered by AI Movement LTD.</p>
            </div>
        </>
    );
}
