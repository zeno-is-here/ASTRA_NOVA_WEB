import React from 'react';
import first from '../assets/secondsectionimg.jpg';
import about from '../assets/about.jpg';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from './motionVariants';

const About = () => {
  return (
    <>
      <section class="text-white">
        <motion.div
          variants={staggerContainer}
          animate="animate"
          initial="initial"
          class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center"
        >
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded lg:m-[20%]"
              alt="hero"
              src={about}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:max-w-[50%] lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <motion.span variants={fadeIn()}>
              <h1 class=" sm:text-[34px] text-2xl mb-4 font-extrabold leading-5">
                What are the Deviants?
              </h1>
            </motion.span>
            <motion.span variants={fadeIn()}>
              <p class="mb-8 text-[#595959] text-base leading-6">
                The Deviants are the first inhabitants of Astra Nova.
                <br /> <br />
                They're perfect genetic replicants of the 15 species of the Five
                Worlds, created to test the habitability of AstraNova. But to
                account for all possibilities, the creators packed these
                mischievous miniatures with thousands of genotypic and
                phenotypic deviations-and got much more than they bargained for.
                <br /> <br />
                There are 10,000 unique Deviant non-fungible tokens (NFTs) that
                will reside on the Ethereum network. Each Deviant offers a first
                glimpse into the worlds of Astra Nova and unlocks exclusive lore
                and in-game features. Follow the Deviant Trials on our Discord,
                or mint your own Deviant below.
              </p>
            </motion.span>
            <div class="flex justify-center">
              <button
                type="button"
                className=" w-[200px] inline-flex items-center justify-center py-3 mt-[5%] border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#10C4B3] hover:bg-[#75DBD1]"
              >
                DEVIATE NOW
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
