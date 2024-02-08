/**
 * Archivo que maneja la llamada a la API de PokeAPI
 * Contiene funciones específicas para obtener información sobre Pokémon.
 */

// imports
// vars

// functs

const pokeApi = async (urlApi) => {
    try {
        const response = await fetch(urlApi);
        if(!response.ok) throw new Error('Error fetching');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(error);
    }
}

export default pokeApi


// getAll
/**
 * let pokemons = 
 * si localStorage.getItem('pokemons')
 * else fetch "https://pokeapi.co/api/v2/pokemon?offset=100&limit=100"
 *      y localStorage.setItem(JSON.stringify('pokemons'))
 * return pokemons
 */
// getOne(namePokemon)
/**
 * let pokemonsFull = JSON.parse(localStorage.getItem('pokemonsFull')) ?? []
 * if namePokemon in pokemonsFull return esePokemon
 * else fetch "https://pokeapi.co/api/v2/pokemon/${namePokemon}"
 *      y pokemonsFull.push('namePokemon')
 *      y localStorage.setItem(JSON.stringify('pokemonsFull'))
 * return esePokemon
 */

// getHabilities(namePokemon)
/**
 * const pokemon = getOne(namePokemon);
 * const pokeAbs = pokemon.abilities;
 * const resultAbs = [];
 * let abilities = JSON.parse(localStorage.getItem('abilities')) ?? []
 * foreach ability of pokeAbs
 *      if !abilities.find(elem => elem.name === ability name)
 *          fetch url //("https://pokeapi.co/api/v2/ability/numeroHabilidad")
 *          y abilities.push('ability')
 *          y localStorage.setItem(JSON.stringify('abilities'))
 *          y resultAbs.push('ability')
 *      else
 *          resultAbs.push(abilities.find(elem => elem.name === ability name))
 *  return resultAbs
 */

// exports
