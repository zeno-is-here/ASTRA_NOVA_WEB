import React from "react";
import captain from "../assets/captain.png";
import { Typewriter, useTypewriter } from "react-simple-typewriter";

const Contact = () => {
    const { text } = useTypewriter({
        words: [
            "If you would like to join us, drop us a mail!",
            "If you would like to partner, drop us a mail!",
            "If you would like to talk about investments, drop us a mail!",
            "If you are a hardcore gamer, follow us!",
            "If you just feel like we're dope, follow us!",
            "If you think web3 and NFTs are your thing, follow us!",
            "If you love the Deviants, follow us!",
            "If you like P2E games, follow us!",
            "If you like making money, follow us!",
            "If you're curious, follow us!",
            "If you're a crypto maniac, follow us!",
            "If you think you're smart, follow us!",
            "If you're waiting for this to end, follow us!",
            "If you read most of these messages, follow us!",
        ],
        loop: 0,
        delaySpeed: 1000,
        typeSpeed: 100,
        deleteSpeed: 70,
    });
    return (
        <>
            <div
                className=""
                data-scroll-section
                style={{
                    background:
                        "linear-gradient(90deg, rgba(23,79,91,1) 0%, #0c0616 42%, rgba(69,35,36,1) 100%)",
                }}
            >
                <div className="max-w-[1240px] mx-auto text-gray-500 pt-12 pb-12 pl-8 xl:pl-0 lg:mt-40">
                    <div className="left">
                        <h2 class=" text-2xl font-extrabold text-white">
                            {text}
                            {/* <Typewriter
                                loop={5}
                                cursor
                                cursorStyle="_"
                                typeSpeed={65}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                words={[
                                    "CONTACT US?",
                                    "CHAT WITH US?",
                                    "TALK TO US?",
                                ]}
                                onLoopDone={handleDone}
                            /> */}
                        </h2>
                        <div class="flex">
                            <button
                                type="button"
                                class=" w-[200px] inline-flex items-center justify-center py-3 mt-8 border border-transparent text-base font-semibold rounded-full shadow-sm text-black bg-white uppercase"
                            >
                                Contact Now
                            </button>
                        </div>
                    </div>
                    {/* <div className="right relative">
                        <img
                            src={captain}
                            alt=""
                            className="absolute -bottom-12 right-0 opacity-0 lg:opacity-100 xl:"
                        />
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default Contact;
