import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon/';

export async function fetchPokemonInfo(pokemonName) {
  return await axios.get(`${pokemonName}`).then(async response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return await response.data;
  });
}
