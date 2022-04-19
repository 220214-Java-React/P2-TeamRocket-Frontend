import React from "react";
import PokemonMore  from "./PokemonMore";
import { useState} from "react";


 export default function PokemonInformation(){
     const [pokemon, setPokemon]= useState('')
     const[pokemonInfo, setPokemonInfo]= useState('')
     const parentToChild = (i) => {
         setPokemon(i);

         fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`)
        .then(response => response.json())
        .then(data => pokemonToChild(data));

        
        
        const pokemonToChild = (i) => {
            setPokemonInfo(i)
        }
        
     }
        
        const pokemonArray =[];
        for(let i = 1; i<= 151; i++){
            
            
                   {pokemonArray.push(<img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`} id ="image" key={i} onClick={()=>parentToChild(i)}></img>)};
               
        }


        
       
            return(
                <>
                
                <span id ="left-box">
                    <PokemonMore parentToChild={pokemon} pokemonToChild ={pokemonInfo} /> 
                </span>
                
                <div id= "right-box">
                    {pokemonArray}
                    
                </div>
               
                
                
                </>
            );
         
}