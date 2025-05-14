import React from 'react'
import {Tilt} from "react-tilt";
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc';

import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'


const ServiceCard = ({ index ,title ,icon }) =>{
    return(
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
        flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
        </motion.div>
      </Tilt>
    )
}

const About = () => {
  return (
    <>
      <motion.div
      variants={textVariant()}
      className='mt-10'>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Over view</h2>
      </motion.div>

      <motion.p
      variants={fadeIn('' ,'' ,0.1 ,1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl loading-[30px]'>
        I’m a skilled and creative Frontend Developer with strong expertise in building responsive, high-performance web
         applications as a freelancer. I specialize in technologies like React, Next.js
         , TypeScript, Tailwind CSS, and GSAP—bringing UI designs to life with clean code and smooth animations. With a deep understanding of both web design and development, I focus on crafting elegant, user-friendly interfaces that perform flawlessly across all devices.
      </motion.p>

      <div className='mt-20  flex flex-wrap justify-center gap-10'>
        {services.map((service ,index) =>(
          <ServiceCard key={service.title} index={index}
          {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About ,"about")