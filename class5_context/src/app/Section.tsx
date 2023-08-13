"use client";
import React, { useContext } from "react";
import { SectionContext } from "./page";

const Section = () => {
  const state = useContext(SectionContext);
  return (
    <div>
      <div className="bg-red-400">section- Lesson {state}</div>
    </div>
  );
};

export default Section;
