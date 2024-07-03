import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source,
  hoverColors,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#181818] p-5 rounded-2xl w-full h-full flex flex-col border-2 border-[#696969d0] hoverEffect"
        style={{
          "--hover-color-start": hoverColors[0],
          "--hover-color-end": hoverColors[1],
        }}
      >
        <div className="relative w-full h-[230px] bg-glare-img">
          <img
            src={image}
            alt="project_image"
            loading="lazy"
            className="w-full h-full object-cover object-top rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex-1">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
          <div>
            <a
              href={source}
              target="_blank"
              rel="noreferrer"
              className="text-[14px] text-[#f7f7f7] hover:text-[#f7f7f7]"
            >
              View Project
            </a>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex">
          <div className="flex">
            <div className="w-3 h-3 rounded-full bg-[#f7f7f7] drop-shadow-tube-light self-center mr-2" />
            <p className={`${styles.sectionSubText} flex`}>My work</p>
          </div>
        </div>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("up", "spring", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Explore my projects to see my technical skills in action. Each project
          includes a brief overview, code repository, and live demo link. These
          examples highlight my ability to innovate, solve complex problems, and
          manage projects effectively from start to finish.
        </motion.p>
      </div>

      <div className="mt-20 grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5">
        {projects.map((project, index) => (
          <div
            key={`project-${index}`}
            className="transition-transform duration-300 hover:scale-105 hover:-translate-y-2 flex"
          >
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
