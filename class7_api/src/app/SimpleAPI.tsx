"use client";
import { useEffect } from "react";

export default async function SimpleAPI() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/10");
  const data = await response.json();
  console.log(data);

  return (
    <>
      <div>Hello API ...{}</div>;
    </>
  );
}
