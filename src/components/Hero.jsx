import React from "react";

const Hero = () => {
    return (
        <div
            className="relative flex items-center justify-center h-[80vh] w-[80vw] mx-auto overflow-hidden -z-10"
            data-scroll-section
        >
            <video
                autoPlay
                loop
                muted
                className="absolute z-10 w-auto md:min-w-full md:min-h-full md:max-w-none "
            >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Hero;
