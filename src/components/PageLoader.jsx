import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { barVariants, textVariant } from "../utils/motion";

// Add a prop to PageLoader for the callback function
const PageLoader = ({ onLoaded }) => {
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter >= 100) {
      onLoaded();
      return;
    }

    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        const nextCounter = Math.min(
          100,
          prevCounter + Math.floor(Math.random() * 10 + 1)
        );
        return nextCounter;
      });
    }, 4000 / 33);

    return () => clearInterval(interval);
  }, [counter, onLoaded]);
  return (
    <>
      <motion.h1
        className="counter"
        variants={textVariant}
        initial="hidden"
        animate="visible"
      >
        {counter}
      </motion.h1>
      <div className="overlay flex z-20 fixed w-[100vw] h-[100vh]">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="bar"
            variants={barVariants}
            initial="show"
            animate="hidden"
          />
        ))}
      </div>
    </>
  );
};

export default PageLoader;
