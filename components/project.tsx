"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FiArrowUpRight } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number];

const linkClass =
  "inline-flex items-center gap-1 text-gray-900 underline-offset-4 hover:underline dark:text-white";

const Project = ({
  title,
  description,
  link,
  repo,
  tags,
  imageUrl,
  featured,
}: ProjectProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={clsx(
        "group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white/60 backdrop-blur transition-shadow hover:shadow-xl hover:shadow-black/5 dark:border-white/10 dark:bg-white/[0.04] dark:hover:shadow-black/30",
        featured && "sm:col-span-2 sm:grid sm:grid-cols-2"
      )}
    >
      <div
        className={clsx(
          "relative overflow-hidden bg-gray-100 dark:bg-white/5",
          featured
            ? "aspect-[16/10] sm:order-2 sm:aspect-auto sm:min-h-[20rem]"
            : "aspect-[2/1]"
        )}
      >
        <Image
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          fill
          sizes="(min-width: 640px) 28rem, 100vw"
          quality={95}
          placeholder="blur"
          className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div
        className={clsx(
          "flex flex-1 flex-col p-6",
          featured && "sm:p-8"
        )}
      >
        {featured && (
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-300">
            Featured
          </p>
        )}
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-600 dark:text-white/60">
          {description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-black/10 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:border-white/10 dark:text-white/60"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-5 text-sm font-medium sm:mt-auto sm:pt-6">
          <a href={link} target="_blank" className={linkClass}>
            Live site <FiArrowUpRight aria-hidden="true" />
          </a>
          <a href={repo} target="_blank" className={linkClass}>
            Code <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default Project;
