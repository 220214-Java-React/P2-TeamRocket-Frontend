import React from "react"
import ReactDOM from "react-dom";
import { useState, createContext, useContext } from "react";
import {LoginContext} from "./App"

function LoginButton(){
	
	const [active, setActive] = useContext(LoginContext);
	
	const logInOut = () => {
		
		if(active){
			setActive(false);
			window.myuser = null;
			localStorage.removeItem("myuser");
		}
	}
	
	return 	(<div id="login-button" onClick={logInOut}>
				{active ? window.myuser.username : "Login"}
			</div>);
}

export default LoginButton;