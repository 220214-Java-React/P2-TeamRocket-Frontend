
import './App.css';
import './Components/PokemonInformation.css'
import './Components/PokemonMore.css'
import './Components/PokemonTeam.css'
import React from "react"
import ReactDOM from "react-dom";
import { createContext, useState, useContext } from "react"
import Left from "./Hooks/Left"
import Right from "./Hooks/Right"
import PokemonTeam from './Components/PokemonTeam'

import  PokemonInformation  from "./Components/PokemonInformation"
import PokemonMore from './Components/PokemonMore';

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
		
		<div id="app" >
			<LoginContext.Provider value={[active, setActive]}>
			<PokemonMore />
			<PokemonInformation />
			</LoginContext.Provider>
		</div>
		
  );
}

export default App;