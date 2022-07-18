import React from "react";
import about from "../assets/about.jpg";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./motionVariants";

const About = () => {
    return (
        <>
            <div
                class="text-white  lg:px-0 flex flex-row xs:mt-0 sm:mt-0 md:mt-20 lg:mt-28 xl:mt-28 mt-0"
                data-scroll-section
            >
                <div
                    // style={{"opacity: 1;transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;"}}
                    className="background-pattern3"
                ></div>
                <div
                    // style={{"opacity: 1;transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;"}}
                    className="background-pattern4"
                ></div>
                <div className="w-[3%] h-[500px] blur-[40px] bg-[#0370c3] opacity-[0.35] rounded-[100%] "></div>

                <motion.div
                    variants={staggerContainer}
                    animate="animate"
                    initial="initial"
                    class="max-w-[1240px] mx-auto text-center flex flex-col lg:flex-col mb-20 mt-20"
                >
                    <div>
                        <motion.span variants={fadeIn()}>
                            <h1
                                data-scroll
                                class="mid-head3 xs:text-4xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-8xl text-4xl  mt-8 font-normal leading-tight text-gray-300 xs:pl-5 sm:pl-5 md:pl-24 lg:pl-36 xl:pl-80 xs:pr-0 sm:pr-0 md:pr-20 lg:pr-40 xl:pr-40 pr-0 xs:text-center sm:text-center md:text-right lg:text-right xl:text-right text-center"
                            >
                                What are the Deviants?
                            </h1>
                        </motion.span>
                    </div>
                    <div className="flex flex-col xs:mt-12 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-20 mt-12 xs:w-full sm:w-full md:w-full lg:w-full xl:w-full w-full items-righttext-right ml-auto mr-28">
                        <div class="lg:flex-grow w-full  flex flex-col lg:items-start md:text-left items-center text-right">
                            <div className="flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-col w-full">
                                <div class="flex flex-start place-items-start mb-10 lg:mb-0 xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 w-full xs:pr-0 sm:pr-5 md:pr-12 lg:pr-0 xl:pr-0 pr-0 ">
                                    <video
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
                                    </video>
                                </div>
                                <motion.span
                                    variants={fadeIn()}
                                    className="xs:w-full sm:w-full md:w-full lg:w-2/5 xl:w-2/5 w-full xs:mt-10 sm:mt-10 md:mt-10 lg:mt-0 xl:mt-0 mt-10 xs:p-6 sm:p-6 md:p-6 lg:p-0 xl:p-0 p-6 xs:pr-4 sm:pr-8 md:pr-12 lg:pr-0 xl:pr-0 pr-4"
                                >
                                    <p
                                        data-scroll
                                        className="mid-text3 mb-8 text-gray-300 text-base ml-auto xs:w-full sm:w-full md:w-2/3 lg:w-full xl:w-full w-full xs:ml-auto sm:ml-auto md:ml-auto lg:ml-auto lg:mr-auto xl:ml-auto xl:mr-auto xs:p-4 sm:p-4 md:p-0 lg:p-4 xl:p-4 p-4 xs:pl-4 sm:pl-4 md:pl-16 lg:pl-0 xl:pl-0 pl-4 xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-base text-sm xs:text-right sm:text-right md:text-right lg:text-left xl:text-left xs:text-center sm:text-center md:text-right lg:text-left xl:text-left text-center"
                                    >
                                        The Deviants are the first inhabitants
                                        of Astra Nova. They're perfect genetic
                                        replicants of the 15 species of the Five
                                        Worlds, created to test the habitability
                                        of AstraNova. But to account for all
                                        possibilities, the creators packed these
                                        mischievous miniatures with thousands of
                                        genotypic and phenotypic deviations-and
                                        got much more than they bargained for.
                                        <br />
                                        <br />
                                        There are 10,000 unique Deviant
                                        non-fungible tokens (NFTs) that will
                                        reside on the Ethereum network. Each
                                        Deviant offers a first glimpse into the
                                        worlds of Astra Nova and unlocks
                                        exclusive lore and in-game features.
                                        Follow the Deviant Trials on our
                                        Discord, or mint your own Deviant below.
                                    </p>
                                    <div class="flex justify-left items-left w-full">
                                        <button
                                            type="button"
                                            className=" w-1/3 inline-flex items-center justify-center py-3  border border-transparent text-base font-semibold rounded-md shadow-sm text-white bg-teal-500 hover:bg-teal-600 hover:ease-in-out duration-500 xs:m-auto  sm:m-auto  md:ml-auto lg:ml-0 xl:ml-0 ml-auto md:mr-0 lg:mr-0 xl:mr-0 mr-auto mr-4 "
                                        >
                                            Deviate Now
                                        </button>
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
