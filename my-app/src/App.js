
import './App.css';
import './Components/PokemonInformation.css'
import './Components/PokemonMore.css'
import React from "react"
import { createContext, useState } from "react"


import  PokemonInformation  from "./Components/PokemonInformation"


export const LoginContext = createContext();

function App() {
	
	
	const [active, setActive] = useState(false);
	
	

  return (
		
		<div id="app" >
			<LoginContext.Provider value={[active, setActive]}>
			
			<PokemonInformation />
			</LoginContext.Provider>
		</div>
		
  );
}

export default App;