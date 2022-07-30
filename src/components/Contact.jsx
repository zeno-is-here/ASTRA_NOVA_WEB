import React, {useState} from "react";
import captain from "../assets/captain.png";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import ContactModal from "./ContactModal";

const Contact = () => {
    const [open, setOpen] = useState(false);
    const [feedback, setFeedback] = useState(false);
    const { text } = useTypewriter({
        words: [
            "If you would like to join us, shoot us an email!",
            "If you would like to partner, shoot us an email!",
            "If you would like to talk about investments, shoot us an email!",
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
                <div className="max-w-[1240px] mx-auto text-gray-500 pt-12 pb-12 md:pl-8 pl-3 xl:pl-0 lg:mt-24">
                    <div className="left">
                        <h2 className=" text-2xl font-extrabold text-white min-h-[6rem] md:min-h-[2rem]">
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
                        <div className="flex">
                            <button
                                onClick={() => setOpen(!open)}
                                type="button"
                                className=" w-[200px] inline-flex items-center justify-center py-3 mt-8 border border-transparent text-base font-semibold rounded-full shadow-sm text-black bg-white uppercase"
                            >
                                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
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
            <ContactModal open={open} setOpen={setOpen} feedback={feedback} setFeedback={setFeedback} />
        </>
    );
};

export default Contact;
