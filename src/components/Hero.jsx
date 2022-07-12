import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center h-screen mb-12 overflow-hidden -mt-20 -z-10">
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;
