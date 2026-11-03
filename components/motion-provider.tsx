"use client";

import React from "react";
import { MotionConfig } from "framer-motion";

// Skip transform and layout animations for visitors who ask their OS for
// reduced motion; opacity fades still run.
const MotionProvider = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);

export default MotionProvider;
