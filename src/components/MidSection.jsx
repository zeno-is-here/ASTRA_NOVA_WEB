import React from "react";
import portal from "../utils/AN-planet.jpg";
import devi1 from "../utils/devi1.jpg";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./motionVariants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MidSection = () => {
    // const tl = gsap.timeline();
    // const mid_text_1_ref = useRef(null);
    // useEffect(() => {
    //     const el = mid_text_1_ref.current;

    //     tl.fromTo(
    //         el,
    //         { opacity: 0, y: 70, delay: 1, ease: "power3.easeOut" },
    //         {
    //             opacity: 1,
    //             y: 0,
    //             duration: 2,
    //             scrollTrigger: {
    //                 trigger: el,
    //             },
    //             stagger: {
    //                 amount: 0.5,
    //             },
    //         }
    //     );
    // }, []);

    return (
        <div className="w-full py-8 flex flex-row md:mt-40" data-scroll-section>
            <div
                // style={{"opacity: 1;transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;"}}
                className="background-pattern0"
            ></div>
            <div
                // style={{"opacity: 1;transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;"}}
                className="background-pattern hidden md:block"
            ></div>

            <div className="max-w-[1340px] mx-auto text-center flex flex-col ">
                <h1
                    className="mid-head1 xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl text-4xl  mt-8 font-normal leading-tight text-teal-300 xs:pl-5 sm:pl-5 md:pl-24 lg:pl-36 xl:pl-80 md:pr-5 sm:pr-5 md:pr-20 lg:pr-40 xl:pr-40 md:pr-5 md:text-right"
                    data-scroll
                >
                    The end was just the beginning.
                </h1>

                <div className="max-w-full sm:mx-[50px] md:mx-[100px] lg:mx-[170px] my-8 flex mt-16 sm:flex-col xs:flex-col md:flex-col lg:flex-row xl:flex-row flex-col">
                    <div className="mid flex xs:w-full sm:w-full md:w-full lg:w-2/3 xl:w-2/3 w-full xs:px-0 sm:px-0 md:px-0 lg:px-4 xl:px-4">
                        {/* The End was just beginning section */}
                        <img
                            className="mid-img1 object-cover object-center rounded  sm:w-[350px] sm:float-right sm:ml-auto  sm:h-[400px] lg:w-[450px] lg:h-[550px]"
                            alt="hero"
                            src={portal}
                            data-scroll
                        />
                        {/* The End was just beginning section */}
                    </div>
                    <div
                        className="mid-text1 last xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 w-full xs:mt-10 sm:mt-10 md:mt-10 lg:mt-0 xl:mt-0 mt-10"
                        data-scroll
                    >
                        <p className=" text-gray-300  font-normal leading-6 text-right xs:w-2/3 sm:w-2/3 md:w-2/3 lg:w-full xl:w-full w-full xs:ml-auto sm:ml-auto md:ml-auto lg:ml-auto lg:mr-auto xl:ml-auto xl:mr-auto xs:p-4 sm:p-4 md:p-0 lg:p-0 xl:p-0 p-4 xs:pl-16 sm:pl-16 md:pl-0 lg:pl-0 xl:pl-0 pl-16 xs:text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm text-sm ">
                        <span className="font-bold">The Five Worlds lie in ruin</span>, casualties of a
                            celestial war between order and chaos. The Day of
                            Destruction claimed many lives—but there were some
                            who survived. Those brave enough to enter the
                            ancient gateways were transported to the last
                            bastion of hope in the universe:<span className="font-bold">Astra Nova</span>.
                        </p>
                    </div>
                </div>
                {/* <div className="flex justify-center gap-6 items-center flex-col sm:flex-col md:flex-row md:gap-5 lg:flex-row lg:justfy-center lg:gap-5 my-8 mx-6">
                    <img
                        className="object-cover object-center rounded sm:w-[300px] sm:h-[300px] w-[250px] h-[250px]"
                        alt="hero"
                        src={first}
                    />
                    <img
                        className="object-cover object-center rounded sm:w-[300px] sm:h-[300px] w-[250px] h-[250px]"
                        alt="hero"
                        src={first}
                    />
                </div> */}
                <div className="w-full md:mt-40">
                    <div
                        // style={{"opacity: 1;transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;"}}
                        className="background-pattern1"
                    ></div>
                    <div
                        // style={{"opacity: 1;transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;"}}
                        className="background-pattern2 hidden md:block"
                    ></div>
                    <motion.span variants={fadeIn()} className="max-w-[1340px]">
                        <h1
                            data-scroll
                            className="mid-head2 eading-normal w-full xs:w-full sm:w-5/6 md:w-5/6 lg:w-4/5 xl:w-4/5 xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl text-4xl  mt-8 font-normal leading-tight text-teal-300 xs:pl-8 sm:pl-12 md:pl-20 lg:pl-24 xl:pl-32 md:pl-8 md:pr-5 sm:pr-5 md:pr-0 lg:pr-10 xl:pr-10 md:pr-5 md:text-left"
                        >
                            The future of the universe is in your hands.
                        </h1>
                    </motion.span>
                    <motion.div
                        variants={staggerContainer}
                        initial="inital"
                        animate="animate"
                        className=" xs:w-full sm:w-full md:w-4/5 lg:w-4/5 xl:w-4/5 w-full  mx-auto text-center flex  xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row flex-col-reverse xs:mt-10 sm:mt-10 md:mt-10 lg:mt-10 xl:mt-0 mt-10"
                    >
                        <div className="first flex flex-col xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 w-full xs:mt-10 sm:mt-10 md:mt-10 lg:mt-0 xl:mt-0 mt-10 xs:pl-8 sm:pl-12 md:pl-0 lg:pl-0 xl:pl-0 md:pl-8">
                            <div className="md:w-4/5 text-left  my-8 ">
                                <motion.span variants={fadeIn()}>
                                    <p
                                        data-scroll
                                        className="mid-text2 text-gray-300  font-normal leading-6 text-left xs:w-2/3 sm:w-2/3 md:w-2/3 lg:w-full xl:w-full w-full xs:mr-auto sm:mr-auto md:mr-auto lg:mr-auto lg:mr-auto xl:mr-auto xl:mr-auto xs:p-4 sm:p-4 md:p-0 lg:p-0 xl:p-0 p-4 xs:pr-4 sm:pr-16 md:pr-0 lg:pr-0 xl:pr-0 md:pr-16 xs:text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm text-sm"
                                    >
                                        <span className="text-lg italic font-bold">
                                            Even on Astra Nova, survival is no
                                            guarantee.
                                        </span>
                                        <br /> <br />
                                        —for this safe haven harbors deep secrets. Old rivalries threaten to upset the new order, and agents of the darkness lurk around every corner. Those who remain must work together to restore their trust, recover what was lost, and rebuild the world to come—before it's too late.
                                    </p>
                                </motion.span>
                            </div>
                            {/* <div className="bottomImage">
                                <img
                                    className="object-cover object-center rounded sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[700px]"
                                    alt="hero"
                                    src={devi1}
                                />
                            </div> */}
                        </div>
                        <div className="mid flex xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 w-full xs:px-0 sm:px-0 md:px-0 lg:px-4 xl:px-4 xs:mt-10 sm:mt-10 md:mt-10 lg:mt-0 xl:mt-0 mt-10 xs:pl-0 sm:pl-12 md:pl-0 lg:pl-0 xl:pl-0 pl-0">
                            <img
                                className="mid-img2 object-cover object-center rounded  sm:w-[350px]  sm:mr-auto sm:h-[450px] lg:w-[450px] lg:h-[550px]"
                                alt="hero"
                                src={devi1}
                                data-scroll
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* <div className="w-[3%] h-[500px] blur-[35px] bg-[#c4410d] opacity-[0.35] rounded-[100%] pt-20 z-50"></div> */}
        </div>
    );
};

export default MidSection;
