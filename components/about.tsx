"use client";

import React from 'react'
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
        ref = {ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        id="about"
    >

    <SectionHeading>About me</SectionHeading>

        <p className='mb-3'>
            I am a Computer Science Master’s degree student from Aalto University doing ML/AI as a
            major. I have completed my bachelor’s degree in Computer science
            with a minor in Data Science. I will be completing my Master’s degree at the end of April 2024.
            For my bachelor thesis, I studied the design principle of exergames (including VR) to improve
            player satisfaction. For Master studies, I am majoring in AI; Machine Learning, and Cloud and 
            Security engineering as a minor. My Master thesis focuses on generating 3D segmentations
            from 2D medical image data using Machine Learning.
        </p>

        <p>
            I am very interested in expanding my practical capabilities in AI/ML area 
            and software development area as well as using my creativity and dedication 
            to solve challenges that await me.
        </p>
    </motion.section>
  )
}
