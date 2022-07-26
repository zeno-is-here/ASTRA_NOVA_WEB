import { useState } from "react";
import Tabs from "./Tab";
import { team } from "../utils/team";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./motionVariants";
import useLocoScroll from "../utils/locoScroll";

export default function Team() {
    const [role, setRole] = useState("Management");

    const setRoleFunc = (val) => {
        setRole(val);
    };
    useLocoScroll(true);

    return (
        <div className="text-white flex flex-row w-full" data-scroll-section>
            <div
                // style={{"opacity: 1;transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;"}}
                className="background-pattern5 hidden md:block"
            ></div>
            <div
                // style={{"opacity: 1;transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;"}}
                className="background-pattern6 hidden md:block"
            ></div>
            <div className="mx-auto py-16  px-12 lg:px-8 w-full">
                <div className="space-y-12">
                    <div className="space-y-5 text-center sm:space-y-4">
                        <h2 className="tk-roma font-title sm:text-7xl text-4xl uppercase title-font font-bold ">
                            Meet Our Team
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            Created by many. Meet them all.
                        </p>
                    </div>

                    <Tabs setVal={setRoleFunc} />
                    <ul className="flex flex-row flex-wrap gap-x-[3%] gap-y-[80px] justify-center items-stretch  place-items-start">
                        {team
                            .filter((teamP) => teamP.team === role)
                            .map((person) => (
                                <li
                                    key={person.name}
                                    className="flex justify-start place-items-start"
                                >
                                    <motion.div
                                        variants={staggerContainer}
                                        animate="animate"
                                        initial="initial"
                                        className="h-full content-between flex flex-col justify-between"
                                    >
                                        {/* <div className="aspect-w-3 aspect-h-2"> */}
                                        <motion.span variants={fadeIn()}>
                                            <img
                                                className="object-cover shadow-lg rounded-lg w-[220px] h-[220px] md:w-[200px] md:h-[200px] mx-auto"
                                                src={person.imageUrl}
                                                alt={person.imageUrl}
                                            />
                                        </motion.span>
                                        {/* </div> */}
                                        <div className="flex flex-col justify-center items-center text-center relative h-1/10 flex-1">
                                            <div className="leading-6 h-full flex flex-col justify-between">
                                                <motion.span
                                                    variants={fadeIn()}
                                                    className ="my-2"
                                                >
                                                    <h3 className="font-base title-font">
                                                        {person.name}
                                                    </h3>
                                                </motion.span>
                                                <motion.span
                                                    variants={fadeIn()}
                                                >
                                                    <p className="text-[#595959] font-sm body-font break-words max-w-[200px]">
                                                        {person.role}
                                                    </p>
                                                </motion.span>
                                                <motion.span
                                                    className="text-center flex justify-center items-center p-4"
                                                    variants={fadeIn()}
                                                >
                                                    <a
                                                        href={person.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <svg
                                                            className="w-4 h-4 text-gray-500 fill-current mt-2 hover:text-gray-300 transition-ease-in-out duration-200 "
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 448 512"
                                                        >
                                                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                                        </svg>
                                                    </a>
                                                </motion.span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
            {/* <div className="w-[3%] h-[500px] blur-[35px] bg-[#c4410d] opacity-[0.35] rounded-[100%]"></div> */}
        </div>
    );
}
