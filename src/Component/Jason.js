import "../Style/login-component.css";
import "../Style/PokemonTeam.css";
import "../Style/PokemonInformation.css";
import "../Style/PokemonMore.css";
import NavBar from "./NavBar";

import React from "react";
import { createContext, useState } from "react";

import TeamView from "./TeamView";
import PokemonTeam from "./PokemonTeam";

export const LoginContext = createContext();

function Jason() {
  const [active, setActive] = useState(false);

  return (
    <>
      <NavBar />
      <div id="jasonApp">
        <LoginContext.Provider value={[active, setActive]}>
          <PokemonTeam />
          <TeamView />
        </LoginContext.Provider>
      </div>
    </>
  );
}

export default Jason;
