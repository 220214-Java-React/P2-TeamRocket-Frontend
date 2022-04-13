import './App.css';
import React from "react"
import ReactDOM from "react-dom";
import { createContext, useState, useContext } from "react";
import Left from "./Left"
import Right from "./Right"

export const LoginContext = createContext();

function App() {
	
	const [active, setActive] = useState(0);
	
	let temp = localStorage.getItem("myuser");
	if(temp != null){
		window.myuser = JSON.parse(temp);
	}else{
		window.myuser = null;
		//setActive(0); causes an infinite re-render loop which react terminates *shrug*
	}

	switch(active){
		case 0:
			return (
				<div id="app" >
					<LoginContext.Provider value={[active, setActive]}>
					<Left />
					<Right  />
					</LoginContext.Provider>
				</div>
				
			);
			break;
	}
	
}

export default App;

