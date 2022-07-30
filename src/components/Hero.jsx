import React from "react";
import useWindowSize from "../hooks/responsive";
const Hero = () => {
  const size = useWindowSize();
  return (
    <div
      className="relative flex flex-col items-center justify-center md:h-[70vh] w-[80vw] mx-auto overflow-hidden -z-10"
      data-scroll-section
    >
      {size.width <= 767 && (
       <><video
          autoPlay
          loop
          muted
          playsinline
          className="absolute z-10 w-auto md:min-w-full md:min-h-full md:max-w-none w-screen xs:p-0 sm:p-0 md:p-10 lg:p-20 xl:p-20 p-0 mb-32"
        >
          <source src="/video-mobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
              <h3
              data-scroll
              className=" heading z-20 text-white xs:mt-24 sm:mt-40 md:mt-40 lg:mt-64 xl:mt-64 mt-40 xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl text-xl font-sans xs:font-bold sm:font-bold md:font-bold lg:font-bold xl:font-bold font-bold tracking-wide text-center xs:pt-6 sm:pt-6 md:pt-8 lg:pt-8 xl:pt-8 pt-6"
            >
              A MetaRPG experience<br/> built on the blockchain,<br/> powered by the players.
            </h3></> 
      )} {size.width > 767 &&(
        <><video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto md:min-w-full md:min-h-full md:max-w-none w-screen xs:p-0 sm:p-0 md:p-10 lg:p-20 xl:p-20 p-0"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
              <h3
              data-scroll
              className=" heading z-20 text-white xs:mt-24 sm:mt-40 md:mt-40 lg:mt-64 xl:mt-64 mt-40 xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl text-xl font-sans xs:font-bold sm:font-bold md:font-bold lg:font-bold xl:font-bold font-bold tracking-wide text-center xs:pt-6 sm:pt-6 md:pt-8 lg:pt-8 xl:pt-8 pt-6"
            >
              A MetaRPG experience built on the blockchain, powered by the players.
            </h3></>
      )}

    </div>
  );
};

export default Hero;
