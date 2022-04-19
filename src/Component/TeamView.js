import React from "react";
import { useState } from "react";
import PokemonTeam from "./PokemonTeam";

var pokemon = [];
function TeamView() {
  const [pokemonState, setPokemonState] = useState("");
  const pokemonToState = () => {
    
    fetch("http://localhost:8080/team/5")
      .then((response) => response.json())
      .then((data) => dataToChild(data));

    const dataToChild = (i) => {
      setPokemonState(i);
    };
  };

  return (
    <div id="right-box">
      {pokemonToState()}

      <h2 name= "heading" >Current Team</h2>
      {
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonState.position1}.png`}
          height="100px"
          width="100px"
          id="image-box"
        ></img>
      }
      {
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonState.position2}.png`}
          height="100px"
          width="100px"
          id="image-box"
        ></img>
      }

      {
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonState.position3}.png`}
          height="100px"
          width="100px"
          id="image-box"
        ></img>
      }

      {
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonState.position4}.png`}
          height="100px"
          width="100px"
          id="image-box"
        ></img>
      }

      {
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonState.position5}.png`}
          height="100px"
          width="100px"
          id="image-box"
        ></img>
      }

      {
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonState.position6}.png`}
          height="100px"
          width="100px"
          id="image-box"
        ></img>
      }
    </div>
  );
}

export default TeamView;
