import React from "react";   

let pokemonName = "";

export default function PokemonMore({parentToChild}){
        
    {getPokemonInformation(parentToChild)}

    function getPokemonInformation(p){
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${p}`)
        .then(response => response.json())
        .then(data => pokemonName = data.name);
        
        }
    return (
    <div>
        
        <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parentToChild}.png`} id = "imag"/>
        <p id = "pokemonId">id: {parentToChild}</p>
        <p id = "name">Name: {pokemonName}</p>
        
       
    </div>
    );
    
}