import React from "react"
import ReactDOM from "react-dom";
import { useState, createContext, useContext } from "react";
import {LoginContext} from "./App"

function LoginLeft(){
	
	const [active, setActive] = useContext(LoginContext);
	
	return <div className="left-box" id="login-left">
				{active == 0 ? 
				<>
				<br />
				Welcome to the pokedex application!
				<br /><br />
				Lets start by logging in or registering a new account in the right hand panel!
				</>
				:
				<>
				<br />
				Welcome back {window.myuser.username}!
				</>
				}
			</div>;
}

export default LoginLeft;