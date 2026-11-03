import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight">
      {children}
    </h2>
  );
};

export default SectionHeading;
