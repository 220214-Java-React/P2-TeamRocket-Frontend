import React from "react"
import { useState } from "react";
import Login from "./Login"

function Right(){
	
	const [loggedin, setLoggedin] = useState(false);
	
	return <div id="right-box">
				<div id="navbar">
					<Login />
				</div>
			</div>;
}


export default Right;