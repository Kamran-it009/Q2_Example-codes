"use client";
import Image from "next/image";
import Header from "./Header";
import { createContext, useState } from "react";

const SectionContext = createContext(0);
export default function Home() {
  const [state, setstate] = useState(4);
  return (
    <SectionContext.Provider value={state}>
      <div>
        <div>Hello Q2</div>
        <Header />
      </div>
    </SectionContext.Provider>
  );
}

export { SectionContext };
