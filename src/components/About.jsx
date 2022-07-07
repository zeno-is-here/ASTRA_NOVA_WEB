import React from 'react';
import first from '../assets/secondsectionimg.jpg';
import about from '../assets/about.jpg';

const About = () => {
  return (
    <div className="w-full text-white py-16 px-4">
      <div className="max-w-[1240px] flex flex-row gap-x-1">
        <img
          src={about}
          className="mx-[10%] w-[500px] h-[550px] "
          alt="first"
        />
        <div className="flex flex-col my-4">
          <p className=" text-[34px] font-extrabold uppercase my-6">
            What are the deviants?
          </p>
          <p className=" text-base opacity-50 font-regular font-normal">
            The Deviants are the first inhabitants of Astra Nova.
            <br /> <br />
            They're perfect genetic replicants of the 15 species of the Five
            Worlds, created to test the habitability of AstraNova. But to
            account for all possibilities, the creators packed these mischievous
            miniatures with thousands of genotypic and phenotypic deviations-and
            got much more than they bargained for.
            <br /> <br />
            There are 10,000 unique Deviant non-fungible tokens (NFTs) that will
            reside on the Ethereum network. Each Deviant offers a first glimpse
            into the worlds of Astra Nova and unlocks exclusive lore and in-game
            features. Follow the Deviant Trials on our Discord, or mint your own
            Deviant below.
          </p>
          <button
            type="button"
            className=" w-[200px] inline-flex items-center justify-center py-3 mt-[5%] border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#10C4B3] hover:bg-[#75DBD1]"
          >
            DEVIATE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
