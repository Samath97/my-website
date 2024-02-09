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
    title: "Master's Degree in ML & AI at Aalto University",
    location: "Espoo, Finland",
    description:
    "I am majoring in Artificial Intelligence, Machine Learning, and Cloud and Security engineering as a minor in Aalto University.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - Present",
  },
  {
    title: "Summer Trainee, MagiCAD Oy",
    location: "Espoo, Finland",
    description:
      "I worked on an image processing task where I learned C#, C++ and Revit API skills."
      ,
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Summer Trainee, Nokia Bell Labs",
    location: "Espoo, Finland",
    description:
      "I researched MP-TCP & MP-QUIC implementation and compare benefits / drawbacks and tested environment in virtualbox / Linux environment."
      ,
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Teaching assistant, Aalto University",
    location: "Espoo, Finland",
    description:
      "Helped 1st- and 2nd-year students to complete the Python assignments through mentorship."
      ,
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Summer Trainee, Nokia",
    location: "Espoo, Finland",
    description:
      "I taught a Scala programming language course to employees and tested Nokia AVA cloud-based platform that consist of big data storage, analytics and automation."
      ,
    icon: React.createElement(CgWorkAlt),
    date: "2018",
  },
  {
    title: "Military Conscript, Karelia Brigade",
    location: "Kouvola, Finland",
    description:
      "I did the basic training for 2 months and served as an Anti-Aircraft personnel for 4 months."
      ,
    icon: React.createElement(CgWorkAlt),
    date: "2017",
  },
  {
    title: "Lifeguard, Suomalainen Yhteiskoulu",
    location: "Helsinki, Finland",
    description:
      "During High School, I worked as a one of the school’s lifeguard. This required me to do the Red Cross first aid course."
      ,
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2015",
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
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML",
  "CSS",
  "Git",
  "Tailwind",
  "Python",
  "Scala",
  "C++",
  "QT",
  "Linux",
  "PyTorch",
  "Tensorflow",
] as const;