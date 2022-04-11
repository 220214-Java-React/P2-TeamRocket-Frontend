import './App.css';
import React from "react"
import { useState } from "react";
import Left from "./Left"
import Right from "./Right"


function App() {
	
	let temp = localStorage.getItem("pokedex_user");
	
	if(temp != null){
		window.myuser = JSON.parse(temp);
	}else{
		window.myuser = null;
	}

  return (
		<div id="app" >
			<Left />
			<Right />
		</div>
  );
}

export default App;
