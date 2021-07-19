/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import RegistrationForm from "../Components/RegistrationForm";
import Login from "../pages/Login";
import Header from "../Components/Header";

const Register = () => {
	return (
		<div className="form-container">
			<Header />
			{!isSubmitted ? <RegistrationForm submitForm={submitForm} /> : <Login />}
			<div className="form-content-left">
				{/* <img className="head-img" src={logo} alt="alt" /> */}
			</div>
			<RegistrationForm />
		</div>
	);
};

export default Register;
