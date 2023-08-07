"use client";
import { useReducer } from "react";

function reducer(state: any, action: any) {
  if (action.type === "inc") {
    return {
      age: state.age + 1,
      height: state.height + 2,
    };
  }
  if (action.type === "dec") {
    return {
      age: state.age - 1,
      height: state.height - 2,
    };
  }
  if (action.type === "reset") {
    return {
      age: (state.age = 0),
      height: (state.age = 10),
    };
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 0, height: 10 });
  return (
    <>
      <div className="flex justify-evenly mt-20">
        <button
          className="bg-red-400 w-auto h-auto p-2"
          onClick={() => {
            dispatch({ type: "inc" });
          }}
        >
          Increment age
        </button>
        <button
          className="bg-blue-400 w-auto h-auto p-2"
          onClick={() => {
            dispatch({ type: "dec" });
          }}
        >
          decrement age
        </button>
        <button
          className="bg-green-400 w-auto h-auto p-2"
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset age
        </button>
      </div>
      <div className="flex flex-col justify-center items-center m-10">
        <p>Hello! You are {state.age}</p>
        <p>Hello! Your Height: {state.height}</p>
      </div>
    </>
  );
}
