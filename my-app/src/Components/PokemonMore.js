import React from "react";   


 
       
export default function PokemonMore({parentToChild, pokemonToChild}){

    

       
     
    return (
    <div>
        <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parentToChild}.png`} id = "imag"/>
        <p id = "pokemonId">id: {parentToChild}</p>
        <p id = "name">Pokemon: {pokemonToChild.name}</p>
        <p id ="desc">Description: {(pokemonToChild.flavor_text_entries[1].flavor_text)}</p>
        
       
    </div>
    

    );
   
    
}