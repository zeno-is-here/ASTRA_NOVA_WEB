import React from "react";
import about from "../assets/about.jpg";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./motionVariants";

const About = () => {
    return (
        <>
            <div
                class="text-white px-4 lg:px-0 flex flex-row mt-28"
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
                            <h1 class=" sm:text-[34px] lg:text-8xl mb-4 font-normal leading-5 text-gray-200 text-right mr-28">
                                What are the <br />
                                Deviants?
                            </h1>
                        </motion.span>
                    </div>
                    <div className="flex flex-col mt-20 w-5/6 items-righttext-right ml-auto mr-28">
                        <div class="lg:flex-grow w-full  flex flex-col lg:items-start md:text-left items-center text-right">
                            <div className="flex flex-row w-full">
                                <div class="flex flex-start place-items-start mb-10 lg:mb-0 w-1/2   w-3/5">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        className=" z-10  w-full p-6"
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
                                    className="w-2/5 p-4"
                                >
                                    <p className="mb-8 text-gray-300 text-base">
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
                                    <div class="flex justify-left items-left w-full p-4">
                                        <button
                                            type="button"
                                            className=" w-[200px] inline-flex items-center justify-center py-3  border border-transparent text-base font-semibold rounded-md shadow-sm text-white bg-teal-500 hover:bg-teal-600 hover:ease-in-out duration-500"
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
