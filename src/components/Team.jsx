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
        <div className="text-white flex flex-row">
            <div className="mx-auto py-16 max-w-7xl px-12 lg:px-8">
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
                    <ul
                        role="list"
                        className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-5 lg:gap-x-8"
                    >
                        {team
                            .filter((teamP) => teamP.team === role)
                            .map((person) => (
                                <li key={person.name}>
                                    <motion.div
                                        variants={staggerContainer}
                                        animate="animate"
                                        initial="initial"
                                        className="space-y-4"
                                    >
                                        {/* <div className="aspect-w-3 aspect-h-2"> */}
                                        <motion.span variants={fadeIn()}>
                                            <img
                                                className="object-cover shadow-lg rounded-lg sm:w-[200px] sm:h-[200px] w-[250px] h-[250px] mx-auto"
                                                src={person.imageUrl}
                                                alt={person.imageUrl}
                                            />
                                        </motion.span>
                                        {/* </div> */}
                                        <div className="space-y-2 text-center">
                                            <div className="text-lg leading-6 space-y-1">
                                                <motion.span
                                                    variants={fadeIn()}
                                                >
                                                    <h3 className="font-medium title-font">
                                                        {person.name}
                                                    </h3>
                                                </motion.span>
                                                <motion.span
                                                    variants={fadeIn()}
                                                >
                                                    <p className="text-[#595959] body-font">
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
