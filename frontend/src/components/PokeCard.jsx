import React from "react";
import FireType from "./pokeType/FireType";
import GhostType from "./pokeType/GhostType";
import PlantType from "./pokeType/PlantType";
import WaterType from "./pokeType/WaterType";
import BugType from "./pokeType/BugType";
import NormalType from "./pokeType/NormalType";
import PoisonType from "./pokeType/PoisonType";
import ElectricType from "./pokeType/ElectricType";
import GroundType from "./pokeType/GroundType";
import FairyType from "./pokeType/FairyType";
import FightingType from "./pokeType/FightingType";
import PsychicType from "./pokeType/PsychicType";

const getTypeComponent = (type) => {
  switch (type) {
    case "fire":
      return <FireType />;
    case "ghost":
      return <GhostType />;
    case "grass":
      return <PlantType />;
    case "water":
      return <WaterType />;
    case "bug":
      return <BugType />;
    case "normal":
      return <NormalType />;
    case "poison":
      return <PoisonType />;
    case "electric":
      return <ElectricType />;
    case "ground":
      return <GroundType />;
    case "fairy":
      return <FairyType />;
    case "fighting":
      return <FightingType />;
    case "psychic":
      return <PsychicType />;
    default:
      return null;
  }
};

const PokeCard = ({ pokemon, type1, type2 }) => {
  const { name, id } = pokemon;

  return (
    <div className="container mx-auto bg-slate-200 w-44 lg:w-64 h-60 lg:h-80 rounded-xl flex flex-col px-2 lg:px-4 py-3 mb-2">
      {/* top icons */}
      <div className="w-full flex flex-row justify-between mx-auto">
        <div className="flex flex-row space-x-2">
          {type1 && getTypeComponent(type1)}
          {type2 && getTypeComponent(type2)}
        </div>
        <div className="bg-white rounded-full w-6 h-6 lg:w-10 lg:h-10 flex items-center">
          <img
            className=""
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${id}.png`}
            alt=""
          />
        </div>
      </div>
      {/* pokemon img */}
      <div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt="pokemonImg"
          className="w-36 h-36 mx-auto lg:h-52 lg:w-52"
        />
      </div>
      {/* name, id, and types */}
      <div className="mx-auto flex flex-col items-center lg:text-xl">
        <p>{name}</p>
        <p>{`#${id}`}</p>
      </div>
    </div>
  );
};

export default PokeCard;
