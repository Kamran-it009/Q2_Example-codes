"use client";
import { useEffect } from "react";

export default async function Home() {
  useEffect(() => {
    async function gettingdata() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/3",
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    }
    gettingdata();
  }, []);

  return (
    <div>
      <div>Hello API ...{}</div>
    </div>
  );
}
