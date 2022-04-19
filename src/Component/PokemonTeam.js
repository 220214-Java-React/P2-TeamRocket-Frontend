var Team = [];

Team.push(Math.round(Math.random() * (151 - 1) + 1));
Team.push(Math.round(Math.random() * (151 - 1) + 1));
Team.push(Math.round(Math.random() * (151 - 1) + 1));
Team.push(Math.round(Math.random() * (151 - 1) + 1));
Team.push(Math.round(Math.random() * (151 - 1) + 1));
Team.push(Math.round(Math.random() * (151 - 1) + 1));

function saveTeam() {
  const storeTeam = {
    position1: Team[0],
    position2: Team[1],
    position3: Team[2],
    position4: Team[3],
    position5: Team[4],
    position6: Team[5],
    userid: 1,
  };

  fetch("http://localhost:8080/team", {
    header: "asdf",
    headers: { "content-type": "application/json" },
    method: "POST",
    body: JSON.stringify(storeTeam),
  }).then((response) => response.json());
}

function PokemonTeam() {
  return (
    <div id="left-box">
      {
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Team[0]}.png`}
          height="100px"
          width="100px"
          id="image-box"
        ></img>
      }
      {
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Team[1]}.png`}
          height="100px"
          width="100px"
          id="image-box"
        ></img>
      }

      {
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Team[2]}.png`}
          height="100px"
          width="100px"
          id="image-box"
        ></img>
      }

      {
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Team[3]}.png`}
          height="100px"
          width="100px"
          id="image-box"
        ></img>
      }

      {
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Team[4]}.png`}
          height="100px"
          width="100px"
          id="image-box"
        ></img>
      }

      {
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Team[5]}.png`}
          height="100px"
          width="100px"
          id="image-box"
        ></img>
      }

      <button onClick={() => saveTeam()}>Save Team</button>
    </div>
  );
}

export default PokemonTeam;
