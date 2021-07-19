/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import RegistrationForm from "../Components/RegistrationForm";
import Header from "../Components/Header";

const Register = () => {
	return (
		<div className="form-container">
			<Header />
			<RegistrationForm />
		</div>
	);
};

export default Register;
