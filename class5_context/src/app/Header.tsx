"use client";
import React, { useContext } from "react";
import Section from './Section'

const Header = () => {
  return (
    <div className="bg-green-400 p-5">
      Header
      <Section />
      <Section />
      <Section />
    </div>
  );
};

export default Header;