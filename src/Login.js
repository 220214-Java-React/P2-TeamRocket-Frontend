import React from "react"
import { useState, useContext } from "react";


function Login(){
	
	const [isActive, setActive] = useState(false);
	
	const logInOut = () => {
		
		if(isActive){
			setActive(false);
			window.myuser = null;
			localStorage.removeItem("pokedex_user");
		}else{
			setActive(true);
			
		}
	}
	
	return 	<div id="login-button" onClick={logInOut}>
		{isActive ? "Logout" : "Login"}
			</div>;
}

export default Login;