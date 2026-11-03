"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section";

const iconLinkClass =
  "flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/70 text-lg text-gray-700 backdrop-blur transition hover:-translate-y-0.5 hover:text-gray-950 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:text-white";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[52rem] scroll-mt-[100rem] px-4 text-center sm:mb-0"
      id="home"
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 py-1 pl-1 pr-4 text-sm text-gray-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/70">
          <Image
            src="/jalal.jpg"
            alt="Portrait of Jalal"
            width={64}
            height={64}
            quality={95}
            priority
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Currently at Appical · Amsterdam
        </div>

        <h1 className="mt-8 text-balance text-4xl font-semibold tracking-tight sm:text-6xl sm:leading-[1.05]">
          Hi, I&apos;m Jalal. I build web apps with{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-indigo-300 dark:to-fuchsia-300">
            React &amp; TypeScript
          </span>
          .
        </h1>

        <p className="mt-6 max-w-[36rem] text-pretty text-lg leading-relaxed text-gray-600 dark:text-white/60">
          Front-end developer who moved into software from aeronautical
          engineering. I love the problem-solving side of building interfaces.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="#experience"
            className="group flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-white/90"
            onClick={() => {
              setActiveSection("Experience");
              setTimeOfLastClick(Date.now());
            }}
          >
            See my experience
            <BsArrowRight className="transition group-hover:translate-x-1" />
          </Link>
          <a
            href="/CV.pdf"
            download
            className="group flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-6 py-3 font-medium backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          >
            Download CV
            <HiDownload className="opacity-60 transition group-hover:translate-y-0.5" />
          </a>
          <div className="flex gap-3">
            <a
              className={iconLinkClass}
              href="https://www.linkedin.com/in/jalal-habeeb/"
              target="_blank"
              aria-label="LinkedIn profile"
            >
              <BsLinkedin />
            </a>
            <a
              className={iconLinkClass}
              href="https://github.com/JalalHabeeb"
              target="_blank"
              aria-label="GitHub profile"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
