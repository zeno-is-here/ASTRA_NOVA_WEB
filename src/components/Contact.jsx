import React from "react";
import captain from "../assets/captain.png";

const Contact = () => {
	return (
		<>
			<div
				className=""
				style={{
					background:
						"linear-gradient(90deg, rgba(23,79,91,1) 0%, #0c0616 42%, rgba(69,35,36,1) 100%)",
				}}>
				<div className="max-w-[1240px] mx-auto text-gray-500 pt-12 pb-12 pl-8 xl:pl-0 lg:mt-40">
					<div className="left">
						<h2 class=" text-2xl font-extrabold text-white">
							WANT TO CONTACT US?
						</h2>
						<div class="flex">
							<button
								type="button"
								class=" w-[200px] inline-flex items-center justify-center py-3 mt-8 border border-transparent text-base font-semibold rounded-full shadow-sm text-black bg-white uppercase">
								Contact Now
							</button>
						</div>
					</div>
					<div className="right relative">
						<img src={captain} alt="" className="absolute -bottom-12 right-0 opacity-0 lg:opacity-100 xl:" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
