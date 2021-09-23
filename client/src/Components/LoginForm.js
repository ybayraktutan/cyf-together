/*eslint linebreak-style: ["error", "windows"]*/
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "../Style/Form.css";

const LoginForm = () => {

	const linkStyleInput = {
		width: "85vw",
		height: "7vh",
		borderRadius: "30px",
		fontSize: "3vw",
		padding: "2vw 4vw",
		margin: "2vh 0",
	};

	const loginButtonStyle = {
		color: "#FFF",
		backgroundColor: "#6360FF",
		padding: "30px",
		fontSize: "3vw",
		borderRadius: "20px",
		alignItems: "center",
	};

	const registerButtonStyle = {
		color: "#FFF",
		backgroundColor: "#FF8181",
		padding: "30px",
		fontSize: "3vw",
		borderRadius: "20px",
	};

	const [values, setValues] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");

	const handleChange = (e) => {
		const { id, value } = e.target;
		setValues({
			...values,
			[id]: value,
		});
	};

	const history = useHistory();
	const register = () => history.push("/register");
	const termsConditions = () =>history.push("/termsconditions");

	function handleSubmit(e) {
		e.preventDefault();
		const { email, password } = values;
		const body = { email, password };

		// Validation
		if (!email && !password) {
			return setError("The fields cannot be empty");
		}

		if (!email) {
			return setError("Please enter an email");
		}

		if (!password) {
			return setError("Please enter a password");
		}

		setError("");

		let result = fetch("/api/signin", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.auth === "success") {
					history.push("/home");
				} else if (data.auth === "error") {
					setError(data.errors.email);
					history.push("/login");
				}
				localStorage.setItem("users", data.token);
			})
			.catch((error) => {
				console.log("Error:", error);
			});
		localStorage.setItem("users", result);
	}


	const errorMessage = error && <p>{error}</p>;

	return (
		<div id="login">
			{errorMessage}

			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Control
						type="email"
						id="email"
						placeholder="Email"
						style={linkStyleInput}
						value={values.email}
						onChange={(e) => handleChange(e)}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Control
						type="password"
						id="password"
						placeholder="Password"
						style={linkStyleInput}
						value={values.password}
						onChange={(e) => handleChange(e)}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Button
						className="btn-login"
						type="submit"
						variant="default"
						style={loginButtonStyle}
					>
						Sign in
					</Button>
				</Form.Group>
				<Form.Group className="mb-3">
					<h5>Don&apos;t have an account? </h5>
				</Form.Group>
				<Form.Group className="mb-3">
					<Link to="/register" onClick={register}>
						<Button
							className="btn-register"
							variant="default"
							type="submit"
							style={registerButtonStyle}
						>
							Register
						</Button>
					</Link>
				</Form.Group>
				<Form.Group className="mb-3 login-a">
					<Link
						to="/termsconditions"
						onClick={termsConditions}
						style={{ color: "black" }}
					>
						T&C and Privacy Policy
					</Link>
				</Form.Group>
			</Form>
		</div>
	);
};

export default LoginForm;
