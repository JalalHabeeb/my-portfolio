"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { earlierExperienceData, experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const Experience = () => {
  // The section is taller than most viewports, so a 75% threshold never fires.
  const { ref } = useSectionInView("Experience", 0.3);

  return (
    <section
      ref={ref}
      id="experience"
      className="mb-28 w-full max-w-[42rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>My Experience</SectionHeading>

      <ol className="relative ml-1 border-l border-black/10 dark:border-white/10">
        {experiencesData.map((item, index) => (
          <motion.li
            key={`${item.company}-${item.date}`}
            className="relative pb-10 pl-8 last:pb-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span
              aria-hidden="true"
              className={clsx(
                "absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ring-4 ring-gray-50 dark:ring-gray-950",
                index === 0
                  ? "bg-emerald-500"
                  : "bg-gray-300 dark:bg-white/30"
              )}
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="font-semibold">
                {item.role}{" "}
                <span className="font-normal text-gray-500 dark:text-white/50">
                  · {item.company}
                </span>
              </h3>
              <p className="shrink-0 text-sm tabular-nums text-gray-500 dark:text-white/50">
                {item.date}
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-white/50">
              {item.location}
            </p>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-white/70">
              {item.description}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-black/10 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:border-white/10 dark:text-white/60"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>

      <div className="mt-14">
        <h3 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-white/50">
          Before tech
        </h3>
        <ul className="mt-4 divide-y divide-black/5 rounded-2xl border border-black/10 bg-white/60 backdrop-blur dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.04]">
          {earlierExperienceData.map((item) => (
            <li
              key={`${item.company}-${item.date}`}
              className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
            >
              <div>
                <p className="font-medium">
                  {item.role}{" "}
                  <span className="font-normal text-gray-500 dark:text-white/50">
                    · {item.company}
                  </span>
                </p>
                <p className="mt-0.5 text-sm text-gray-500 dark:text-white/50">
                  {item.summary}
                </p>
              </div>
              <p className="shrink-0 text-sm tabular-nums text-gray-500 dark:text-white/50">
                {item.date}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
