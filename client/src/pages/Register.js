import React, { useState } from "react";
import RegistrationForm from "../Components/RegistrationForm";
import Login from "../pages/Login";
import Header from "../Components/Header";

const Register = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}
	return (
		<>
			<div className="form-container">
				<Header />
				{!isSubmitted ? (
					<RegistrationForm submitForm={submitForm} />
				) : (
					<Login />
				)}
			</div>
		</>
	);
};

export default Register;
