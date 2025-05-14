import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Image } from "@react-three/drei";
import { Link } from "react-router-dom";

const Hero = () => {
  const MotionA = motion.a;
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className=" flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Parmida</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Frontend developer
            </p>

            <motion.a
            href="/your-cv.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-5 inline-flex items-center gap-2 cursor-pointer rounded-xl bg-[#915eff] px-6 py-3 text-white font-medium text-[16px] border border-transparent hover:bg-white hover:text-[#915eff] hover:border-[#915eff] transition-all duration-300 shadow-md"
          >
            <span>Download CV</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5 7.5 7.5-7.5M12 3v16.5" />
            </svg>
          </motion.a>


        </div>
      </div>
      <ComputersCanvas/>
      {/* <Image
        fill
        src='./avatar.png'
        alt=''/> */}

      <div className="absolute xs:bottom-0 bottom-0 w-full flex justify-center
      items-center">
        <a
        href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center
          items-start p-2">
            <motion.div
            animate={{
              y: [0 ,24 ,0]
            }}
            transition={{
              duration:1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1">

            </motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero