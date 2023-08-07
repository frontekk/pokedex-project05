import React from "react";
import { AiFillBug } from "react-icons/ai";
const BugType = () => {
  return (
    <div className="bg-lime-300 flex items-center w-6 h-6 lg:w-10 lg:h-10 rounded-full">
      <AiFillBug className="text-white mx-auto  lg:text-2xl" />
    </div>
  );
};

export default BugType;
