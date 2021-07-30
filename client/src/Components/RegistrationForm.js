/*eslint linebreak-style: ["error", "windows"]*/
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import useForm from "../Utils/useFormreg";
import "../Style/Form.css";
import { Form, Button, Card } from "react-bootstrap";

const RegistrationForm = () => {
	const { handleChange, values } = useForm();
	const [error, setError] = useState("");

	const history = useHistory();
	const login = () => history.push("/login");

	function handleSubmit(e) {
		e.preventDefault();

		const { email, password, passwordCheck } = values;
		const body = { email, password };

		// Validation
		if (!email && !password) {
			return setError("The fields cannot be empty");
		}

		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
			return setError("Email address is invalid");
		}

		if (!password) {
			return setError("Password is required");
		}

		if (password !== passwordCheck) {
			return setError("Passwords must match");
		}

		if (!/^(.{0,7}|[^0-9]*|[^A-Z]*|[a-zA-Z0-9]*)$/i.test(password)) {
			return setError(
				"Passwords must contain a number and at least 8 characters"
			);
		}

		setError("");
		let result = fetch("/api/register", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.register === "success") {
					console.log(data);
					history.push("/login");
				} else if (
					data.register === "error" ||
					data.register === "error-registereduser"
				) {
					console.log(data);
					history.push("/register");
				}
			});
		localStorage.setItem("users", result);
	}

	const linkStyleInput = {
		width: "85vw",
		height: "7vh",
		borderRadius: "30px",
		fontSize: "3vw",
		padding: "2vw 4vw",
		margin: "0",
	};

	const errorMessage = error && <p>{error}</p>;

	return (
		<div id="login">
			{errorMessage}

			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Control
						type="text"
						id="firstname"
						placeholder="Firstname"
						style={linkStyleInput}
						value={values.firstname}
						onChange={(e) => handleChange(e)}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Control
						type="text"
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
				{/* {errors.passwordCheck && <p>{errors.passwordCheck}</p>} */}
				<Form.Group className="mb-3">
					<Form.Control
						type="password"
						id="passwordCheck"
						placeholder="Confirm password"
						style={linkStyleInput}
						value={values.passwordCheck}
						onChange={(e) => handleChange(e)}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Button
						className="btn-login"
						type="submit"
						variant="default"
						style={{
							color: "#FFF",
							backgroundColor: "#6360FF",
							padding: "30px",
							fontSize: "3vw",
							borderRadius: "20px",
							alignItems: "center",
						}}
					>
						Register
					</Button>
				</Form.Group>
				<Form.Group className="mb-3">
					<h5>Already have an account?</h5>
				</Form.Group>
				<Form.Group className="mb-3">
					<Link to="/login" onClick={login}>
						{" "}
						<Button
							className="btn-register"
							variant="default"
							type="submit"
							style={{
								color: "#FFF",
								backgroundColor: "#FF8181",
								padding: "30px",
								fontSize: "3vw",
								borderRadius: "20px",
							}}
						>
							Sign in
						</Button>
					</Link>
				</Form.Group>
				<Form.Group className="mb-3 login-a">
					<Card.Link
						style={{ color: "black" }}
						href="https://docs.google.com/document/d/1cFbL3tTzqIqhw0KOWo-GcovGaudEC9iBzuiKdypfwCY/edit"
					>
						T&C and Privacy Policy
					</Card.Link>
				</Form.Group>
			</Form>
		</div>
	);
};

export default RegistrationForm;

