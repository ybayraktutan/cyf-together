import React, { useState } from "react";
import LoginForm from "../Components/LoginForm";
// import logo from "../pages/logo1.png";
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
				{/* <span className="close-btn">×</span> */}

				<Header
					title={"Feelz"}
					word={"We are happier and healthier together"}
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
