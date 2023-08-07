import React from "react";
import { RiSearch2Line } from "react-icons/ri";
const TopScreen = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="items-center text-center flex flex-row px-5 py-4">
          <div className=" w-1/4 flex flex-row items-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png"
              alt="pokeapi"
              className="w-14 h-14"
            />
            <h1 className="text-2xl md:text-4xl font-custom1">Pokedex</h1>
          </div>
          <div className=" w-3/4">
            <div className=" flex flex-row items-center justify-center">
              <input
                type="text"
                placeholder="Enter Pokemon name or ID"
                className="px-4 py-3 w-1/2 bg-gray-200 rounded-tl-xl rounded-bl-xl focus:outline-none"
              />
              <div className=" bg-gray-200 rounded-tr-xl rounded-br-xl p-4">
                <RiSearch2Line className="text-gray-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopScreen;
