import React, { useState } from "react";
import RegistrationForm from "../Components/RegistrationForm";
import Login from "../pages/Login";

const Register = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}
	return (
		<>
			<div className="form-container">
				{/* <span className="close-btn">×</span> */}

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
