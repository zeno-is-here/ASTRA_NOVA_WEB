import React from "react";
import first from "../assets/secondsectionimg.jpg";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./motionVariants";

const MidSection = () => {
	return (
		<div className="w-full py-8 px-4">
			<div className="max-w-[1240px] mx-auto text-center flex flex-col">
				<h1 class=" sm:text-[34px] text-2xl font-extrabold leading-5 text-gray-200">
					The End was just the Beginning.
				</h1>
				<div className="max-w-[700px] sm:mx-[50px] md:mx-[100px] lg:mx-[280px] my-8">
					<p className=" text-gray-500 text-base font-normal leading-6">
						The Five Worlds lie in ruin, casualties of a celestial
						warbetween order and chaos.
						<br /> <br />
						The Day of Destruction claimed many lives-but there were
						some who survived.
						<br /> <br />
						Those brave enough to enter the ancient gateways were
						transported to the last bastion of hope in the universe:
						Astra Nova.
					</p>
				</div>
				<div className="flex justify-center gap-6 items-center flex-col sm:flex-col md:flex-row md:gap-5 lg:flex-row lg:justfy-center lg:gap-5 my-8 mx-6">
					<img
						class="object-cover object-center rounded"
						alt="hero"
						src={first}
					/>
					<img
						class="object-cover object-center rounded"
						alt="hero"
						src={first}
					/>
				</div>
				<motion.div
					variants={staggerContainer}
					initial="inital"
					animate="animate"
					className="max-w-[1240px] mx-auto text-center flex flex-col">
					<motion.span variants={fadeIn()}>
						<h1 class=" sm:text-[34px] text-2xl font-extrabold mt-8 text-gray-200">
							The Fate of the Universe is in your Hands.
						</h1>
					</motion.span>
					<div className="max-w-[700px] sm:mx-[50px] md:mx-[100px] lg:mx-[280px] my-8">
						<motion.span variants={fadeIn()}>
							<p className="text-base text-gray-500 font-normal leading-6 my-4 ">
								Even on Astra Nova, survival is no guarantee.
								<br /> <br />
								For this safe haven harbors deep secrets, old
								rivalries threaten to upset the new order, and
								agents of the darkness lurk around every corner
								<br /> <br />
								Together, those who remain must work together to
								restore their trust, recover what was lost, and
								rebuild the world to come - before it's too
								late.
							</p>
						</motion.span>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default MidSection;
