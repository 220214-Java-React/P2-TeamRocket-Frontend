import './App.css';
import React from "react"
import ReactDOM from "react-dom";
import { createContext, useState, useContext } from "react";
import Left from "./Left"
import Right from "./Right"

export const LoginContext = createContext();

function App() {
	
	const [active, setActive] = useState(false);
	
	let temp = localStorage.getItem("myuser");
	// if(temp != null){
		// window.myuser = JSON.parse(temp);
		// setActive(true);
	// }else{
		// window.myuser = null;
		// setActive(false);
	// }

  return (
		
		<div id="app" >
			<Left />
			<LoginContext.Provider value={[active, setActive]}>
			<Right  />
			</LoginContext.Provider>
		</div>
		
  );
}

export default App;

