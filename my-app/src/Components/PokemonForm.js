import {SaveIcon} from '@heroicons/react/outline'
import React from 'react';
const BASE_API_URL = "http://localhost:8080";
const RESOURCE_URL = `${BASE_API_URL}/pokemon`;

function PokemonForm() {
    function submitPokemon(){

        let pokemonid = document.getElementById("pokemonid");
        console.log(pokemonid.value);
        let pokemon ={
            pokemonid:pokemonid.value
        }
        let response = fetch(RESOURCE_URL, {
            header: "pokemonid",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(pokemon),
            }).then(response => response.json);
            console.log(response.pokemonid);
        
    }
        
        return (
            <div id= "left-box">
            
                <div id="pokemonID">
                <input
                type ="text"
                id="pokemonid"
                placeholder='Enter ID'
                required
                ></input>
                </div>
                
                <div id = "pokemonSave">
                <button
                type="submit"
                onClick={submitPokemon}>
                    <SaveIcon />
                <span>Save</span>
                </button>
                </div>
            </div>
           
        );
}
export default PokemonForm;