import axios from "axios";

const getPokemon = async (pokemon) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default getPokemon;
