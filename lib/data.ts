import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaLanguage,
  FaGear,
  FaLaptopMedical,
  FaGraduationCap,
} from "react-icons/fa6";
import myPortfolioImg from "../public/myPortfolio.jpg";
import promptopiaImg from "../public/promptopia.jpg";
import iconPhotographyImg from "../public/iconPhotography.jpg";

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
    title: "B.Sc. in Aeronautical Mechanical Engineering",
    location: "Aleppo, SY",
    description:
      "I Graduated from as an Engineer with a B.Sc. in Aeronautical Mechanical Engineering from Aleppo University in Syria",
    icon: React.createElement(FaGraduationCap),
    date: "2003 - 2009",
  },
  {
    title: "Front-end WEb Developer @: Stirring Interactive",
    location: "Homs, SY",
    description:
      "I worked in a developers team where I built websites using HTML and CSS while I kept close connection with client to modify the design upon requesting, as well as maintain an open communication link with other development teams to ensure efficiency",
    icon: React.createElement(FaCode),
    date: "2009 - 2010",
  },
  {
    title: "Translator & Proofreader @: Self Employed",
    location: "Homs, SY",
    description:
      "II worked as English/Arabic translator and proofreader as freelancer with different local and international companies.",
    icon: React.createElement(FaLanguage),
    date: "2010 - 2018",
  },
  {
    title: "Mechanical Design Engineer @: WDRVM",
    location: "Homs, SY",
    description:
      "I worked in the mechanical design team of a wind turbines factory where I used SolidWorks to design mechanical parts and produce production drawings from part/Assembly, as well as assembling the wind turbine and calibrating shafts alignment and flanges parallelism  using 'Eazy Lazer' technologies.",
    icon: React.createElement(FaGear),
    date: "2018 - 2020",
  },
  {
    title: "Operations Lead @: BlueBook",
    location: "Homs, SY",
    description:
      "Co-founder of BlueBook for tech services such as fixing and maintaining PCs and laptops on the hardware/Software level, as well as buy and sell new and used laptops and PCs.",
    icon: React.createElement(FaLaptopMedical),
    date: "2018 - 2020",
  },
  {
    title: "Full-Stack Web Development @: Hack Your Future",
    location: "Amsterdam, NL",
    description:
      "I graduated from a 7-month coding bootcamp with modules on HTML, CSS, JavaScript, Node.js, Express.js, MySQL, and React.",
    icon: React.createElement(FaLaptopCode),
    date: "2022 - 2023",
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
