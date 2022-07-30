import React from "react";
import about from "../assets/deviants.png";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./motionVariants";

const About = () => {
  return (
    <>
      <div
        className="text-white max-w-full mx-auto lg:px-0 flex flex-row xs:mt-0 sm:mt-0 md:mt-0 lg:mt-8xl:mt-0 mt-0"
        data-scroll-section
      >
        <div
          // style={{"opacity: 1;transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;"}}
          className="background-pattern3 hidden md:block"
        ></div>
        <div
          // style={{"opacity: 1;transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;"}}
          className="background-pattern4 hidden md:block"
        ></div>
        {/* <div className="w-[3%] h-[500px] blur-[40px] bg-[#0370c3] opacity-[0.35] rounded-[100%] "></div> */}

        <motion.div
          variants={staggerContainer}
          animate="animate"
          initial="initial"
          className="min-w-full mx-auto text-center flex flex-col lg:flex-col md:mb-10 md:mt-10"
        >
          <div>
            <motion.span variants={fadeIn()}>
              <h1
                data-scroll
                className="tk-roma font-title mid-head3 xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl text-4xl  mt-8 font-bold leading-tight text-teal-300  xs:pl-5 sm:pl-5 md:pl-24 lg:pl-36 xl:pl-80 md:pr-[10vw] sm:pr-[10vw] md:pr-[10vw] lg:pr-[10vw] xl:pr-[10vw] md:pr-[10vw] xs:text-center sm:text-center md:text-right lg:text-right xl:text-right text-center"
              >
                Meet the Deviants
              </h1>
            </motion.span>
          </div>
          <div className="flex flex-col xs:mt-12 sm:mt-12 md:mt-12 lg:mt-10 xl:mt-10 mt-12 xs:w-full sm:w-full md:w-full lg:w-full xl:w-full w-full items-righttext-right ml-auto ">
            <div className="lg:flex-grow w-full  flex flex-col lg:items-start md:text-left items-center text-right">
              <div className="max-w-full sm:mr-[50px] md:mr-[10vw] lg:mr-[10vw] my-8 flex mt-16 sm:flex-col xs:flex-col md:flex-col lg:flex-row xl:flex-row flex-col">
                <div className="flex flex-start place-items-start mb-10 lg:mb-0 xs:w-full sm:w-full md:w-full lg:w-2/3 xl:w-2/3 w-full xs:pr-0 sm:pr-0 md:pr-0 lg:pr-0 xl:pr-0 pr-0 ">
                  {/* Looping video goes here */}
                  <img
                    data-scroll
                    className="rounded-xl object-cover object-center mid-img3 z-10 xs:w-full sm:w-full md:w-full lg:w-full xl:w-full w-full xs:p-0 sm:p-0 md:p-0 lg:p-0 xl:p-0 p-0 ml-auto -mt-2"
                    alt="hero"
                    src={about}
                  />
                  {/* <video
                                        autoPlay
                                        loop
                                        muted
                                        data-scroll
                                        className="mid-img3 z-10 xs:w-full sm:w-4/5 md:w-4/5 lg:w-full xl:w-full w-full xs:p-0 sm:p-0 md:p-6 lg:p-6 xl:p-6 p-0 ml-auto"
                                    >
                                        <source
                                            src="/video.mp4"
                                            type="video/mp4"
                                        />
                                        Your browser does not support the video
                                        tag.
                                    </video> */}
                  {/* Looping video ends here */}
                </div>
                <motion.span
                  variants={fadeIn()}
                  className="xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 w-full xs:mt-0 sm:mt-0 md:mt-10 lg:mt-0 xl:mt-0 mt-10 xs:p-6 sm:p-6 md:p-6 lg:p-0 xl:p-0 p-6 xs:p-4 sm:p-4 md:p-0 lg:p-0 xl:p-0 p-4 xs:pl-16 sm:pl-16 md:pl-16 lg:pl-16 xl:pl-16 pl-0 xs:pr-4 sm:pr-8 md:pr-12 lg:pr-0 xl:pr-0 pr-4"
                >
                  <p
                    data-scroll
                    className="mid-text3 mb-8 text-gray-300 text-base ml-auto xs:w-full sm:w-full md:w-2/3 lg:w-full xl:w-full w-full xs:ml-auto sm:ml-auto md:ml-auto lg:ml-auto lg:mr-auto xl:ml-auto xl:mr-auto xs:p-4 sm:p-4 md:p-0 lg:p-4 xl:p-0 p-4 xs:pl-4 sm:pl-4 md:pl-16 lg:pl-0 xl:pl-0 pl-4 xs:text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm text-sm xs:text-right sm:text-right md:text-right lg:text-left xl:text-left xs:text-left sm:text-center md:text-right lg:text-left xl:text-left text-left"
                  >
                    <span className="font-bold text-1xl">The Deviants are the first inhabitants of Astra Nova.</span><br/><br/>
                    They're perfect genetic replicants of the 15 species of the
                    Five Worlds, created to test the habitability of AstraNova.<br/><br/>
                    But to account for every possibility, the creators packed
                    these mischievous miniatures with thousands of genetic
                    deviations—and got much more than they bargained for.
                    <br />
                    <br />
                    There are 10,000 unique Deviant non-fungible tokens (NFTs)
                    that will reside on the Ethereum network.<br/><br/> Each Deviant
                    offers a first glimpse into the worlds of Astra Nova and
                    unlocks exclusive lore and in-game features. <br/><br/>Follow the
                    Deviant Trials on our Discord, or mint your own Deviant
                    below.
                  </p>
                  <div className="flex xs:justify-center xs:items-center sm:items-left sm:justify-left md:items-left md:justify-left lg:items-left lg:justify-left xl:items-left xl:justify-left justify-left items-left w-full flex flex-col">
                    <button
                      type="button"
                      className=" disabled animate-pulse cursor-not-allowed w-[200px] inline-flex items-center justify-center py-3  border border-transparent text-base font-semibold rounded-md shadow-sm text-white bg-[#c4400d] hover:bg-teal-600 hover:ease-in-out duration-500 xs:m-auto  sm:m-auto  md:ml-auto lg:ml-0 xl:ml-0 ml-auto md:mr-0 lg:mr-0 xl:mr-0 mr-auto "
                    >
                      Coming Soon
                    </button>
                    {/* <span className="animate-pulse text-gray-300 mt-4 text-sm xs:text-center sm:text-center md:text-left lg:text-left xl:text-left text-center">
                      * Coming Soon
                    </span> */}
                  </div>
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
