import React from "react";
import { useState } from "react";
import PokemonTeam from "./PokemonTeam";


var pokemon = []
function TeamView() {
  const [ pokemonState, setPokemonState] = useState('')
  const pokemonToState = () => {
   

    fetch("http://localhost:8080/team/1")
    .then((response) => response.json())
    .then((data) => dataToChild(data));

    const dataToChild = (i) => {
      console.log(i)

    }
  }


  return (
    <div id="right-box">
      <button onClick={() => pokemonToState()}>Console</button>

      {
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${team1}.png`}
          height="100px"
          width="100px"
          id="image-box"
        ></img>
      }
      {
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${team2}.png`}
          height="100px"
          width="100px"
          id="image-box"
        ></img>
      }

      {
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${team3}.png`}
          height="100px"
          width="100px"
          id="image-box"
        ></img>
      }

      {
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${team4}.png`}
          height="100px"
          width="100px"
          id="image-box"
        ></img>
      }

      {
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${team5}.png`}
          height="100px"
          width="100px"
          id="image-box"
        ></img>
      }

      {
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${team6}.png`}
          height="100px"
          width="100px"
          id="image-box"
        ></img>
      }
    </div>
  );
}

export default TeamView;
