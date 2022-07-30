import React from "react";
import planet from "../utils/Planet.jpg";
import planetMobile from "../utils/Planet_Mobile.jpg";
import portalMobile from "../utils/Portal-Mobile.jpg";
import portal from "../utils/Portal.jpg";
import { motion } from "framer-motion";
import useWindowSize from "../hooks/responsive";
import { fadeIn, staggerContainer } from "./motionVariants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MidSection = () => {
    const size = useWindowSize();
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
//max-w-[1340px]
    return (
        <div className="w-full py-8 flex flex-row " data-scroll-section>


            <div className="max-w-full mx-auto text-center flex flex-col ">
                <h1
                    className="tk-roma font-title mid-head1 xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl text-4xl  mt-8 font-bold leading-tight text-teal-300 xs:pl-5 sm:pl-5 md:pl-24 lg:pl-36 xl:pl-80 md:pr-[10vw] sm:pr-[10vw] md:pr-[10vw] lg:pr-[10vw] xl:pr-[10vw] md:pr-[10vw] md:text-right"
                    data-scroll
                >
                    The end was just the beginning.
                </h1>

                <div className=" relative max-w-full sm:mr-[50px] md:mr-[10vw] lg:mr-[10vw] my-8 flex mt-16 sm:flex-col xs:flex-col md:flex-col lg:flex-row xl:flex-row flex-col">
                <div
                // style={{"opacity: 1;transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;"}}
                className="background-pattern0 hidden md:block"
            ></div>
            <div
                // style={{"opacity: 1;transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;"}}
                className="background-pattern hidden md:block"
            ></div>
                    <div className="z-300 mid flex xs:w-full sm:w-full md:w-full lg:w-2/3 xl:w-2/3 w-full xs:px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0">
                        {/* The End was just beginning section */}
                        {size.width <= 767 && (
                        <img
                            className=" mid-img1 object-cover object-center rounded  sm:w-full sm:float-right sm:ml-auto  sm:h-auto lg:w-full lg:h-auto z-300"
                            alt="hero"
                            src={planetMobile}
                            data-scroll
                        />)}
                         {size.width > 767 && (
                        <img
                            className="mid-img1 object-cover object-center rounded  sm:w-full sm:float-right sm:ml-auto  sm:h-[400px] lg:w-full lg:h-auto z-300"
                            alt="hero"
                            src={planet}
                            data-scroll
                        />)}
                        {/* The End was just beginning section */}
                    </div>
                    <div
                        className="mid-text1 last xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 w-full xs:mt-10 sm:mt-10 md:mt-10 lg:mt-0 xl:mt-0 mt-10"
                        data-scroll
                    >
                        <p className=" text-gray-300  font-normal leading-6 text-left xs:w-full sm:w-2/3 md:w-2/3 lg:w-full xl:w-full w-full xs:ml-auto sm:ml-auto md:ml-auto lg:ml-auto lg:mr-auto xl:ml-auto xl:mr-auto xs:p-4 sm:p-4 md:p-0 lg:p-0 xl:p-0 p-4 xs:pl-16 sm:pl-16 md:pl-16 lg:pl-16 xl:pl-16 pl-4 xs:text-base  sm:text-base  md:text-base  lg:text-base  xl:text-base  text-base ">
                        <span className="text-base font-bold text-1xl">The Five Worlds lie in ruin</span>, casualties of a
                            celestial war between order and chaos.<br/> <br/>The Day of
                            Destruction claimed many lives—but there were some
                            who survived.<br/><br/> Those brave enough to enter the
                            ancient gateways were transported to the last
                            bastion of hope in the universe:<span className="font-bold text-1xl">Astra Nova</span>.
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
                <div className="w-full md:mt-8">

                    <motion.span variants={fadeIn()} className="max-w-[1340px]">
                        <h1
                            data-scroll
                            className="tk-roma font-title mid-head2 eading-normal w-full xs:w-full sm:w-5/6 md:w-5/6 lg:w-4/5 xl:w-4/5 xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl text-4xl  mt-8 font-bold leading-tight text-teal-300 xs:pl-8 sm:pl-[10vw] md:pl-[10vw] lg:pl-[10vw] xl:pl-[10vw] md:pl-[10vw] md:pr-5 sm:pr-5 md:pr-0 lg:pr-10 xl:pr-10 md:pr-5 md:text-left"
                        >
                            The future of the universe <br></br>is in your hands.
                        </h1>
                    </motion.span>
                    <motion.div
                        variants={staggerContainer}
                        initial="inital"
                        animate="animate"
                        className=" relative xs:w-full sm:ml-[50px] md:ml-[10vw] lg:ml-[10vw] sm:w-full md:w-full lg:w-full xl:w-full w-full  mx-auto text-center flex  xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row flex-col-reverse xs:mt-10 sm:mt-10 md:mt-10 lg:mt-10 xl:mt-0 mt-10"
                    >
                    <div
                        // style={{"opacity: 1;transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;"}}
                        className="background-pattern1"
                    ></div>
                    <div
                        // style={{"opacity: 1;transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;"}}
                        className="background-pattern2 hidden md:block"
                    ></div>
                        <div className="first flex flex-col xs:w-full sm:w-full md:w-full lg:w-2/5 xl:w-2/5 w-full xs:mt-10 sm:mt-10 md:mt-10 lg:mt-0 xl:mt-0 mt-10 xs:pl-8 sm:pl-12 md:pl-0 lg:pl-0 xl:pl-0 md:pl-8">
                            <div className="md:w-4/5 text-left  my-8 ">
                                <motion.span variants={fadeIn()}>
                                    <p
                                        data-scroll
                                        className="mid-text2 text-gray-300  font-normal leading-6 text-left xs:w-2/3 sm:w-2/3 md:w-2/3 lg:w-full xl:w-full w-full xs:mr-auto sm:mr-auto md:mr-auto lg:mr-auto lg:mr-auto xl:mr-auto xl:mr-auto xs:p-4 sm:p-4 md:p-0 lg:p-0 xl:p-0 p-4 xs:pr-4 sm:pr-16 md:pr-0 lg:pr-0 xl:pr-0 md:pr-16 xs:text-base  sm:text-base  md:text-base  lg:text-base  xl:text-base  text-base "
                                    >
                                        <span className="text-base font-bold text-1xl">
                                            Even on Astra Nova, survival is no
                                            guarantee.
                                        </span>
                                        <br /> <br />
                                        For this safe haven harbors deep secrets. Old rivalries threaten to upset the new order, and agents of the darkness lurk around every corner.<br /> <br />
                                         Those who remain must work together to restore their trust, recover what was lost, and rebuild the world to come—before it's too late.
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
                        <div className="z-300 mid flex xs:w-full sm:w-full md:w-full lg:w-3/5 xl:w-3/5 w-full xs:px-0 sm:px-0 md:px-0 lg:px-4 xl:px-4 xs:mt-10 sm:mt-10 md:mt-10 lg:mt-0 xl:mt-0 mt-10 xs:pl-0 sm:pl-12 md:pl-0 lg:pl-0 xl:pl-0 pl-0">
                        {size.width <= 767 && (<img
                                className="mid-img2 object-cover object-center rounded  sm:w-full  sm:mr-auto sm:h-auto lg:w-full lg:h-auto z-300 "
                                alt="hero"
                                src={portalMobile}
                                data-scroll
                            />)}
                             {size.width > 767 && (<img
                                className="mid-img2 object-cover object-center rounded  sm:w-full  sm:mr-auto sm:h-auto lg:w-full lg:h-auto z-300 "
                                alt="hero"
                                src={portal}
                                data-scroll
                            />)}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* <div className="w-[3%] h-[500px] blur-[35px] bg-[#c4410d] opacity-[0.35] rounded-[100%] pt-20 z-50"></div> */}
        </div>
    );
};

export default MidSection;
