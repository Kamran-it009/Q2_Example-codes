"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [location, setlocation] = useState("Q2");
  const routing = () => {
    let x = 30;
    if (x <= 20) {
      router.push("./search/customer");
    }
  };
  return (
    <div>
      Hello Q2
      <div onClick={routing} className="cursor-pointer">
        Search Page
      </div>
      <Link href={"./about"}>
        <div>About Page</div>
      </Link>
      <input
        type="text"
        placeholder="Enter a value"
        value={location}
        onChange={(e) => setlocation(e.target.value)}
      />
      <button
        className="bg-orange-300"
        onClick={() => router.push(`./${location}`)}
      >
        Submit
      </button>
    </div>
  );
}
