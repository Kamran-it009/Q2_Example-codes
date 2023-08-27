"use client";
import { useEffect, useState } from "react";

export default function UseEffectAPI() {
  useEffect(() => {
    const gettingdata = async (): Promise<void> => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/10",
        {
          // method: "DELETE",
        }
      );
      const data = await response.json();
      console.log(data);
    };
    gettingdata();
  });
  return <div>Hello API ...{}</div>;
}
