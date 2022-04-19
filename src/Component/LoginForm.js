import React from "react"
import ReactDOM from "react-dom";
import { useState, createContext, useContext } from "react";
import {LoginContext} from "../App"

function LoginForm(){
	
	//state from app, might not need with navbar
	const [active, setActive] = useContext(LoginContext);
	
	//could have used state, dont want the re-reneder though
	const myButtonState = {
		state: 0,
		ids: ["login-button", "register-button"]
	};
	
	//an array of user names
	let myUsers = [];
	let myUsernames = [];
	
	//call the function to pull user data
	getUsers();
	
	//pulls data from the players table and calls a setter
	function getUsers(){

		fetch("http://localhost:8080/myuser",{
				header: "asdf",
				headers:{
					"content-type": "application/json",
				},
				method: "get",
			})
			.then((response) => response.json())
			.then((data) => setUsernames(data));
	}
	
	//maps usernames to the usernames array
	function setUsernames(myData){
		
		myUsers = myData;
		myUsernames = [];
		myData.forEach(function(each){
			myUsernames.push(each.usr);
		});
	}
	
	//switches the above state
	const toggleLogReg = (e) => {
		
		if(myButtonState.ids.indexOf(e.target.id) != myButtonState.state){
			document.getElementById(myButtonState.ids[myButtonState.state]).classList.remove("login-nav-buttons-active");
			document.getElementById(myButtonState.ids[Math.abs(myButtonState.state-1)]).classList.add("login-nav-buttons-active");
			myButtonState.state = Math.abs(myButtonState.state-1);
		}
	}
	
	//login/register fork and all the checks and validations
	function submitLogReg(){
		
		//first get user input
		let myUsername = document.getElementById("login-form-username");
		let myPassword = document.getElementById("login-form-password");
		let trash = {};
		
		//null check
		if(myUsername.value && myPassword.value){
			
			//is login selected?
			if(myButtonState.state == 0){
				
				//does the user already exist?
				if(myUsernames.includes(myUsername.value)){
					
					//get the user id for the java method
					myUsers.forEach(function(each){
						
						if(each.usr == myUsername.value){
							trash = {
								id: each.id,
								usr: myUsername.value,
								pwd: myPassword.value
							}
						}
					});
					
					//call the java method to compare the passwords
					fetch("http://localhost:8080/myuser/checkpwd",{
						header: "asdf",
						headers:{
							"content-type": "application/json",
						},
						method: "post",
						body: JSON.stringify(trash)
					})
					.then((response) => response.text())
					//check if the response was true/false, indicating a correct/incorrect password
					.then((data) => {
						
						if(data == "true"){

							window.myuser = {
								username: myUsername.value
							}
							localStorage.setItem("myuser", JSON.stringify(window.myuser));
							setActive(0);
							window.location.reload();
						}else{
							alert("The credentials do not match our records.");
						}
						
					});
					
				}else{
					alert("The user does not exist, please register instead.");
				}
			
			//register must be selected instead
			}else{
				
				//does the user already exist?
				if(!myUsernames.includes(myUsername.value)){
					
					//register user
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
					.then(() => {
						
						window.myuser = {
							username: myUsername.value
						}
						localStorage.setItem("myuser", JSON.stringify(window.myuser));
						setActive(0);
						window.location.reload();
					});
					
				}else{
					alert("The user is already registered, please login instead.");
				}
			}
		}else{
			alert("You must enter a username and password to log in.");
		}
		
	}

	//regex the input and feed it back in, also show if the username is taken
	function valInput(e){
		
		var temp = document.getElementById(e.target.id).value.replace(/[^a-z0-9_]/gi, "");
		document.getElementById(e.target.id).value = temp;
		
		//check if the username is taken and display message
		let isReg = document.getElementById("register-button").classList.contains("login-nav-buttons-active");
		if(e.target.id == "login-form-username" && myUsernames.includes(temp) && isReg){
			document.getElementById("login-form-username-taken").style.display = "block";
		}else{
			document.getElementById("login-form-username-taken").style.display = "none";
		}
	}

	return 	(<>
				{window.myuser == null ?
				<>	
					<div id="login-navbar">
						<div className="login-nav-buttons login-nav-buttons-active" id="login-button" onClick={toggleLogReg}>Login</div>&nbsp;/&nbsp;
						<div className="login-nav-buttons" id="register-button" onClick={toggleLogReg}>Register</div>
					</div>
					<div id="login-form" ><div id="login-form-username-taken">This username is taken.</div>
						<input type="text" id="login-form-username" size="25" placeholder="Username" onChange={valInput}></input>
						<br /><br />
						<input type="text" id="login-form-password" size="25" placeholder="Password" onChange={valInput}></input>
						<br /><br />
						<button type="button" id="login-form-button" onClick={submitLogReg}>Submit</button>
					</div>
				</>
				:
				<div id="login-name">
					<br />
					...{window.myuser.username}
				</div>
				}
			</>);
}

export default LoginForm;