import { motion } from "framer-motion";

import { styles } from "../styles";
import { BeachCanvas } from "./canvas";

const Hero = () => {

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className="absolute inset-0 flex flex-row justify-center items-center gap-5 z-10 pointer-events-none transition-all duration-1500"
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white rock-salt`}>
            I'm <span className='rock-salt'>Ryusuke</span>
          </h1>
          <p className={`${styles.heroSubText} mt-1 text-white-100 text-center`}>
            I develop websites. Try scrolling→
          </p>
        </div>
      </div>

      <BeachCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
