import './App.css';
import "./login-component.css";
import React from "react"
import ReactDOM from "react-dom";
import { createContext, useState, useContext } from "react";
import LoginLeft from "./LoginLeft"
import LoginRight from "./LoginRight"

export const LoginContext = createContext();

function App() {
	
	const [active, setActive] = useState(0);
	
	let temp = localStorage.getItem("myuser");
	if(temp != null){
		window.myuser = JSON.parse(temp);
	}else{
		window.myuser = null;
		if(active != 0){
			setActive(0);
		}
	}

	switch(active){
		case 0:
			return (
				<div id="login-component" >
					<LoginContext.Provider value={[active, setActive]}>
						<LoginLeft />
						<LoginRight  />
					</LoginContext.Provider>
				</div>
				
			);
			break;
	}
	
}

export default App;
