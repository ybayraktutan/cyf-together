/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import logo from "../Utils/logo.png";

const Header = () => {
	return (
		<div id="app-header">
			<div className="logo">
				<img className="logo" src={logo} alt="logo" />
			<div>
				<h1>Feelz</h1>
			</div>
			<div className="content">
				<p>We are happier and healthier together</p>
			</div>
		</div>
		</div>
	);
};

export default Header;
