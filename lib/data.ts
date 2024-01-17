import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import myPortfolioImg from "@/public/myPortfolio.jpg";
import promptopiaImg from "@/public/promptopia.jpg";
import iconPhotographyImg from "@/public/iconPhotography.jpg";

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
    title: "Portfolio",
    description:
      "My own portfolio. Contain all my information, Skills, Experiences and Contact details.",
    tags: ["React", "Next.js", "Tailwind", "TypeScript", "Framer"],
    imageUrl: myPortfolioImg,
  },
  {
    title: "Promptopia",
    description:
      "Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts",
    tags: ["React", "Next.js", "Tailwind", "Next-auth", "MongoDB"],
    imageUrl: promptopiaImg,
  },
  {
    title: "Icon Photography",
    description:
      "I'm working on this website for a client who is a photographer and videogrpapher for special occasions.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: iconPhotographyImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Framer Motion",
] as const;
