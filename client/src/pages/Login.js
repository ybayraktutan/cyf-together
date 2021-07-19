import React, { useState } from "react";
import LoginForm from "../Components/LoginForm";
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
				<Header />
				{!isSubmitted ? (
					<LoginForm submitForm={submitForm} />
				) : (
					<Redirect to="/Home" />
				)}
			</div>
		</>
	);
};

export default Login;
