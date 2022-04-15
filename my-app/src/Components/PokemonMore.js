import { Component } from "react";
import { useState } from "react";
// var Pocket = []
//     function getPokemonInformation(){
//         fetch(`https://pokeapi.co/api/v2/pokemon-species/${}`)
//         .then(response => response.json())
//         .then((data) => Pokemon(data));

        
//     }
    
//     function Pokemon(j){
//             Pocket.push(j.name);
//             Pocket.push(j.id)
//     }



export default function PokemonMore({parentToChild}){
    const [p, setP] = useState(`https://pokeapi.co/api/v2/pokemon/1`);
   
    fetch(`https://pokeapi.co/api/v2/pokemon/${parentToChild}`)
    .then(response => response.json())
    .then(data => Pokemon(data));
  
     if(parentToChild == null){
        fetch(`https://pokeapi.co/api/v2/pokemon/1`)
        .then(response => response.json())
        .then(data => Pokemon(data));
      
     }   
    function Pokemon(j){
        
       
        setP(j);
    }
    return (
    <div>
        <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parentToChild}.png`} id = "imag"/>
       <p>Name: {p.name}</p>
       
    </div>
    );
    
   
}