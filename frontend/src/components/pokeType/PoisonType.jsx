import React from "react";
import { GiPoison } from "react-icons/gi";
const PoisonType = () => {
  return (
    <div className="bg-purple-300 flex items-center w-6 h-6 lg:w-10 lg:h-10 rounded-full">
      <GiPoison className="text-white mx-auto  lg:text-2xl" />
    </div>
  );
};

export default PoisonType;
