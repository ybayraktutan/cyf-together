/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../pages/logo.png";
import "../Style/Form.css";

const FormSuccess = () => {
	const linkStyle = {
		color: "#FF8181",
	};
	return (
		<div className="form-content-right">
			<img className="form-img-2" src={logo} alt="success" />
			<div>
				<h1 className="form-success">Welcome to Feelz!</h1>
			</div>
			<NavLink to="/Home" style={linkStyle}>
				Go to account
			</NavLink>
		</div>
	);
};

export default FormSuccess;
