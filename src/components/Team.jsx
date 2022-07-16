import { useState } from "react";
import Tabs from "./Tab";
import { team } from "../utils/team";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./motionVariants";

export default function Team() {
    const [role, setRole] = useState("Management");

    const setRoleFunc = (val) => {
        setRole(val);
    };

    return (
        <div className="text-white flex flex-row w-full" data-scroll-section>
            <div className="mx-auto py-16  px-12 lg:px-8 w-full">
                <div className="space-y-12">
                    <div className="space-y-5 text-center sm:space-y-4">
                        <h2 className="sm:text-[34px] text-2xl uppercase title-font font-extrabold ">
                            Meet Our Team
                        </h2>
                        <p className="text-[#595959] leading-relaxed">
                            Created by many. Meet them all.
                        </p>
                    </div>

                    <Tabs setVal={setRoleFunc} />
                    <ul className="flex flex-row flex-wrap gap-x-[3%] gap-y-[80px] justify-center place-items-start">
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
                                        className="space-y-4"
                                    >
                                        {/* <div className="aspect-w-3 aspect-h-2"> */}
                                        <motion.span variants={fadeIn()}>
                                            <img
                                                className="object-cover shadow-lg rounded-lg sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] mx-auto"
                                                src={person.imageUrl}
                                                alt={person.imageUrl}
                                            />
                                        </motion.span>
                                        {/* </div> */}
                                        <div className="flex flex-col justify-center items-center text-center relative h-1/10">
                                            <div className="leading-6">
                                                <motion.span
                                                    variants={fadeIn()}
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
                                            </div>
                                        </div>
                                    </motion.div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
            <div className="w-[3%] h-[500px] blur-[35px] bg-[#c4410d] opacity-[0.35] rounded-[100%]"></div>
        </div>
    );
}
