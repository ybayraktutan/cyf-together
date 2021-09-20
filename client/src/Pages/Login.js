/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import { Container } from "react-bootstrap";
import "../Style/Form.css";
import LoginForm from "../Components/LoginForm";
import Header from "../Components/Header";



const Login = () => {
	return (
		<Container
			fluid
			className="form-container"
			style={{ margin: "0", padding: "0" }}
		>
			<Header />
			<LoginForm />
		</Container>
	);
};

export default Login;
