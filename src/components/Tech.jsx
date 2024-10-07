import React from 'react'
import { FcAndroidOs } from "react-icons/fc";
import { FaJava } from 'react-icons/fa';

import { TbBrandKotlin } from "react-icons/tb";

import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJetpackcompose } from "react-icons/si";
import { motion } from "framer-motion";

function Tech() {
  const IconVariant = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }
    }

  })
  return (
    <>
      <div className='pb-4'>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <motion.div
            variants={IconVariant(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-[#6fa9ff] p-4'>
            <FcAndroidOs className='text-7xl text-[#32de84]' />
          </motion.div>
          <motion.div
            variants={IconVariant(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-[#6fa9ff] p-4'>
            <FaJava className='text-7xl text-[#d32f2f]' />
          </motion.div>
          <motion.div
            variants={IconVariant(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-[#6fa9ff] p-4'>
            <TbBrandKotlin className='text-7xl text-[#FF7043]' />
          </motion.div>
          <motion.div
            variants={IconVariant(3.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-[#6fa9ff] p-4'>
            <IoLogoFirebase className='text-7xl text-[#FB8C00]' />
          </motion.div>

          <motion.div
            variants={IconVariant(4.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-[#6fa9ff] p-4'>
            <SiJetpackcompose className='text-7xl text-[#1b2a81]' />
          </motion.div>
        </div>

      </div>
    </>
  )
}

export default Tech