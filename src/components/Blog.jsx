import React from "react";
import{ Tilt }from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Blog = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Blog</h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Blog, 'blog')
