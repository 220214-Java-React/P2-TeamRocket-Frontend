import React from "react"
import ReactDOM from "react-dom";
import { useState, createContext, useContext } from "react";
import {LoginContext} from "../App"

function LoginLeft(){
	
	const [active, setActive] = useContext(LoginContext);
	
	return <div className="left-box" id="login-left">
				{window.myuser == null? 
				<>
				<br />
				Welcome to the pokedex application! 
				<br /><br />
				Start by logging in or registering a new account to the right!
				</>
				:
				<>
				<br />
				Welcome back...
				</>
				}
			</div>;
}

export default LoginLeft;