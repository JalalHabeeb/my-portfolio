"use client";

import React from "react";
import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      className="my-24 hidden h-16 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent sm:block dark:via-white/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    ></motion.div>
  );
};

export default SectionDivider;
