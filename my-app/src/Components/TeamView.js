import React, { Component } from "react";
import PokemonTeam from "./PokemonTeam";

function componentDidMount() {
  fetch("http://localhost:8080/team/1")
    .then((response) => response.json())
    .then((data) => pokemonTeam(data));
}

let team1 = "";
let team2 = "";
let team3 = "";
let team4 = "";
let team5 = "";
let team6 = "";

function pokemonTeam(team) {
  team1 = team.position1;
  team2 = team.position2;
  team3 = team.position3;
  team4 = team.position4;
  team5 = team.position5;
  team6 = team.position6;
  
}

function TeamView() {
  return (
    <div id="right-box">
      <button onClick={() => componentDidMount()}>Console</button>

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
