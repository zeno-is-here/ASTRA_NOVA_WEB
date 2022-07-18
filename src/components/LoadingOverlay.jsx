import React from "react";
import teallogo from "../utils/teallogo.gif";
// import

const LoadingOverlay = ({ logo }) => {
    return (
        <>
            <div className="loading-overlay cursor-none">
                <div className="loading-top h-screen w-screen bg-red-900 absolute z-1000">
                    <div className="overlay-top h-screen w-screen absolute bg-black flex justify-center items-center flex-col">
                        <div className="logoDiv h-40 w-40" ref={logo}>
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
