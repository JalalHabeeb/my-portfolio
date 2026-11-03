"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section";
import type { SectionName } from "@/lib/types";
import ThemeSwitch from "./theme-switch";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu with Escape, like other disclosure menus.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const goTo = (name: SectionName) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[999] sm:top-6">
      <motion.div
        className="mx-auto flex h-14 items-center justify-between border-b border-black/5 bg-white/80 px-4 backdrop-blur-md dark:border-white/10 dark:bg-gray-950/75 sm:h-[3.25rem] sm:w-fit sm:gap-2 sm:rounded-full sm:border sm:px-2 sm:shadow-lg sm:shadow-black/[0.03]"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Link
          href="#home"
          className="font-semibold tracking-tight sm:hidden"
          onClick={() => goTo("Home")}
        >
          Jalal Habeeb
        </Link>

        <nav aria-label="Main" className="hidden sm:block">
          <ul className="flex items-center text-[0.9rem] font-medium text-gray-500 dark:text-white/50">
            {links.map((link) => (
              <li key={link.hash} className="relative">
                <Link
                  className={clsx(
                    "relative flex items-center px-3 py-2 transition hover:text-gray-950 dark:hover:text-white",
                    activeSection === link.name &&
                      "text-gray-950 dark:text-white"
                  )}
                  href={link.hash}
                  aria-current={
                    activeSection === link.name ? "true" : undefined
                  }
                  onClick={() => goTo(link.name)}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-full bg-black/5 dark:bg-white/10"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:border-l sm:border-black/10 sm:pl-2 sm:dark:border-white/10">
          <ThemeSwitch />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-gray-700 transition hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10 sm:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Main"
            className="border-b border-black/5 bg-white/95 px-4 pb-4 pt-2 backdrop-blur-md dark:border-white/10 dark:bg-gray-950/95 sm:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    className={clsx(
                      "block rounded-lg px-3 py-3 font-medium transition hover:bg-black/5 dark:hover:bg-white/10",
                      activeSection === link.name
                        ? "text-gray-950 dark:text-white"
                        : "text-gray-500 dark:text-white/60"
                    )}
                    aria-current={
                      activeSection === link.name ? "true" : undefined
                    }
                    onClick={() => goTo(link.name)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
