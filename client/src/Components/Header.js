import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import logo from "../pages/logo1.png";

const Header = (props) => {
	const history = useHistory();

	const login = () => history.push("/login");
	return (
		<div id="app-header">
			<div className="logo">
				<img className="logo" src={logo} alt="logo" />
			</div>
			<div>
				<h1>{props.title}</h1>
			</div>
			<div className="content">
				<p>{props.word}</p>
			</div>
			<div>
				<NavLink to="/login" onClick={login} id="log-out">
					{props.nav}
				</NavLink>
			</div>
		</div>
	);
};

export default Header;
