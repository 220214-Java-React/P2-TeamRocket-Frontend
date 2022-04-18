import React from "react";   

 let pokemonDefault = '';
 let pokemonDescription ='';
 let pokemonDefaultId = '';
 let pokemonDefaultImage = '';
export default function PokemonMore({parentToChild, pokemonToChild}){
   
    
    if(parentToChild > 0){
        pokemonDefaultId = parentToChild;
        pokemonDefaultImage = parentToChild;
    }else{
        pokemonDefaultId = '1'
        pokemonDefaultImage = 1
    }

    
    if(pokemonToChild.name == undefined){
        pokemonDefault = "bulbasaur"
        pokemonDescription="A strange seed was planted on its back at birth.The plant sprouts and grows with this POKéMON."
    }else{
        pokemonDefault = pokemonToChild.name;
        pokemonDescription=pokemonToChild.flavor_text_entries[1].flavor_text;
        
    }
       
     
    return (
    <div>
        <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDefaultImage}.png`} id = "imag"/>
        <p id = "pokemonId">id: {pokemonDefaultId}</p>
        <p id = "name">Pokemon: {pokemonDefault}</p>
        <p id ="desc">Description: {pokemonDescription}</p>
        
       
    </div>
    

    );
   
    
}