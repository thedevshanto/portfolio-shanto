import React from "react";
import { motion } from "framer-motion";

const rectangleVariants = {
  initial: {
    y: "-100%",
    height: "100%",
  },
  animate: {
    y: "0%",
    height: "0%",
  },
  exit: {
    y: ["0%", "-100%"],
    height: ["0%", "100%"],
  },
};

const Rectangle = () => {
  const MotionElem = motion.div;

  return (
    <>
      <MotionElem
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.6,
          delay: 0,
          ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-30 bg-[#1b162b]"
      />

      <MotionElem
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.25,
          delay: 0.8,
          ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-20 bg-[#241e36]"
      />

      <MotionElem
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.45,
          delay: 1,
          ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-10 bg-[#2e2743]"
      />
    </>
  );
};

export default Rectangle;
