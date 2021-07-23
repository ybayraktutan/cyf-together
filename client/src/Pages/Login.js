/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import LoginForm from "../Components/LoginForm";
import "../Style/Form.css";

import Header from "../Components/Header";

const Login = () => {
	return (
		<>
			<div className="form-container">
				<Header />
				<LoginForm />
			</div>
		</>
	);
};

export default Login;
