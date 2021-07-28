/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import RegistrationForm from "../Components/RegistrationForm";
import Header from "../Components/Header";
import { Container } from "react-bootstrap";

const Register = () => {
	return (
	<Container
			fluid
			className="form-container"
			style={{ margin: "0", padding: "0" }}
		>
			<Header />
			<RegistrationForm />
		</Container>
	);
};

export default Register;
