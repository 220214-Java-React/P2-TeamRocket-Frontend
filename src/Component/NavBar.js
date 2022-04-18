import React from "react"
import ReactDOM from "react-dom";
import { useState, createContext, useContext } from "react";
import {LoginContext} from "../App"


function NavBar(){
	
	const [active, setActive] = useContext(LoginContext);
	
	function navigateComponents(e){


		if(window.myuser){
			
			let myNavs = document.getElementById("navbar").childNodes;
			
			myNavs.forEach(each => {
				each.classList.replace("nav-button-active", "nav-button");
			});
			
			document.getElementById(e.target.id).classList.replace("nav-button", "nav-button-active");
			
			let tempInt = parseInt(e.target.id.charAt(e.target.id.length-1));
			
			if(tempInt == 0 && window.myuser){
				if(window.confirm("Logout?")){
					window.myuser = null;
					localStorage.removeItem("myuser");
					setActive(0);
					window.location.reload();
				}
			}
			
			setActive(tempInt);
			
		}else{
			alert("Please login to access other features.");
		}
	}
	
	return (<div id="navbar">
				<div className="nav-button-left nav-button-active" id="nav-button-0" onClick={navigateComponents}>{window.myuser == null ? "Login" : window.myuser.username}</div>
				<div className="nav-button" id="nav-button-1" onClick={navigateComponents}>two</div>
				<div className="nav-button" id="nav-button-2" onClick={navigateComponents}>three</div>
				<div className="nav-button-right nav-button" id="nav-button-3" onClick={navigateComponents}>four</div>
			</div>
	);
}

export default NavBar;

