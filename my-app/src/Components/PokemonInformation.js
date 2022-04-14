



 function PokemonInformation(){
     
        const pokemonArray =[];
        for(let i = 1; i<= 151; i++){
            
            
                   {pokemonArray.push(<img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`} width="50"height="50" id ="image" key={i}></img>)};
               
        }

        return(
            <div id= "right-box">
            {pokemonArray}

            </div>
        );
    }

export default PokemonInformation;