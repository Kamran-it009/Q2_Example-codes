"use client";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [mydata, setmydata] = useState(null);
  useEffect(() => {
    const gettingdata = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos/6");
      const getdata = await data.json();
      // fetch("https://jsonplaceholder.typicode.com/todos/1")
      //   .then((response) => response.json())
      //   .then((json) => console.log(json));
      console.log(getdata);

      setmydata(getdata);
    };
    gettingdata();
  }, []);

  return (
    <div>
      {/* ts-ignore */}
      <div>Hello API...{mydata?.title}</div>
    </div>
  );
};

export default Posts;
