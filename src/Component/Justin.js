import '../Style/Justin.css';
import '../Style/login-component.css';
import '../Style/PokemonInformation.css'
import '../Style/PokemonMore.css'
import NavBar from "./NavBar";

import React from "react"
import { createContext, useState } from "react"


import  PokemonInformation  from "./PokemonInformation"


export const LoginContext = createContext();

function Justin() {
	
	
	const [active, setActive] = useState(false);
	
	

  return (
		<><NavBar />
		<div id="justinApp" >
			<LoginContext.Provider value={[active, setActive]}>
			
			<PokemonInformation />
			</LoginContext.Provider>
		</div></>
		
  );
}

export default Justin;