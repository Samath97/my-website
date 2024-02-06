"use client";

import profile_pic from "@/public/profile_pic.png";
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    type: "tween",
                    delay: 0.5,
                    duration: 0.2,
                    }}
                >
                    <Image
                        src={profile_pic}
                        alt="Samath portrait"
                        width="192"
                        height="192"
                        quality="95"
                        priority={true}
                        className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                    />    
                </motion.div>
                
                <motion.span
                    className="absolute bottom-0 right-0 text-4xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    type: "spring",
                    stiffness: 125,
                    delay: 1.0,
                    duration: 0.7,
                    }}
                >
                    👋
                </motion.span>
            </div>
        </div>
        <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: "tween",
                delay: 0.5,
                duration: 0.2,
                }}
        >
            <span className="font-bold">Hello, I'm Samath.</span> I'm a{" "}
            <span className="font-bold">Machine Learning student</span> from{" "}
            <span className="font-bold">Aalto University</span> I enjoy training <span className="italic">Machine models and creating sites</span>. My focus is{" "}
            <span className="underline">Python, Javascript and C++</span>.
        </motion.h1>
    </section>
  )
}
