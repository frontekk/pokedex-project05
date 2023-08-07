import React, { useRef, useEffect } from "react";

const PokemonModal = ({ pokemon, onClose }) => {
  const modalRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  if (!pokemon) {
    return null;
  }

  return (
    <div className=" fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
      <div
        className="scale-up-center bg-white rounded-lg p-4 w-1/2 h-72"
        ref={modalRef}
      >
        <div className="flex justify-center">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            className="w-20 h-20"
          />
        </div>
        <h2 className="text-center text-xl font-bold mt-2">{pokemon.name}</h2>
        <div className="mt-4">
          <p className="text-sm">Types:</p>
          <ul className="flex space-x-2">
            {pokemon.types.map((type) => (
              <li
                key={type.slot}
                className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md text-xs"
              >
                {type.type.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonModal;
