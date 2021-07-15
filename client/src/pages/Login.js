import React, { useState } from "react";
import LoginForm from "../Components/LoginForm";
//import logo from "../pages/logo.png";
import { Redirect } from "react-router-dom";
import "../Style/Form.css";
import Header from "../Components/Header";

const Login = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}
	return (
		<>
			<div className="form-container">
				<span className="close-btn">×</span>
				<div className="form-content-left">
					{/* <img className="head-img" src={logo} alt="alt" /> */}
				</div>
				<Header
					title={"Feelz"}
					word={"Your relational development companion"}
				/>
				{!isSubmitted ? (
					<LoginForm submitForm={submitForm} />
				) : (
					<Redirect to="/success" />
				)}
			</div>
		</>
	);
};

export default Login;
