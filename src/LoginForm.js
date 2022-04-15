import React from "react"
import ReactDOM from "react-dom";
import { useState, createContext, useContext } from "react";
import {LoginContext} from "./App"

function LoginForm(){
	
	const [active, setActive] = useContext(LoginContext);
	
	//could have used state, dont want the re-reneder though
	const myButtonState = {
		state: 0,
		ids: ["login-button", "register-button"]
	};
	
	
	function submitLogReg(){
		
		let myUsername = document.getElementById("login-form-username");
		let myPassword = document.getElementById("login-form-password");
		
		if(myUsername.value && myPassword.value){
			window.myuser = {
				username: myUsername.value
			}
			
			let trash = {
				usr: myUsername.value,
				pwd: myPassword.value
			}
			fetch("http://localhost:8080/myuser",{
				header: "asdf",
				headers:{
					"content-type": "application/json",
				},
				method: "post",
				body: JSON.stringify(trash)
			})
			.then((response) => response.json())
			.then((data) => {console.log("asdf");});
			setActive(true);
			
		}else{
			alert("You must enter a username and password to log in.");
		}
		
	}
	
	const toggleLogReg = () => {
		
		document.getElementById(myButtonState.ids[myButtonState.state]).classList.remove("nav-buttons-active");
		document.getElementById(myButtonState.ids[Math.abs(myButtonState.state-1)]).classList.add("nav-buttons-active");
		myButtonState.state = Math.abs(myButtonState.state-1);
		
	}
	
	function valInput(e){
		
		var temp = document.getElementById(e.target.id).value.replace(/[^a-z0-9_]/gi, "");
		document.getElementById(e.target.id).value = temp;
	}
	
	return 	(<>
			<div id="navbar">
				<div className="nav-buttons nav-buttons-active" id="login-button" onClick={toggleLogReg}>login</div>&nbsp;/&nbsp;
				<div className="nav-buttons" id="register-button" onClick={toggleLogReg}>register</div>
			</div>
			<div id="login-form" >
				<input type="text" id="login-form-username" size="25" placeholder="Username" onChange={valInput}></input>
				<br /><br />
				<input type="text" id="login-form-password" size="25" placeholder="Password" onChange={valInput}></input>
				<br /><br />
				<button type="button" id="login-form-button" onClick={submitLogReg}>Submit</button>
			</div>
			</>
			);
}

export default LoginForm;