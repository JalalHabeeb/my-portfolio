"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 transition hover:bg-black/5 hover:text-gray-950 dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
