import React from "react";

const Attack = ({ moves }) => {
  return (
    <div>
      {moves.length > 0 && (
        <select>
          {moves &&
            moves.map((pokemonMove) => {
              return (
                <option value={pokemonMove.move.name}>
                  {pokemonMove.move.name}
                </option>
              );
            })}
        </select>
      )}
    </div>
  );
};

export default Attack;
