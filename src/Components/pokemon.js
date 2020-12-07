import React, { useState } from "react";
import getPokemon from "./../Services/getPokemon";


const Pokemon = () => {
  const [pokemon, setPokemon] = useState({});
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);


  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //informacion pokemon
    getPokemon(pokemon).then(responsePokemon => {
      if(!responsePokemon) return

      setPokemonType(responsePokemon.types);
      setPokemonData([responsePokemon]);
    })


  };


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="enter pokemon name"
          />
        </label>
      </form>
      {pokemonData.map((data) => {
        return (
          <div className="container">
            <img src={data.sprites["front_default"]} />
            <div className="divTable">
              <div className="divTableBody">
                <div className="divTableRow">
                  {pokemonType.map((type) => {
                    return (
                      <div className="divTableCell">{type.type.name}</div>
                    )
                  }
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};




export default Pokemon;

