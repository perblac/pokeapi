// imports
import { useState } from "react";
// globals

const SearchBar = (props) => {
  // hooks
  const [searchInput, setSearchInput] = useState("");
  // vars
  const { pokemons, setPokemons } = props;

  // functs
  const handleChange = (e) => {
    e.preventDefault;
    const { value } = e.target;
    setSearchInput(value);
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.includes(value),
    );
    setPokemons(filteredPokemons);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setPokemons(pokemons);
      setSearchInput("");
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="inputSearch"
          id="inputSearch"
          placeholder="Buscar pokemons..."
          value={searchInput}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 md:w-1/3 mx-auto p-2.5"
        />
      </div>
    </>
  );
};

export default SearchBar;
