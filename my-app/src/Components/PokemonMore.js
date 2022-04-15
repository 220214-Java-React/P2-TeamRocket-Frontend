

var Pocket = []
    async function getPokemonInformation(i){
         await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`)
        .then(response => response.json())
        .then((data) => Pokemon(data));

        
    }
    
        function Pokemon(j){
                Pocket.push(j.name);
                Pocket.push(j.id)
            }


function PokemonMore(i){

    
    
    

    console.log(i)
    return(
    <div id = "left-box">
        <button onClick={()=> getPokemonInformation(i)}>Click me!</button>
        <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`} id="imag">
        
        </img>
        <div id = "name">
        Name: {Pocket[0]}
        </div>
        <div id="nat">
        National Dex Number: {Pocket[1]}
        </div>
    </div>
    )
}
export default PokemonMore;