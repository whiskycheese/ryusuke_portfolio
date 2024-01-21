import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='lg:w-[150px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-blue-gradient p-[1px] rounded-[40%] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='relative bg-white rounded-[50%] py-5 px-12 flex justify-center items-center flex-col lg:min-h-[500px] sm:h-[150px] h-[100px]'
      >
        <img
          src={icon}
          alt='web-development'
          className='sm:w-16 sm:h-16 w-12 h-12 object-contain absolute lg:top-5 top-[50%] lg:translate-y-0 -translate-y-1/2 lg:left-auto left-2'
        />
        <h3 className='text-secondary text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {

  return (
    <>
      <div className="flex lg:flex-row  flex-col gap-10">
        <div className="max-w-lg">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>About me.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Here are my 4 strengths!

            I create websites <span className="font-bold text-tertiary text-shadow">EFFICIENTLY</span> by using JavaScript frameworks like React and Vue, as well as CSS frameworks like tailwind.

            My websites are <span className="font-bold text-tertiary text-shadow">PRECISE</span> since I make them to be perfect pixel. I respect the design, so my goal is to understand the intention of the designer as much as possible.

            Being a native English speaker makes me a <span className="font-bold text-tertiary text-shadow">FAST LEARNER</span>. When there's an error, I have more access to information to resolve the matter. 

            Lastly I love <span className="font-bold text-tertiary text-shadow">CHALLENGING</span> myself to taking in new skills. Thats why I made this amazing 3D website. Im hungry for knowledge and ready to learn a lot from you!
          </motion.p>
        </div>

        <div className='flex lg:flex-row flex-col items-center gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
