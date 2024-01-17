"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Aeronautical Mechanical Engineering</span>
        , I decided to pursue my passion for programming. I enrolled in a coding
        bootcamp with{" "}
        <a
          href="https://www.hackyourfuture.net/"
          className="text-[#0eff01] underline"
          target="_blank"
        >
          Hack Your Future
        </a>{" "}
        and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I love the feeling of finally figuring out a
        solution to a problem. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Vuejs. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">Front-end position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing sports, watching movies and series, and ride my bike.
      </p>
    </motion.section>
  );
};

export default About;
