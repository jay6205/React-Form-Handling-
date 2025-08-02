import React from "react";
export default function Card({ user ,handleRemove,id}) {
  return (
    <>
      <div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2">
        <div className="image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden">
          <img className="w-full h-full object-cover" src={user.img} alt="" />
        </div>
        <h1 className="mt-2 text-xl font-semibold text-center">{user.name}</h1>
        <h4 className="opacity-40 text-xs font-semibold">{user.email}</h4>
        <p className="text-center text-xs font-semibold mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat odit
          suscipit excepturi?
        </p>
        <button onClick={()=>handleRemove(id)} className="px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white mt-4 cursor-pointer">
          Remove It
        </button>
      </div>
    </>
  );
}
