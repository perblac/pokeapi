import { useEffect, useState } from "react";
import pokeApi from "../../api/pokeApi";
import Spinner from "../Spinner";
import PokemonCard from "../PokemonCard/PokemonCard";
import SearchBar from "../SearchBar/SearchBar";
import PokemonModal from "../PokemonModal/PokemonModal";
import noImg from '../../assets/images/noImg.png';

const URL = import.meta.env.VITE_API_URL;

const PokeApi = () => {
  // hooks
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [originalPokemonsArray, setOriginalPokemonsArray] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [offset, setOffset] = useState(0)

  // functs
  const handleDelete = (id) => {
    const updatePokemons = pokemons.filter((pokemon) => pokemon.id !== id);
    setPokemons(updatePokemons);
  };

  const openModal = (pokemon) => {
    setIsModalOpen(true);
    setSelectedPokemon(pokemon);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPokemon(null);
  };

  const handleClickOffset = (num) => {
    setLoading(true);
    setOffset((prev) => prev + num);
  };

  // effects
  useEffect(() => {
    const fetchData = async () => {
      const data = await pokeApi(URL + `&offset=${offset}`);
      // console.log(data);
      // creamos una variable que contenga la info
      // que necesito de todos los pokemons
      // Será una promesa que consumiré
      // cuando todas las promesas hagan resolve
      const pokemonsData = await Promise.all(
        data.map(async ({ url }) => {
          try {
            const resp = await fetch(url);
            if (!resp.ok) throw new Error("Error map fetching");
            const pokemonDetails = await resp.json();

            const pokemonObject = {
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              image:
                pokemonDetails.sprites.other.dream_world.front_default ||
                pokemonDetails.sprites.other["official-artwork"].front_default ||
                pokemonDetails.sprites.other.home.front_default ||
                pokemonDetails.sprites.front_default ||
                noImg,
              image2:
                pokemonDetails.sprites.other["official-artwork"].front_default || noImg,
              image3: pokemonDetails.sprites.other.home.front_default || noImg,
              imageAnimFront:
                pokemonDetails.sprites.other.showdown.front_default || noImg,
              imageAnimBack: pokemonDetails.sprites.other.showdown.back_default || noImg,
              abilities: pokemonDetails.abilities,
              stats: pokemonDetails.stats,
              type: pokemonDetails.types,
              height: pokemonDetails.height,
              weight: pokemonDetails.weight,
              media: (
                pokemonDetails.stats.reduce((a, b) => a + b.base_stat, 0) /
                pokemonDetails.stats.length
              ).toFixed(2),
            };
            return pokemonObject;
          } catch (error) {
            console.error(error);
          }
        }),
      );
      setPokemons(pokemonsData);
      setOriginalPokemonsArray(pokemonsData);
      // console.log(pokemonsData);
      // como hemos terminado de cargar ...
      setLoading(false);
    };

    fetchData();
  }, [offset]);

  return (
    <>
      <SearchBar pokemons={originalPokemonsArray} setPokemons={setPokemons} />
      <div className="mx-auto w-1/2 flex justify-between">
        {offset > 0 ? (
          <button
            className="mt-4 p-2 bg-blue-500 text-white rounded"
            onClick={() => handleClickOffset(-100)}
          >
            -100
          </button>
        ) : (
          <><div className="mt-4 p-2 bg-red-500 text-white rounded line-through">-100</div></>
        )}
        <div className="mt-4 p-2 bg-slate-200 text-gray-800 font-semibold rounded">
          {offset} - {offset+99}
        </div>
        {offset < 1300 ? (
          <button
            className="mt-4 p-2 bg-blue-500 text-white rounded"
            onClick={() => handleClickOffset(+100)}
          >
            +100
          </button>
        ) : (
          <><div className="mt-4 p-2 bg-red-500 text-white rounded line-through">+100</div></>
        )}
      </div>

      <div className="flex flex-wrap flex-grow justify-center mb-10">
        {loading ? (
          <Spinner />
        ) : (
          pokemons.map((pokemon) => (
            <PokemonCard
              pokemon={pokemon}
              key={pokemon.id}
              handleDelete={handleDelete}
              openModal={openModal}
            />
          ))
        )}
      </div>

      <PokemonModal
        isOpen={isModalOpen}
        selectedPokemon={selectedPokemon}
        onClose={closeModal}
      />
    </>
  );
};

export default PokeApi;
