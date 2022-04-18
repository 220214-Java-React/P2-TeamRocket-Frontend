import './Style/App.css';
import "./Style/login-component.css";
import React from "react"
import ReactDOM from "react-dom";
import { createContext, useState, useContext } from "react";
import NavBar from "./Component/NavBar"
import LoginLeft from "./Component/LoginLeft"
import LoginRight from "./Component/LoginRight"
import CGallery from "./Component/CGallery"

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
						<NavBar />
						<LoginLeft />
						<LoginRight  />
					</LoginContext.Provider>
				</div>
				
			);
			break;
		case 1:
			return (
				<>
					<LoginContext.Provider value={[active, setActive]}>
						<CGallery/>
					</LoginContext.Provider>
				</>
				
			);
			break;
		case 2:
			return (
				<>
					<LoginContext.Provider value={[active, setActive]}>

					</LoginContext.Provider>
				</>
				
			);
			break;
		case 3:
			return (
				<>
					<LoginContext.Provider value={[active, setActive]}>

					</LoginContext.Provider>
				</>
				
			);
			break;
	}
	
}

export default App;

