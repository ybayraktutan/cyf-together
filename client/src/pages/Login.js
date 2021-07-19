/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import LoginForm from "../Components/LoginForm";
import { Redirect } from "react-router-dom";
import "../Style/Form.css";
import Header from "../Components/Header";

const Login = () => {
	return (
		<>
			<div className="form-container">
				<Header />
				{!isSubmitted ? (
					<LoginForm submitForm={submitForm} />
				) : (
					<Redirect to="/Home" />
				)}
				<div className="form-content-left">
					{/* <img className="head-img" src={logo} alt="alt" /> */}
				</div>
				<Header
					title={"Feelz"}
					word={"Your relational development companion"}
				/>
				<LoginForm />
			</div>
		</>
	);
};

export default Login;
