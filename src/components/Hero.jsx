import React from "react";

const Hero = () => {
    return (
        <div
            className="relative flex flex-col items-center justify-center h-[80vh] w-[80vw] mx-auto overflow-hidden -z-10"
            data-scroll-section
        >
            <video
                autoPlay
                loop
                muted
                className="absolute z-10 w-auto md:min-w-full md:min-h-full md:max-w-none w-screen xs:p-0 sm:p-0 md:p-10 lg:p-20 xl:p-20 p-0 xs:mb-40 sm:mb-40 md:mb-32 lg:mb-28 xl:mb-28"
            >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h3
                data-scroll
                className=" heading  text-white xs:mt-40 sm:mt-40 md:mt-96 lg:mt-96 xl:mt-96 mt-40 xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl text-xl font-sans xs:font-bold sm:font-bold md:font-bold lg:font-bold xl:font-bold font-bold tracking-wide text-center xs:pt-6 sm:pt-6 md:pt-12 lg:pt-16 xl:pt-16 pt-6"
            >
                A MetaRPG experience built on the blockchain, powered by the
                players.
            </h3>
        </div>
    );
};

export default Hero;
