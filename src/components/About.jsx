import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.heroHeadText}>
          Overview
        </h2>
      </motion.div>
      <motion.p variants={fadeIn("","", 0.1, 0.1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leadinf-[30px]'
      >
        Hello, My name is Tushar. I'm a fourth-year Electrical Engineering student at Delhi Technological University with a strong command of C/C++ programming and proficiency in Data Structure algorithms. Over the last year, I have been actively engaged in competitive programming on several platforms such as Leetcode, GFG, CodeChef (3-star), and Hackerrank. In my leisure time, I enjoy watching sci-fi movies, anime, and listening to music.
You can download my resume on the given below button.
      </motion.p>

      <div className=''> 

      </div>
    </>
  )
}

export default About