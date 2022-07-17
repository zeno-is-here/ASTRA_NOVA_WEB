import React from "react";
import first from "../assets/girl.png";
import portal from "../utils/portal.jpg";
import devi1 from "../utils/devi1.jpg";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./motionVariants";

const MidSection = () => {
    return (
        <div className="w-full py-8 flex flex-row mt-40" data-scroll-section>
            <div
                // style={{"opacity: 1;transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;"}}
                className="background-pattern0"
            ></div>
            <div
                // style={{"opacity: 1;transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;"}}
                className="background-pattern"
            ></div>

            <div className="max-w-[1340px] mx-auto text-center flex flex-col">
                <h1 class=" sm:text-[34px] lg:text-8xl mt-8 font-normal leading-10 text-gray-300  pl-80 pr-40 text-right">
                    The End was just the Beginning.
                </h1>

                <div className="max-w-full sm:mx-[50px] md:mx-[100px] lg:mx-[220px] my-8 flex flex-row mt-20">
                    <div className="mid w-2/3 px-4">
                        <img
                            class="object-cover object-center rounded sm:w-[300px] sm:h-[300px] lg:w-[450px] lg:h-[550px]"
                            alt="hero"
                            src={portal}
                        />
                    </div>
                    <div className="last w-1/2">
                        <p className=" text-gray-300 text-base font-normal leading-6 text-right ">
                            The Five Worlds lie in ruin, casualties of a
                            celestial warbetween order and chaos. The Day of
                            Destruction claimed many lives-but there were some
                            who survived. Those brave enough to enter the
                            ancient gateways were transported to the last
                            bastion of hope in the universe: Astra Nova.
                        </p>
                    </div>
                </div>
                {/* <div className="flex justify-center gap-6 items-center flex-col sm:flex-col md:flex-row md:gap-5 lg:flex-row lg:justfy-center lg:gap-5 my-8 mx-6">
                    <img
                        class="object-cover object-center rounded sm:w-[300px] sm:h-[300px] w-[250px] h-[250px]"
                        alt="hero"
                        src={first}
                    />
                    <img
                        class="object-cover object-center rounded sm:w-[300px] sm:h-[300px] w-[250px] h-[250px]"
                        alt="hero"
                        src={first}
                    />
                </div> */}
                <div className="w-full">
                    <div
                        // style={{"opacity: 1;transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;"}}
                        className="background-pattern1"
                    ></div>
                    <div
                        // style={{"opacity: 1;transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;"}}
                        className="background-pattern2"
                    ></div>
                    <motion.span variants={fadeIn()}>
                        <h1 class="w-4/5 ml-32 sm:text-[34px] lg:text-8xl text-left font-normal mt-40 text-gray-300">
                            The Fate of the Universe is in your Hands.
                        </h1>
                    </motion.span>
                    <motion.div
                        variants={staggerContainer}
                        initial="inital"
                        animate="animate"
                        className="w-4/5  mx-auto text-center flex flex-row"
                    >
                        <div className="first w-1/2 flex flex-col">
                            <div className="w-4/5 text-left  my-8">
                                <motion.span variants={fadeIn()}>
                                    <p className="text-base text-gray-300 font-normal leading-6 my-4 ">
                                        <span className="text-lg italic font-light">
                                            Even on Astra Nova, survival is no
                                            guarantee.
                                        </span>
                                        <br /> <br />
                                        For this safe haven harbors deep
                                        secrets, old rivalries threaten to upset
                                        the new order, and agents of the
                                        darkness lurk around every corner
                                        Together, those who remain must work
                                        together to restore their trust, recover
                                        what was lost, and rebuild the world to
                                        come - before it's too late.
                                    </p>
                                </motion.span>
                            </div>
                            {/* <div className="bottomImage">
                                <img
                                    class="object-cover object-center rounded sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[700px]"
                                    alt="hero"
                                    src={devi1}
                                />
                            </div> */}
                        </div>
                        <div className="second w-1/2  p-4">
                            <img
                                class="object-cover object-center rounded sm:w-[300px] sm:h-[300px] lg:w-[450px] lg:h-[550px]"
                                alt="hero"
                                src={devi1}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="w-[3%] h-[500px] blur-[35px] bg-[#c4410d] opacity-[0.35] rounded-[100%] pt-20 z-50"></div>
        </div>
    );
};

export default MidSection;
