import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import unrealImg from "@/public/unreal_drive.jpg";
import automationImg from "@/public/automation_models.jpg";
import racingsiteImg from "@/public/racing_site.jpg";
import forestsiteImg from "@/public/forest_site.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Unreal Projects",
    description:
      "Game projects I developed using Unreal Engine and C++. This Google Drive folder contains .rar files of the projects",
    tags: ['C++', 'Unreal Engine', 'Game Development'],
    imageUrl: unrealImg,
    link: 'https://drive.google.com/drive/folders/1_N0ICQH6mr3kNO4EU64JymAv6JFG-xLW?usp=sharing',
  },
  {
    title: "Automation game Car Models",
    description:
      "Car models I designed using Automation Game. This Google Drive folder contains images of the car models.",
    tags: ['Automation game', 'Car models', 'Designing'],
    imageUrl: automationImg,
    link: 'https://drive.google.com/drive/folders/1olSjNmUjtLD4zP1gsn3dMOLVIHVGCTP4?usp=sharing',
  },
  {
    title: "Nature Site",
    description:
      "I made this website in High School. It demonstrates my finnish language skills and creativity.",
    tags: ['Finnish', 'Nature', 'Creativity', 'Wix'],
    imageUrl: forestsiteImg,
    link: 'https://samathlokuge.wixsite.com/smmy',
  },
  {
    title: "Racing Game Site",
    description:
      "This was the first website I made back in middle school. It discusses about cars from Need for Speed and Burnout video games.",
    tags: ['Need4Speed', 'Burnout', 'Gaming', 'Weebly'],
    imageUrl: racingsiteImg,
    link: 'https://nfsburnout.weebly.com/index.html',
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;