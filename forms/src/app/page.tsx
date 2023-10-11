"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  console.log("i was rereder");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="App">
      <form
        className="flex justify-center mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="">
          <label className="mr-5">Email</label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: true,
              minLength: 6,
              pattern: /^[^@ ]+@[^@ ]+\.[^.]{2,}$/,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg">Email is not valid.</p>
          )}
        </div>
        <div className="form-control">
          <label className="mr-5">Password</label>
          <input type="password" name="password" {...register("password")} />
        </div>
        <div className="form-control">
          <label></label>
          <button className="bg-green-400 w-20 h-10 p-2 ml-2" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
