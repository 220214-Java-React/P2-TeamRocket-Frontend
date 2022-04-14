import React from "react"
import ReactDOM from "react-dom";
import { useState, createContext, useContext } from "react";
import {LoginContext} from "./../App"

function LoginForm(){
	
	const [active, setActive] = useContext(LoginContext);

	
	function submitLogin(){
		
		let myUsername = document.getElementById("login-form-username");
		let myPassword = document.getElementById("login-form-password");
		
		window.myuser = {
			username: myUsername.value
		}
		setActive(true);
	}
	
	function valInput(e){
		
		var temp = document.getElementById(e.target.id).value.replace(/[^a-z0-9_]/gi, "");
		document.getElementById(e.target.id).value = temp;
	}
	
	return 	(<div id="login-form" >
				<input type="text" id="login-form-username" size="25" placeholder="Username" onChange={valInput}></input>
				<br /><br />
				<input type="text" id="login-form-password" size="25" placeholder="Password" onChange={valInput}></input>
				<br /><br />
				<button type="button" id="login-form-button" onClick={submitLogin}>Submit</button>
			</div>);
}

export default LoginForm;