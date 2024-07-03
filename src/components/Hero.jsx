import { motion } from "framer-motion";

import { styles } from "../styles";
import Model from "./canvas/Model";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-3 h-3 rounded-full bg-[#f7f7f7] drop-shadow-tube-light" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1
            className={`${styles.heroHeadText} text-white drop-shadow-text-light `}
          >
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#915eff] to-[#FF9F3A]">
              Tushar
            </span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 drop-shadow-text-light`}
          >
            I'm a passionate{" "}
            <span className="text-[#ddddddd3]">Full Stack developer </span> who
            loves to build interactive web applications.
          </p>
        </div>
      </div>
      <Model />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
