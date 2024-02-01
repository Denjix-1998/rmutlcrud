import React from "react";
import { BiCheck } from "react-icons/bi";
export default function Success({ message }) {
  return (
    <div className="flex justify-center mx-auto border border-yellow-200 bg-yellow-400  w-3/6 text-md my-4 py-2 text-center bg-opacity-5">
      <div className="success container mx-auto ">
        Form Data Added
        <BiCheck size={25} color={"rbg(34,197,94)"}></BiCheck>
      </div>
    </div>
  );
}
