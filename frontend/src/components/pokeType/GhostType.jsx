import React from "react";
import { SlGhost } from "react-icons/sl";

const GhostType = () => {
  return (
    <div className="bg-purple-300 flex items-center w-6 h-6 lg:w-10 lg:h-10 rounded-full">
      <SlGhost className="text-white mx-auto  lg:text-2xl" />
    </div>
  );
};

export default GhostType;
