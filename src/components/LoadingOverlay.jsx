import React from "react";
import logoImage from "../utils/logo.svg";
// import

const LoadingOverlay = ({ title, logo }) => {
    return (
        <>
            <div className="loading-overlay cursor-none">
                <div className="loading-top h-screen w-screen bg-red-900 absolute z-1000">
                    <div className="overlay-top h-screen w-screen absolute bg-black flex justify-center items-center flex-col">
                        <div className="logoDiv h-20" ref={logo}>
                            <img
                                src={logoImage}
                                alt=""
                                className="src h-full w-full scale-150"
                            />
                        </div>

                        <h2
                            className="overlay-heading text-white text-2xl font-sans tracking-wider mt-10 font-extralight"
                            ref={title}
                        >
                            We’ll build gamer trust with a Web3 experience that
                            values their time.
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoadingOverlay;
