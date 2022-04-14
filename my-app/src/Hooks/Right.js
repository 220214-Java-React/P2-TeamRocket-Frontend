import React from "react"
import ReactDOM from "react-dom";
import { useState, createContext, useContext } from "react";
import LoginButton from "./LoginButton"
import LoginForm from "./../Components/LoginForm"
import {LoginContext} from "./../App"


function Right(){
	
	const [active, setActive] = useContext(LoginContext);
	

	return (<div id="right-box">
				<div id="navbar">
					<LoginButton />
				</div>
				{active ? "" : <LoginForm />}
			</div>
	);
}


export default Right;

