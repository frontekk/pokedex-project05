import React, { useState, useEffect } from "react";
import TopScreen from "../components/TopScreen";
import BannerPoke from "../components/BannerPoke";
import PokeCard from "../components/PokeCard";
import axios from "axios";
import IndividualPokeCard from "../components/IndividualPokeCard";
import PokemonModal from "../components/PokemonModal";

const Home = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null); // State for selected Pokemon
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=100"
        );
        const results = response.data.results;

        // Fetch details for each Pokemon
        const pokemonDetails = await Promise.all(
          results.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url);
            return pokemonResponse.data;
          })
        );

        setPokemonData(pokemonDetails);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemonData();
  }, []);

  // Function to handle card click and open the modal
  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  };

  return (
    <div>
      <TopScreen />
      <div className="container mx-auto">
        <BannerPoke />
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {pokemonData.length > 0 &&
            pokemonData.map((pokemon) => (
              <PokeCard
                key={pokemon.id}
                pokemon={pokemon}
                type1={pokemon.types[0]?.type.name}
                type2={pokemon.types[1]?.type.name}
                onClick={() => handleCardClick(pokemon)} // Pass onClick handler
              />
            ))}
        </div>
        {/* <IndividualPokeCard /> */}
        {isModalOpen && (
          <PokemonModal
            pokemon={selectedPokemon}
            onClose={() => setIsModalOpen(false)} // Close modal handler
          />
        )}
      </div>
    </div>
  );
};

export default Home;
