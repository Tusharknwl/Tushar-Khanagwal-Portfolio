import React from "react";
import { motion } from "framer-motion";
import { profile, profile2 } from "../assets";

import { styles } from "../styles";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex ">
        <div className="flex">
          <div className="w-3 h-3 rounded-full bg-[#f7f7f7] drop-shadow-tube-light self-center mr-2" />
          <p className={`${styles.sectionSubText} flex`}>About Me</p>
        </div>
      </motion.div>
      <div className="xl:mt-3 flex flex-col md:flex-row gap-10 overflow-hidden">
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 0.75)}
          className="w-full md:w-1/2 mt-3 rounded-2xl overflow-hidden border-[8px] border-[#333333d0] bg-glare-img"
        >
          <img
            src={profile}
            alt="profile photo"
            loading="lazy"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </motion.div>

        <div className="flex flex-col gap-4 w-full md:w-1/2 justify-center">
          <motion.h2
            variants={slideIn("down", "spring", 0.1, 0.75)}
            className={styles.heroHeadText}
          >
            Overview
          </motion.h2>
          <motion.p
            variants={slideIn("up", "spring", 0.1, 0.75)}
            className={`${styles.normalText} max-w-3xl`}
          >
            Hello there! I'm a full-stack developer base in Delhi, with a
            passion for building beautiful and functional websites. I specialize
            in creating responsive and user-friendly web applications using
            modern technologies. I have experience working with both front-end
            and back-end technologies, and I'm always looking to learn new
            things. I'm always looking for new opportunities to grow and improve
            my skills. I'm excited to work with you and help you bring your
            ideas to life!
          </motion.p>
        </div>
      </div>
      <div className="xl:mt-3 flex flex-col-reverse md:flex-row gap-10 overflow-hidden">
        <div className="flex flex-col gap-4 w-full md:w-1/2 justify-center">
          <motion.h2
            variants={slideIn("down", "spring", 0.7, 0.75)}
            className={styles.heroSubText}
          >
            My Background
          </motion.h2>
          <motion.p
            variants={slideIn("up", "spring", 0.7, 0.75)}
            className={`${styles.normalText} max-w-3xl`}
          >
            In 2023, I graduated from Delhi Technological University with a
            degree in Electrical Engineering. During my studies, I developed a
            deep interest in web development and software engineering. I have
            worked on various projects that enhanced my skills in both front-end
            and back-end development. I am proficient in languages like
            JavaScript, C++, and frameworks such as React and Node.js. My goal
            is to continually grow as a developer and contribute to innovative
            projects that make a difference.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("left", "spring", 0.7, 0.75)}
          className="w-full md:w-1/2 mt-3 top-12 rounded-2xl overflow-hidden border-[8px] border-[#333333d0] bg-glare-img"
        >
          <img
            src={profile2}
            alt="graduation photo"
            loading="lazy"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
