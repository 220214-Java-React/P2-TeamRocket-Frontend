

var Team =[];

Team.push(Math.round((Math.random() *(151 -1) +1)));
Team.push(Math.round((Math.random() *(151 -1) +1)));
Team.push(Math.round((Math.random() *(151 -1) +1)));
Team.push(Math.round((Math.random() *(151 -1) +1)));
Team.push(Math.round((Math.random() *(151 -1) +1)));
Team.push(Math.round((Math.random() *(151 -1) +1)));
console.log(fetch(`https://pokeapi.co/api/v2/pokemon/1`));



function PokemonTeam(){
    return(
    <div id = "left-box">
        {<img src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Team[0]}.png`}></img>}
        
        {<img src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Team[1]}.png`}></img>}
        {<img src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Team[2]}.png`}></img>}
        {<img src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Team[3]}.png`}></img>}
        {<img src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Team[4]}.png`}></img>}
        {<img src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Team[5]}.png`}></img>}
    </div>
    )
}

export default PokemonTeam;