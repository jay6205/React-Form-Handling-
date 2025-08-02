import React from "react";
import { useForm } from "react-hook-form";
export default function Form({ handleFormSubmit }) {
  const { register, handleSubmit, reset } = useForm();

  return (
    <>
      <div className="mt-10 flex justify-center">
        <form
          className="flex gap-10 "
          onSubmit={handleSubmit((data) => {
            if (data.name === "" || data.email === "" || data.img === "") {
              alert("Please Enter data");
            } else {
              handleFormSubmit(data);
              reset();
            }
          })}
        >
          <input
            {...register("name")}
            type="text"
            className=" outline-none px-2 py-1 rounded-md font-semibold bg-white text-black"
            placeholder="name"
          />
          <input
            {...register("email")}
            type="text"
            className=" outline-none px-2 py-1 rounded-md font-semibold bg-white text-black"
            placeholder="email"
          />
          <input
            {...register("img")}
            type="text"
            className=" outline-none px-2 py-1 rounded-md font-semibold bg-white text-black"
            placeholder="Image url"
          />
          <input
            type="submit"
            className="rounded-md px-5 py-1 bg-blue-500 text-white font-semibold cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}
