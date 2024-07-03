import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant, iconVariants } from "../utils/motion";

const Technologies = () => {
  return (
    <>
      <motion.div variants={fadeIn("up", "spring", 0, 1.25)} className="flex">
        <div className="w-3 h-3 rounded-full bg-[#f7f7f7] drop-shadow-tube-light self-center mr-2" />
        <p className={styles.sectionSubText}>What I have worked with</p>
      </motion.div>
      <motion.h2 variants={textVariant} className={styles.sectionHeadText}>
        Technologies.
      </motion.h2>
      <div className="mt-12 border-b border-neutral-800 pb-24">
        <div className="flex flex-wrap items-center justify-center gap-5">
          {technologies.map((tech, index) => (
            <motion.div
              variants={iconVariants(tech.duration)}
              initial="initial"
              animate="animate"
              key={index}
              className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-secondary transition duration-300 ease-in-out select-none"
            >
              <div className="flex items-center">
                <img src={tech.icon} alt={tech.name} className="w-16 h-16" />
                <p className="ml-4">{tech.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Technologies, "tech");
