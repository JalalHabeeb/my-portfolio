import myPortfolioImg from "@/public/myPortfolio.png";
import promptopiaImg from "@/public/promptopia.png";
import iconPhotographyImg from "@/public/iconPhotography.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// Tech roles, newest first. Shown as the main experience list.
export const experiencesData = [
  {
    role: "Front-end Developer",
    company: "Appical",
    location: "Amsterdam, NL",
    date: "2024 – now",
    description:
      "I build and maintain the company's web applications in a team of developers.",
    tags: ["React", "Redux", "TypeScript", "Storybook"],
  },
  {
    role: "Full-Stack Web Development",
    company: "Hack Your Future",
    location: "Amsterdam, NL",
    date: "2022 – 2023",
    description:
      "A 7-month coding bootcamp with modules on HTML, CSS, JavaScript, Node.js, Express.js, MySQL and React.",
    tags: ["JavaScript", "React", "Node.js", "MySQL"],
  },
  {
    role: "Front-end Web Developer",
    company: "Stirring Interactive",
    location: "Homs, SY",
    date: "2009 – 2010",
    description:
      "I built websites with HTML and CSS, worked closely with clients to adjust designs on request, and kept an open line with the other development teams.",
    tags: ["HTML", "CSS"],
  },
] as const;

// Roles before the move into software. Shown as a compact list.
export const earlierExperienceData = [
  {
    role: "Mechanical Design Engineer",
    company: "WDRVM",
    summary:
      "Designed wind-turbine parts and production drawings in SolidWorks, and assembled and aligned turbines.",
    date: "2018 – 2020",
  },
  {
    role: "Co-founder & Operations Lead",
    company: "BlueBook",
    summary: "Repair, maintenance and sales of new and used PCs and laptops.",
    date: "2018 – 2020",
  },
  {
    role: "Translator & Proofreader",
    company: "Self-employed",
    summary:
      "English/Arabic translation for local and international companies.",
    date: "2010 – 2018",
  },
  {
    role: "B.Sc. Aeronautical Mechanical Engineering",
    company: "Aleppo University",
    summary: "Aleppo, Syria.",
    date: "2003 – 2009",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio",
    description:
      "This site, built with Next.js 16 and React 19: a server-action contact form that sends through Resend, dark mode without a flash on load, scroll-aware navigation and a responsive, accessible layout.",
    link: "https://jalalhabeeb.vercel.app/",
    repo: "https://github.com/JalalHabeeb/my-portfolio",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion", "Resend"],
    imageUrl: myPortfolioImg,
    featured: true,
  },
  {
    title: "Promptopia",
    description:
      "An AI prompt-sharing app for discovering, creating and sharing prompts, with NextAuth sign-in and a MongoDB backend.",
    link: "https://promptopia-three-pink.vercel.app/",
    repo: "https://github.com/JalalHabeeb/promptopia",
    tags: ["Next.js", "NextAuth", "MongoDB"],
    imageUrl: promptopiaImg,
    featured: false,
  },
  {
    title: "Icon Photography",
    description:
      "A website for a photographer and videographer who covers special occasions.",
    link: "https://icon-photography.vercel.app/",
    repo: "https://github.com/JalalHabeeb/icon-photography",
    tags: ["Next.js", "Tailwind"],
    imageUrl: iconPhotographyImg,
    featured: false,
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
