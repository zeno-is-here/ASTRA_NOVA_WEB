import React from 'react';
import first from '../assets/secondsectionimg.jpg';

const MidSection = () => {
  return (
    <div className="w-full text-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto text-center flex flex-col">
        <p className=" text-[34px] font-extrabold uppercase">
          The end was just the beginning.
        </p>
        <div className="max-w-[700px] md:mx-[280px] my-8">
          <p className=" opacity-50 text-base font-regular font-normal">
            The Five Worlds lie in ruin, casualties of a celestial warbetween
            order and chaos.
            <br /> <br />
            The Day of Destruction claimed many lives-but there were some who
            survived.
            <br /> <br />
            Those brave enough to enter the ancient gateways were transported to
            the last bastion of hope in the universe: Astra Nova.
          </p>
        </div>
        {/* <div className="flex sm:flex-col md:flex-col xl:flex-row justify-around mb-5">
          <img src={first} className="w-[800px]" alt="first" />
          <img src={first} className="w-[800px]" alt="first" />
        </div> */}
        <div className="max-w-[700px] md:mx-[280px] my-8">
          <p className=" text-[34px] font-extrabold uppercase my-6">
            The fate of the universe is in your hands.
          </p>
          <p className=" text-base opacity-50 font-regular font-normal">
            Even on Astra Nova, survival is no guarantee.
            <br /> <br />
            For this safe haven harbors deep secrets, old rivalries threaten to
            upset the new order, and agents of the darkness lurk around every
            corner
            <br /> <br />
            Together, those who remain must work together to restore their
            trust, recover what was lost, and rebuild the world to come - before
            it's too late.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
