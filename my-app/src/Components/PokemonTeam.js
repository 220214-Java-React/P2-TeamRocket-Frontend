

var Team =[];

Team.push(Math.round((Math.random() *(893 -1) +1)));
Team.push(Math.round((Math.random() *(893 -1) +1)));
Team.push(Math.round((Math.random() *(893 -1) +1)));
Team.push(Math.round((Math.random() *(893 -1) +1)));
Team.push(Math.round((Math.random() *(893 -1) +1)));
Team.push(Math.round((Math.random() *(893 -1) +1)));

var TeamName =[];
fetch(`https://pokeapi.co/api/v2/pokemon-species/${Team[0]}/`)
.then(response => response.json())
.then((data) => Pokemon(data));
fetch(`https://pokeapi.co/api/v2/pokemon-species/${Team[1]}/`)
.then(response => response.json())
.then((data) => Pokemon(data));
fetch(`https://pokeapi.co/api/v2/pokemon-species/${Team[2]}/`)
.then(response => response.json())
.then((data) => Pokemon(data));
fetch(`https://pokeapi.co/api/v2/pokemon-species/${Team[3]}/`)
.then(response => response.json())
.then((data) => Pokemon(data));
fetch(`https://pokeapi.co/api/v2/pokemon-species/${Team[4]}/`)
.then(response => response.json())
.then((data) => Pokemon(data));
fetch(`https://pokeapi.co/api/v2/pokemon-species/${Team[5]}/`)
.then(response => response.json())
.then((data) => Pokemon(data));



function Pokemon(i){
    TeamName.push(i.name)
}



function PokemonTeam(){
    return(
        <div id="left-box">
        {<img src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Team[0]}.png`}height ="100px" width = "100px" id="image-box"></img>}
        {<img src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Team[1]}.png`}height ="100px" width = "100px"id="image-box"></img>}
        
        {TeamName[0]}
        {TeamName[1]}
        
        
        {<img src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Team[2]}.png`}height ="100px" width = "100px"id="image-box"></img>}
        
        {<img src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Team[3]}.png`}height ="100px" width = "100px"id="image-box"></img>}
        {TeamName[2]}
        {TeamName[3]}
        
        {<img src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Team[4]}.png`}height ="100px" width = "100px"id="image-box"></img>}
        
        {<img src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Team[5]}.png`}height ="100px" width = "100px"id="image-box"></img>}
        {TeamName[4]}
        {TeamName[5]}
        
    </div>
    )
}

export default PokemonTeam;