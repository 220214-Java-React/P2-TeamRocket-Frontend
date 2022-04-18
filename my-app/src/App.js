import "./App.css";
import "./Components/PokemonInformation.css";
import "./Components/PokemonMore.css";
import "./Components/PokemonTeam.css";
import React from "react";
import ReactDOM from "react-dom";
import { createContext, useState, useContext, useEffect } from "react";
import Left from "./Hooks/Left";
import Right from "./Hooks/Right";
import PokemonTeam from "./Components/PokemonTeam";

import PokemonInformation from "./Components/PokemonInformation";
import PokemonMore from "./Components/PokemonMore";
import PokemonForm from "./Components/PokemonForm";
import "./App.css";
import "./Components/PokemonTeam.css";
import "./Components/PokemonForm.css";
import TeamView from "./Components/TeamView";
export const LoginContext = createContext();

function App() {
  const [active, setActive] = useState(false);

  // let temp = localStorage.getItem("myuser");
  // if(temp != null){
  // window.myuser = JSON.parse(temp);
  // setActive(true);
  // }else{
  // window.myuser = null;
  // setActive(false);
  // }

  return (
    <div id="app">
      <LoginContext.Provider value={[active, setActive]}>
        <PokemonTeam />
        <TeamView />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
