import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motion";
import { experiences } from "../constants";

// Experience section component
const ExperienceSection = ({
  title,
  company_name,
  date,
  description,
  index,
}) => {
  return (
    <>
      <motion.div
        variants={slideIn("up", "spring", index * 0.5, 0.75)}
        className="md:mt-20 mt-10 flex flex-col md:flex-row items-center"
      >
        <h3
          className={`${styles.heroSubText} self-start h-12 mr-4 drop-shadow-text-light 'w-full md:w-1/3`}
        >
          {company_name}
        </h3>
        <div className="flex flex-col w-full md:w-3/4  md:gap-y-5 gap-y-1 ">
          <div className="flex flex-col">
            <p className={styles.heroSubText}>{title}</p>
            <p className={styles.sectionSubText}>{date}</p>
          </div>
          <p className={styles.normalText}>{description}</p>
        </div>
      </motion.div>
    </>
  );
};

// Main component that renders the entire layout
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <div className="flex">
          <div className="w-3 h-3 rounded-full bg-[#f7f7f7] drop-shadow-tube-light self-center mr-2" />
          <p className={styles.sectionSubText}>What I have done so far</p>
        </div>
        <h2 className={styles.heroHeadText}>My Journey.</h2>
      </motion.div>
      <div className="flex flex-col">
        {experiences.map((experience, index) => (
          <ExperienceSection
            key={index}
            index={index}
            experience={experience}
            {...experience}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
