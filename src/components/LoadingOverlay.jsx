import React from "react";
import teallogo from "../utils/teallogo.gif";
// import

const LoadingOverlay = ({ logo }) => {
    return (
        <>
            <div className="loading-overlay cursor-none overflow-hidden">
                <div className="loading-top h-screen w-screen bg-red-900 absolute z-150 overflow-hidden">
                    <div className="overlay-top h-screen w-screen absolute bg-black flex justify-center items-center flex-col overflow-hidden">
                        <div
                            className="logoDiv h-40 w-40 xs:-mt-16 sm:-mt-16 md:mt-0 lg:mt-0 xl:mt-0 -mt-16 overflow-hidden"
                            ref={logo}
                        >
                            <img
                                src={teallogo}
                                alt=""
                                className="src h-full w-full scale-150"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoadingOverlay;
