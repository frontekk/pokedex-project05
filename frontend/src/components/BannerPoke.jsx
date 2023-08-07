import React from "react";
import { RiSearch2Line } from "react-icons/ri";

const BannerPoke = () => {
  const RandomNum = Math.floor(Math.random() * 810) + 1;

  return (
    <>
      <div className="container mx-auto bg-blue-300 w-4/5 md:w-auto md:mt-12 lg:mt-20 h-40 md:h-44 flex flex-col  md:flex-row items-center px-4 py-3 md:rounded-xl rounded-bl-xl rounded-br-xl">
        <div className="text-white w-full md:w-1/2">
          <h1 className="text-4xl">Your Oficcial Pokedex</h1>
          <p className="text-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
        {/* SEARCH */}
        <div className=" w-full mx-auto flex flex-row items-center justify-center md:hidden">
          <input
            type="text"
            placeholder="Enter Pokemon name or ID"
            className="px-4 py-3 w-full bg-gray-200 rounded-tl-xl rounded-bl-xl focus:outline-none"
          />
          <div className="bg-gray-200 rounded-tr-xl rounded-br-xl p-4">
            <RiSearch2Line className="text-gray-500 cursor-pointer" />
          </div>
        </div>
        {/* IMG */}
        <div className="hidden md:flex mx-auto">
          <div className=" h-52 w-full flex flex-col items-start">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${RandomNum}.png`}
              className="relative -top-3 h-60 lg:relative lg:-top-20 lg:h-80"
            />
            <div className="w-full lg:h-36 p-2 bg-white relative -top-12 z-10 lg:-top-32 ">
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerPoke;
