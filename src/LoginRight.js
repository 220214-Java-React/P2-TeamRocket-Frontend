import React from "react"
import ReactDOM from "react-dom";
import { useState, createContext, useContext } from "react";
import LoginForm from "./LoginForm"
import {LoginContext} from "./App"


function LoginRight(){
	
	const [active, setActive] = useContext(LoginContext);
	
	return (<div className="right-box">
				{active == 0 ? <LoginForm /> : ""}
			</div>
	);
}


export default LoginRight;

