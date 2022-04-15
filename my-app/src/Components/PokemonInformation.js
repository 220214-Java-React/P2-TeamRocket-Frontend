import React from "react";
import PokemonMore from "./PokemonMore";
import { useState, setState } from "react";
import { Component } from "react";

var pokeId=0;

 export default function PokemonInformation(){
     const [pokemon, setPokemon]= useState(' ')
     const parentToChild = (i) => {
         setPokemon(i);
     }
        
        const pokemonArray =[];
        for(let i = 1; i<= 151; i++){
            
            
                   {pokemonArray.push(<img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`} width="50"height="50" id ="image" key={i} onClick={()=>parentToChild(i)}></img>)};
               
        }


        
       
            return(
                <>
                <span id ="left-box">
                    <PokemonMore parentToChild={pokemon} /> 
                </span>
                
                <div id= "right-box">
                    {pokemonArray}
                    
                </div>
               
                
                
                </>
            );
         
}

